import { Request, Response } from "express";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

const productsService = new ProductService();

export class ProductController {
    // public productsService: ProductsService;

    constructor() {
        // this.productsService = new ProductsService();
    }

    public async getAllProducts(req: Request, res: Response) {
        await productsService.getAllProducts()
            .then((products: Array<Product>) => res.json(products))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createProduct(req: Request, res: Response) {
        await productsService.createProduct(req.body)
            .then((product: Product | null) => {
                res.status(200).json({ message: 'success', data: { product } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateProduct(req: Request, res: Response) {
        const id = +req.params.id;
        await productsService.updateProduct(req.body, id)
            .then((product: Product | null) => {
                res.status(200).json({ message: 'success', data: { product } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteProduct(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await productsService.deleteProduct(id)
            .then(() => {
                res.status(200).json({ message: 'success', data: {} })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }


    public async getProduct(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await productsService.getProduct(id)
            .then((product: Product | null) => {
                console.log(product);
                res.status(200).json(product)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
