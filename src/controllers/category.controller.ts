import { Request, Response } from "express";
import {Category} from "../models/category.model";
import {CategoryService} from "../services/category.service";

const categoryService = new CategoryService();


export class CategoryController {
    // public categoryService: CategoryService;

    constructor() {
        // this.categoryService = new CategoryService();
    }

    public async getAllCategories(req: Request, res: Response) {
        await categoryService.getAllCategories()
            .then((categories: Array<Category>) => res.json(categories))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createCategory(req: Request, res: Response) {
        await categoryService.createCategory(req.body)
            .then((category: Category | null) => {
                res.status(200).json({ message: 'success', data: { category } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateCategory(req: Request, res: Response) {
        const id = +req.params.id;
        await categoryService.updateCategory(req.body, id)
            .then((category: Category | null) => {
                res.status(200).json({ message: 'success', data: { category } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteCategory(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await categoryService.deleteCategory(id)
            .then(() => {
                res.status(200).json({ message: 'success', data: {} })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }


    public async getCategory(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await categoryService.getCategory(id)
            .then((category: Category | null) => {
                console.log(category);
                res.status(200).json(category)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async orderCategory(req: Request, res: Response) {
        await categoryService.orderCategory()
            .then((category: Category[] | null) => {
                // console.log(category);
                res.status(200).json(category)
            })
            .catch((err: Error) => {
                // console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
