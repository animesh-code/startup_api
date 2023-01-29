import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Startup Api')
  .setDescription('Descriptive information of the startup api')
  .setVersion('1.0')
  //   .addTag('startup')
  .build();
