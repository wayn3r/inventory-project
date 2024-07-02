import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoInventario } from './entity/tipo-inventario.entity';
import { TipoInventarioService } from './service/tipo-inventario.service';
import { TipoInventarioController } from './controller/tipo-inventario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoInventario])],
  providers: [TipoInventarioService],
  controllers: [TipoInventarioController],
})
export class TipoInventarioModule {}
