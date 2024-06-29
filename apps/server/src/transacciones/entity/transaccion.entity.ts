import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type TransactionType = 'Entrada' | 'Salida' | 'Traslado' | 'Ajuste';

@Entity('Transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ type: 'nvarchar', length: 10, name: 'TipoTransaccion' })
  tipoTransaccion: TransactionType;

  @Column({ name: 'ArticuloID' })
  articuloId: number;

  @Column({ type: 'datetime', name: 'Fecha' })
  fecha: Date;

  @Column({ name: 'Cantidad' })
  cantidad: number;

  @Column({ type: 'decimal', name: 'monto', precision: 18, scale: 2 })
  monto: number;

  //   @ManyToOne(() => Articulo, (articulo) => articulo.transacciones)
  //   @JoinColumn({ name: 'articuloID' })
  //   articulo: Articulo;
}
