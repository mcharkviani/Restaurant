import {Router} from "express";
import {CategoryController} from "../../controllers/category.controller";

const router: Router = Router();
const controllers = {
    category: new CategoryController()
};

const categoryController: CategoryController = controllers.category;

// Category Routes
router.get('/orderCategory', categoryController.orderCategory);

router.route("/")
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);

router.route('/:id')
    .get(categoryController.getCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);


export const categoryRoutes: Router = router;


