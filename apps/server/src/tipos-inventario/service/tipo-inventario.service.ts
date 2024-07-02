import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  TipoInventario,
  TipoInventarioEstado,
} from '../entity/tipo-inventario.entity';

@Injectable()
export class TipoInventarioService {
  constructor(
    @InjectRepository(TipoInventario)
    private tipoInventarioRepository: Repository<TipoInventario>,
  ) {}

  async findAll(estado?: TipoInventarioEstado): Promise<TipoInventario[]> {
    return this.tipoInventarioRepository.find({ where: { estado } });
  }

  findOne(id: number): Promise<TipoInventario> {
    return this.tipoInventarioRepository.findOneBy({ id });
  }

  async create(tipoInventario: TipoInventario): Promise<void> {
    await this.tipoInventarioRepository.insert({
      cuentaContable: tipoInventario.cuentaContable,
      descripcion: tipoInventario.descripcion,
      estado: 'Activo',
    });
  }

  async update(
    id: number,
    tipoInventario: TipoInventario,
  ): Promise<TipoInventario> {
    await this.tipoInventarioRepository.update(id, {
      cuentaContable: tipoInventario.cuentaContable,
      descripcion: tipoInventario.descripcion,
      estado: tipoInventario.estado,
    });
    return this.tipoInventarioRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.tipoInventarioRepository.delete({ id });
  }
}
