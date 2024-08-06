import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          type: 'mssql',
          host: config.getOrThrow('DB_HOST'),
          port: Number(config.get('DB_PORT') || 1433),
          database: config.get('DB_NAME'),
          logging: config.get('DB_LOGGING') === 'true',
          options: {
            encrypt: config.get('DB_ENCRYPT') === 'true',
            trustServerCertificate: true,
          },
          authentication: {
            type: config.get('DB_AUTHENTICATION_TYPE') as any,
            options: {
              domain: config.getOrThrow('DB_DOMAIN'),
              userName: config.getOrThrow('DB_USERNAME'),
              password: config.getOrThrow('DB_PASSWORD'),
            },
          },
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class CommonModule {}
