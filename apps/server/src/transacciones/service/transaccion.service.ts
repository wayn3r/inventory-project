import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from '../entity/transaccion.entity';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionesRepository: Repository<Transaccion>,
  ) {}

  findAll(): Promise<Transaccion[]> {
    return this.transaccionesRepository.find();
  }

  findOne(id: number): Promise<Transaccion> {
    return this.transaccionesRepository.findOneBy({ id });
  }

  create(transaccion: Transaccion): Promise<Transaccion> {
    return this.transaccionesRepository.save(transaccion);
  }

  async update(id: number, transaccion: Transaccion): Promise<Transaccion> {
    await this.transaccionesRepository.update(id, transaccion);
    return this.transaccionesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.transaccionesRepository.delete({ id });
  }
}
