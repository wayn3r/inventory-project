import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type EstadoAlmacen = 'Activo' | 'Inactivo';

@Entity('Almacenes')
export class Almacen {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'Descripcion' })
  descripcion: string;

  @Column({ name: 'Locacion' })
  locacion: string;

  @Column({ name: 'Estado' })
  estado: EstadoAlmacen;
}
