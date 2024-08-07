import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, IsNull, In } from 'typeorm';
import { Transaccion } from '../entity/transaccion.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { xml2js } from 'xml-js';

type Filter = {
  from: string;
  to: string;
  noAsiento: boolean;
};

const ID_AUXILIAR = 4;
const ID_CUENTA_DB = 6;
const ID_CUENTA_CR = 82;

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionesRepository: Repository<Transaccion>,
    private readonly http: HttpService,
  ) {}

  async findAll(filter: Filter): Promise<Transaccion[]> {
    const where = this.mapFilters(filter);
    return this.transaccionesRepository.find({ where });
  }

  private mapFilters(filter: Filter) {
    const where = {};

    if (filter.noAsiento) where['asientoContable'] = IsNull();

    if (filter.from && filter.to) {
      const from = new Date(filter.from);
      const to = new Date(filter.to);
      where['fecha'] = Between(from, to);
    }
    return where;
  }

  async generateAsiento(filter: Filter, now = new Date()): Promise<void> {
    const where = this.mapFilters(filter);
    const transacciones = await this.transaccionesRepository.find({
      where: { ...where, asientoContable: IsNull() },
    });
    if (!transacciones.length) return;

    const montoTotal = transacciones.reduce((acc, t) => acc + t.monto, 0);
    const descripcion = `Asiento de Inventarios correspondiente al periodo ${now.getMonth() + 1}-${now.getFullYear()}`;
    // Generate asiento contable
    const soapRequest = `
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <AsientoContable xmlns="http://tempuri.org/">
            <idAuxiliarOrigen>${ID_AUXILIAR}</idAuxiliarOrigen>
            <descripcion>${descripcion}</descripcion>
            <cuentaDB>${ID_CUENTA_DB}</cuentaDB>
            <cuentaCR>${ID_CUENTA_CR}</cuentaCR>
            <monto>${montoTotal}</monto>
          </AsientoContable>
        </soap:Body>
      </soap:Envelope>`;

    const response = await firstValueFrom(
      this.http.post(
        'http://www.contabilidadws.somee.com/SSWS.asmx',
        soapRequest,
        {
          headers: {
            'Content-Type': 'text/xml',
            SOAPAction: 'http://tempuri.org/AsientoContable',
            Accept: 'text/xml',
          },
          responseType: 'json',
        },
      ),
    );

    const data = xml2js(response.data, { compact: true });

    const id =
      data['soap:Envelope']['soap:Body']['AsientoContableResponse'][
        'AsientoContableResult'
      ]._text;

    await this.transaccionesRepository.update(
      transacciones.map((t) => t.id),
      { asientoContable: String(id) },
    );
  }

  findOne(id: number): Promise<Transaccion> {
    return this.transaccionesRepository.findOneBy({ id });
  }

  async create(transaccion: Transaccion): Promise<void> {
    await this.transaccionesRepository.insert({
      tipoTransaccion: transaccion.tipoTransaccion,
      articuloId: transaccion.articuloId,
      fecha: transaccion.fecha,
      cantidad: transaccion.cantidad,
      monto: transaccion.monto,
    });
  }

  async update(id: number, transaccion: Transaccion): Promise<Transaccion> {
    await this.transaccionesRepository.update(id, {
      tipoTransaccion: transaccion.tipoTransaccion,
      articuloId: transaccion.articuloId,
      fecha: transaccion.fecha,
      cantidad: transaccion.cantidad,
      monto: transaccion.monto,
    });
    return this.transaccionesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.transaccionesRepository.delete({ id });
  }
}
