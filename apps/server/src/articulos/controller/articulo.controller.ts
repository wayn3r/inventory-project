import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ArticuloService } from '../service/articulo.service';
import { Articulo, type ArticuloEstado } from '../entity/articulo.entity';

@Controller('articulos')
export class ArticuloController {
  constructor(private readonly articuloService: ArticuloService) {}

  @Get()
  findAll(@Query() filter?: Record<string, string>): Promise<Articulo[]> {
    const { estado, existencia, descripcion, costo } = filter;
    return this.articuloService.findAll({
      existencia: Number.isInteger(parseInt(existencia))
        ? Number(existencia)
        : undefined,
      costo: Number.isInteger(parseInt(costo)) ? Number(costo) : undefined,
      descripcion,
      estado: estado as ArticuloEstado,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Articulo> {
    return this.articuloService.findOne(id);
  }

  @Post()
  create(@Body() articulo: Articulo): Promise<void> {
    return this.articuloService.create(articulo);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() articulo: Articulo,
  ): Promise<Articulo> {
    return this.articuloService.update(id, articulo);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.articuloService.remove(id);
  }
}
