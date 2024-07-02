import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type ArticuloEstado = 'Existente' | 'Agotado';

@Entity('Articulos')
export class Articulo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'Descripcion' })
  descripcion: string;

  @Column({ name: 'Existencia' })
  existencia: number;

  @Column({ name: 'TipoInventarioID' })
  tipoInventarioId: number;

  @Column({ name: 'AlmacenID' })
  almacenId: number;

  @Column({ type: 'decimal', name: 'CostoUnitario', precision: 18, scale: 2 })
  costoUnitario: number;

  @Column({ name: 'Estado' })
  estado: ArticuloEstado;
}
