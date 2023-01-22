import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from './config/database/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(DATABASE_CONFIG),
  ],
})
export class AppModule {
  constructor() {}
}
