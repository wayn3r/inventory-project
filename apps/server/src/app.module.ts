import { Module } from '@nestjs/common';
import { CommonModule } from './common';
import { ConfigModule } from '@nestjs/config';
import { TransaccionModule } from './transacciones/transaccion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CommonModule,
    TransaccionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
