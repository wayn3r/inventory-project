import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type TransactionType = 'Entrada' | 'Salida' | 'Traslado' | 'Ajuste';

@Entity('Transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ length: 10, name: 'TipoTransaccion' })
  tipoTransaccion: TransactionType;

  @Column({ name: 'ArticuloID' })
  articuloId: number;

  @Column({ name: 'Fecha' })
  fecha: Date;

  @Column({ name: 'Cantidad' })
  cantidad: number;

  @Column({ name: 'monto', precision: 18, scale: 2 })
  monto: number;
}
