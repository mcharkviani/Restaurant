import {Product} from "../models/product.model";
import {Category} from "../models/category.model";

export class ProductRepository {

    public getAllProducts(): Promise<Product[]> {
        return Product.findAll();
    }

    public async createProduct(product: Product): Promise<Product | null> {
        await Product.create(product);
        return product ? product : null;
    }

    public async getProduct(id: number): Promise<Product | null> {
        const product = await Product.findByPk(id);
        return product ? product : null;
    }

    public async updateProduct(product: Product, id: number): Promise<any> {
        await Product.update(product, {where: {id}});
    }

    public async deleteProduct(id: number): Promise<boolean> {
        const result = await Product.destroy({
            where: { id }
        });
        return result === 1;
    }
}
