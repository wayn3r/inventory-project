import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type TipoInventarioEstado = 'Activo' | 'Inactivo';

@Entity('TiposInventario')
export class TipoInventario {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'Descripcion' })
  descripcion: string;

  @Column({ name: 'CuentaContable' })
  cuentaContable: string;

  @Column({ name: 'Estado' })
  estado: TipoInventarioEstado;
}
