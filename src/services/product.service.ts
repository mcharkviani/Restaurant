import {Product} from "../models/product.model";
import {ProductRepository} from "../repository/product.repository";

const productsRepository = new ProductRepository();

export class ProductService {
    // public productsRepository: ProductsRepository;

    constructor() {
        // this.productsRepository = new ProductsRepository();
    }

    public async getAllProducts(): Promise<Product[]> {
        return productsRepository.getAllProducts();
    }

    public async getProduct(id:number): Promise<Product | null> {
        return await productsRepository.getProduct(id);
    }

    public async createProduct(product: Product): Promise<Product | null> {
        return await productsRepository.createProduct(product);
    }

    public async updateProduct(product: Product, id: number): Promise<Product | null> {
        return await productsRepository.updateProduct(product, id);
    }

    public async deleteProduct(id: number): Promise<boolean> {
        return await productsRepository.deleteProduct(id);
    }
}
