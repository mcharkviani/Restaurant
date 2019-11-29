import {Router} from "express";
import {TransactionController} from "../../controllers/transaction.controller";

const router: Router = Router();
const controllers = {
    transaction: new TransactionController()
};

const transactionController: TransactionController = controllers.transaction;

// Product Routes
router.route("/")
    .get(transactionController.getAllTransactions)
    .post(transactionController.createTransaction);

router.route('/:id')
    .get(transactionController.getTransaction)
    .put(transactionController.updateTransaction)
    .delete(transactionController.deleteTransaction);


export const transactionRoutes: Router = router;


