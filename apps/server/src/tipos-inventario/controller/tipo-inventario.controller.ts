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
import { TipoInventarioService } from '../service/tipo-inventario.service';
import {
  TipoInventario,
  TipoInventarioEstado,
} from '../entity/tipo-inventario.entity';

@Controller('tipos-inventario')
export class TipoInventarioController {
  constructor(private readonly tipoInventarioService: TipoInventarioService) {}

  @Get()
  findAll(
    @Query('estado') estado?: TipoInventarioEstado,
  ): Promise<TipoInventario[]> {
    return this.tipoInventarioService.findAll(estado);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TipoInventario> {
    return this.tipoInventarioService.findOne(id);
  }

  @Post()
  create(@Body() tipoInventario: TipoInventario): Promise<void> {
    return this.tipoInventarioService.create(tipoInventario);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() tipoInventario: TipoInventario,
  ): Promise<TipoInventario> {
    return this.tipoInventarioService.update(id, tipoInventario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tipoInventarioService.remove(id);
  }
}
