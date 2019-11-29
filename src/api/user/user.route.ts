import {Router} from "express";
import {UserController} from "../../controllers/user.controller";

const router: Router = Router();
const controllers = {
    user: new UserController()
};

const userController: UserController = controllers.user;

// User Routes
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);


export const userRoutes: Router = router;


