import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProductRepository } from '../domain/product-repository.interface';
import { IProduct } from '../domain/product.model';
import { ProductEntity } from './product.entity';

@Injectable()
export class DatabaseProductRepository implements IProductRepository {
  private readonly logger = new Logger(DatabaseProductRepository.name);

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productEntityRepository: Repository<ProductEntity>
  ) {}

  async insert(product: IProduct): Promise<IProduct> {
    try {
      const insertedProduct = await this.productEntityRepository.insert(
        product
      );
      return insertedProduct.generatedMaps[0] as IProduct;
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }

  async findAll(): Promise<Array<IProduct>> {
    try {
      const foundProducts = await this.productEntityRepository.find();
      return foundProducts;
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }

  async findById(id: number): Promise<IProduct> {
    try {
      const foundProduct = await this.productEntityRepository.findOneOrFail(id);
      return foundProduct;
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }

  async updateById(id: number, product: IProduct): Promise<IProduct> {
    try {
      const updatedProduct = await this.productEntityRepository.update(
        id,
        product
      );
      return updatedProduct.generatedMaps[0] as IProduct;
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }

  async deleteById(id: number): Promise<boolean> {
    try {
      const result = await this.productEntityRepository.delete(id);

      if (result.affected === 1) {
        return true;
      }
    } catch (error) {
      this.logger.error(error);
    }

    return false;
  }
}
