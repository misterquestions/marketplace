import { IProduct } from "./product.model";

export interface IProductRepository {
  insert(product: IProduct): Promise<IProduct>;
  findAll(): Promise<Array<IProduct>>;
  findById(id: number): Promise<IProduct>;
  updateById(id: number, product: IProduct): Promise<IProduct>;
  deleteById(id: number): Promise<boolean>;
}