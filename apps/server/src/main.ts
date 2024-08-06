import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(express.static('public/web/browser'));
  app.setGlobalPrefix('/api');
  app.use((req: express.Request, res: express.Response, next) => {
    if (req.url.startsWith('/api')) {
      return next();
    }
    res.sendFile('index.html', { root: 'public/web/browser' });
  });
  await app.listen(process.env.PORT || 3000);

  const logger = new Logger('NestApplication');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
