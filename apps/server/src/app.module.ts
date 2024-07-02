import { Module } from '@nestjs/common';
import { CommonModule } from './common';
import { ConfigModule } from '@nestjs/config';
import { TransaccionModule } from './transacciones/transaccion.module';
import { AlmacenModule } from './almacenes/almacen.module';
import { TipoInventarioModule } from './tipos-inventario/tipo-inventario.module';
import { ArticuloModule } from './articulos/articulo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CommonModule,
    TransaccionModule,
    AlmacenModule,
    TipoInventarioModule,
    ArticuloModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
