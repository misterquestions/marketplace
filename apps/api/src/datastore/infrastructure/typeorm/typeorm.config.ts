import { ProductEntity } from 'apps/api/src/products/infrastructure/product.entity';
import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [ProductEntity],
  
};

export default config;
