import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articulo } from './entity/articulo.entity';
import { ArticuloService } from './service/articulo.service';
import { ArticuloController } from './controller/articulo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Articulo])],
  providers: [ArticuloService],
  controllers: [ArticuloController],
})
export class ArticuloModule {}
