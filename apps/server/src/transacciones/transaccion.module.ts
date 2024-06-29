import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entity/transaccion.entity';
import { TransaccionService } from './service/transaccion.service';
import { TransaccionController } from './controller/transaccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  providers: [TransaccionService],
  controllers: [TransaccionController],
})
export class TransaccionModule {}
