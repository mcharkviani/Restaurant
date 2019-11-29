import {Router} from "express";
import {ProductController} from "../../controllers/product.controller";

const router: Router = Router();
const controllers = {
    product: new ProductController()
};

const productController: ProductController = controllers.product;

// Product Routes
router.route("/")
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router.route('/:id')
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);


export const productRoutes: Router = router;


