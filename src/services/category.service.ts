import {CategoryRepository} from "../repository/category.repository";
import {Category} from "../models/category.model";
import _ from "lodash";

const categoryRepository = new CategoryRepository();

export class CategoryService {
    // public categoryRepository: CategoryRepository;

    constructor() {
        // this.categoryRepository = new CategoryRepository();
    }

    public async getAllCategories(): Promise<Category[]> {
        return categoryRepository.getAllCategories();
    }

    public async getCategory(id:number): Promise<Category | null> {
        return await categoryRepository.getCategory(id);
    }

    public async createCategory(category: Category): Promise<Category | null> {
        return await categoryRepository.createCategory(category);
    }

    public async updateCategory(category: Category, id: number): Promise<Category | null> {
        return await categoryRepository.updateCategory(category, id);
    }

    public async deleteCategory(id: number): Promise<boolean> {
        return await categoryRepository.deleteCategory(id);
    }

    public async orderCategory(): Promise<Category[]> {
        const categories = await categoryRepository.getAllCategories();
        const orderedCategory = _.orderBy(categories, ["name"], ['asc', 'desc']);
        return orderedCategory;
        // It's Case-Sensitive
    }
}
