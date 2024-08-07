import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Articulo, ArticuloEstado } from '../entity/articulo.entity';

type Filter = {
  estado?: ArticuloEstado;
  existencia?: number;
  costo?: number;
  descripcion?: string;
};

const allowedStatus = ['Existente', 'Agotado'];

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(Articulo)
    private articuloRepository: Repository<Articulo>,
  ) {}

  async findAll(filter: Filter = {}): Promise<Articulo[]> {
    const { estado, existencia, costo, descripcion = '' } = filter;
    const where = {};
    if (allowedStatus.includes(estado)) where['estado'] = estado;
    if (existencia) where['existencia'] = existencia;
    if (costo) where['costoUnitario'] = costo;
    if (descripcion) where['descripcion'] = Like(`%${descripcion}%`);

    return this.articuloRepository.find({ where });
  }

  findOne(id: number): Promise<Articulo> {
    return this.articuloRepository.findOneBy({ id });
  }

  async create(articulo: Articulo): Promise<void> {
    await this.articuloRepository.insert({
      almacenId: articulo.almacenId,
      costoUnitario: articulo.costoUnitario,
      descripcion: articulo.descripcion,
      existencia: articulo.existencia,
      tipoInventarioId: articulo.tipoInventarioId,
      estado: 'Existente',
    });
  }

  async update(id: number, articulo: Articulo): Promise<Articulo> {
    await this.articuloRepository.update(id, {
      almacenId: articulo.almacenId,
      costoUnitario: articulo.costoUnitario,
      descripcion: articulo.descripcion,
      existencia: articulo.existencia,
      tipoInventarioId: articulo.tipoInventarioId,
      estado: articulo.estado,
    });
    return this.articuloRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.articuloRepository.delete({ id });
  }
}
