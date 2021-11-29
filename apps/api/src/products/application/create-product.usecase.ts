import { IProductRepository } from '../domain/product-repository.interface';
import { IProduct } from '../domain/product.model';

export class CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(
    name: string,
    description: string,
    sku: string,
    stock: number,
    price: number
  ): Promise<IProduct> {
    return await this.productRepository.insert({
      id: null,
      name,
      description,
      sku,
      stock,
      price,
      createdAt: null,
      updatedAt: null,
    });
  }
}
