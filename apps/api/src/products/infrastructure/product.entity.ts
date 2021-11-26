import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 32 })
  sku: string;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
