import {Transaction} from "../models/transaction.model";
import {TransactionRepository} from "../repository/transaction.repository";

const transactionsRepository = new TransactionRepository();

export class TransactionService {

    constructor() {}

    public async getAllTransactions(): Promise<Transaction[]> {
        return transactionsRepository.getAllTransactions();
    }

    public async getTransaction(id:number): Promise<Transaction | null> {
        return await transactionsRepository.getTransaction(id);
    }

    public async createTransaction(transaction: Transaction): Promise<Transaction | null> {
        return await transactionsRepository.createTransaction(transaction);
    }

    public async updateTransaction(transaction: Transaction, id: number): Promise<Transaction | null> {
        return await transactionsRepository.updateTransaction(transaction, id);
    }

    public async deleteTransaction(id: number): Promise<boolean> {
        return await transactionsRepository.deleteTransaction(id);
    }
}
