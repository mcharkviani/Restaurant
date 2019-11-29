import { Request, Response } from "express";
import {TransactionService} from "../services/Transaction.service";
import {Transaction} from "../models/transaction.model";

const TransactionsService = new TransactionService();

export class TransactionController {
    // public TransactionsService: TransactionsService;

    constructor() {
        // this.TransactionsService = new TransactionsService();
    }

    public async getAllTransactions(req: Request, res: Response) {
        await TransactionsService.getAllTransactions()
            .then((Transactions: Array<Transaction>) => res.json(Transactions))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createTransaction(req: Request, res: Response) {
        await TransactionsService.createTransaction(req.body)
            .then((Transaction: Transaction | null) => {
                res.status(200).json({ message: 'success', data: { Transaction } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateTransaction(req: Request, res: Response) {
        const id = +req.params.id;
        await TransactionsService.updateTransaction(req.body, id)
            .then((Transaction: Transaction | null) => {
                res.status(200).json({ message: 'success', data: { Transaction } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteTransaction(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await TransactionsService.deleteTransaction(id)
            .then(() => {
                res.status(200).json({ message: 'success', data: {} })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }


    public async getTransaction(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await TransactionsService.getTransaction(id)
            .then((Transaction: Transaction | null) => {
                console.log(Transaction);
                res.status(200).json(Transaction)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
