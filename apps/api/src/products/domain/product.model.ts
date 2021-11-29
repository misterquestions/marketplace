export interface IProduct {
  id: number;
  name: string;
  description: string;
  sku: string;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}