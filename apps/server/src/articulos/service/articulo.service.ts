import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articulo, ArticuloEstado } from '../entity/articulo.entity';

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(Articulo)
    private articuloRepository: Repository<Articulo>,
  ) {}

  async findAll(estado?: ArticuloEstado): Promise<Articulo[]> {
    return this.articuloRepository.find({ where: { estado } });
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
