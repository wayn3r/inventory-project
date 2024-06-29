import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TransaccionService } from '../service/transaccion.service';
import { Transaccion } from '../entity/transaccion.entity';

@Controller('transacciones')
export class TransaccionController {
  constructor(private readonly transaccionesService: TransaccionService) {}

  @Get()
  findAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Transaccion> {
    return this.transaccionesService.findOne(id);
  }

  @Post()
  create(@Body() transaccion: Transaccion): Promise<void> {
    return this.transaccionesService.create(transaccion);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() transaccion: Transaccion,
  ): Promise<Transaccion> {
    return this.transaccionesService.update(id, transaccion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.transaccionesService.remove(id);
  }
}
