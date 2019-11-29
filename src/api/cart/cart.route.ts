import {Router} from "express";
import {CartController} from "../../controllers/cart.controller";

const router: Router = Router();
const controllers = {
    cart: new CartController()
};

const cartController: CartController = controllers.cart;

// Cart Routes
router.route("/")
    .get(cartController.getAllCarts)
    .post(cartController.createCart);

router.route('/:id')
    .get(cartController.getCart)
    .put(cartController.updateCart)
    .delete(cartController.deleteCart);

export const cartRoutes: Router = router;


