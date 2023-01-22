if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_CONFIG } from './config/app/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_CONFIG().port);
}
bootstrap();
