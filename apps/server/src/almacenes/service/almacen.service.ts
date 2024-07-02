import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Almacen, EstadoAlmacen } from '../entity/almacen.entity';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Almacen)
    private almacenRepository: Repository<Almacen>,
  ) {}

  async findAll(estado?: EstadoAlmacen): Promise<Almacen[]> {
    return this.almacenRepository.find({ where: { estado } });
  }

  findOne(id: number): Promise<Almacen> {
    return this.almacenRepository.findOneBy({ id });
  }

  async create(almacen: Almacen): Promise<void> {
    await this.almacenRepository.insert({
      descripcion: almacen.descripcion,
      locacion: almacen.locacion,
      estado: 'Activo',
    });
  }

  async update(id: number, almacen: Almacen): Promise<Almacen> {
    await this.almacenRepository.update(id, {
      descripcion: almacen.descripcion,
      locacion: almacen.locacion,
      estado: almacen.estado,
    });
    return this.almacenRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.almacenRepository.delete({ id });
  }
}
