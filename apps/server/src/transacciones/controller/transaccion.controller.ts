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
import { TransaccionService } from '../service/transaccion.service';
import { Transaccion } from '../entity/transaccion.entity';

@Controller('transacciones')
export class TransaccionController {
  constructor(private readonly transaccionesService: TransaccionService) {}

  @Get()
  findAll(@Query() filter: Record<string, string>): Promise<Transaccion[]> {
    const { from, to, noAsiento } = filter;
    return this.transaccionesService.findAll({
      from,
      to,
      noAsiento: noAsiento && noAsiento === 'true',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Transaccion> {
    return this.transaccionesService.findOne(id);
  }

  @Post()
  create(@Body() transaccion: Transaccion): Promise<void> {
    return this.transaccionesService.create(transaccion);
  }

  @Post('generate-asiento')
  generate(@Query() filter: Record<string, string>): Promise<void> {
    const { from, to, noAsiento } = filter;
    return this.transaccionesService.generateAsiento({
      from,
      to,
      noAsiento: noAsiento && noAsiento === 'true',
    });
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
