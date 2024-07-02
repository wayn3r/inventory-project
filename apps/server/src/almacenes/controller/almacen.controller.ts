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
import { AlmacenService } from '../service/almacen.service';
import { Almacen, EstadoAlmacen } from '../entity/almacen.entity';

@Controller('almacenes')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Get()
  findAll(@Query('estado') estado?: EstadoAlmacen): Promise<Almacen[]> {
    return this.almacenService.findAll(estado);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Almacen> {
    return this.almacenService.findOne(id);
  }

  @Post()
  create(@Body() almacen: Almacen): Promise<void> {
    return this.almacenService.create(almacen);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() almacen: Almacen): Promise<Almacen> {
    return this.almacenService.update(id, almacen);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.almacenService.remove(id);
  }
}
