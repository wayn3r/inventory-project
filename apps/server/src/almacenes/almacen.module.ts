import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacen } from './entity/almacen.entity';
import { AlmacenService } from './service/almacen.service';
import { AlmacenController } from './controller/almacen.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Almacen])],
  providers: [AlmacenService],
  controllers: [AlmacenController],
})
export class AlmacenModule {}
