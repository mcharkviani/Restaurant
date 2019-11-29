import { Request, Response } from "express";
import {TransactionService} from "../services/transaction.service";
import {Transaction} from "../models/transaction.model";

const transactionsService = new TransactionService();

export class TransactionController {

    constructor() {}

    public async getAllTransactions(req: Request, res: Response) {
        await transactionsService.getAllTransactions()
            .then((transactions: Array<Transaction>) => res.json(transactions))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createTransaction(req: Request, res: Response) {
        await transactionsService.createTransaction(req.body)
            .then((transaction: Transaction | null) => {
                res.status(200).json({ message: 'success', data: { transaction } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateTransaction(req: Request, res: Response) {
        const id = +req.params.id;
        await transactionsService.updateTransaction(req.body, id)
            .then((transaction: Transaction | null) => {
                res.status(200).json({ message: 'success', data: { transaction } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteTransaction(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await transactionsService.deleteTransaction(id)
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
        await transactionsService.getTransaction(id)
            .then((transaction: Transaction | null) => {
                console.log(transaction);
                res.status(200).json(transaction)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
