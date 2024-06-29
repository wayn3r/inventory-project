import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from '../entity/transaccion.entity';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionesRepository: Repository<Transaccion>,
  ) { }

  async findAll(): Promise<Transaccion[]> {
    return this.transaccionesRepository.find();
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
