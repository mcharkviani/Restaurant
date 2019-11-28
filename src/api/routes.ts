import {Application, Request, Response, Router} from "express";
import {ProductController} from "../controllers/product.controller";
import {CategoryController} from "../controllers/category.controller";
import {UserController} from "../controllers/user.controller";

export class Routes {
    public productController: ProductController = new ProductController();
    public categoryController: CategoryController = new CategoryController();
    public userController: UserController = new UserController();

    constructor() {}

    public routes(app: Application): void {

        // Category Routes
        app.get('/category/orderCategory', this.categoryController.orderCategory);

        app.route("/category")
            .get(this.categoryController.getAllCategories)
            .post(this.categoryController.createCategory);

        app.route('/category/:id')
            .get(this.categoryController.getCategory)
            .put(this.categoryController.updateCategory)
            .delete(this.categoryController.deleteCategory);


        // Product Routes
        app.route("/products")
            .get(this.productController.getAllProducts)
            .post(this.productController.createProduct);

        app.route('/products/:id')
            .get(this.productController.getProduct)
            .put(this.productController.updateProduct)
            .delete(this.productController.deleteProduct);


        // User Routes
        app.route("/users")
            .get(this.userController.getAllUsers)
            .post(this.userController.createUser);

        app.route('/users/:id')
            .get(this.userController.getUser)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}


