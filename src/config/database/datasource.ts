import { DataSource } from 'typeorm';

const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
} = process.env;

export default new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: +DATABASE_PORT,
  database: DATABASE_NAME,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
});
