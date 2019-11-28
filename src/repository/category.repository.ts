import {Category} from "../models/category.model";
import {where} from "sequelize";

export class CategoryRepository {

    public getAllCategories(): Promise<Category[]> {
        return Category.findAll();
    }

    public async createCategory(category: Category): Promise<Category | null> {
        await Category.create(category);
        return category ? category : null;
    }

    public async getCategory(id: number): Promise<Category | null> {
        const category = await Category.findByPk(id);
        return category ? category : null;
    }

    public async updateCategory(category: Category, id: number): Promise<any> {
        await Category.update(category, {where: {id}});
    }

    public async deleteCategory(id: number): Promise<boolean> {
        const result = await Category.destroy({
            where: { id }
        });
        return result === 1;
    }
}
