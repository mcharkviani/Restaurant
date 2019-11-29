import {Transaction} from "../models/transaction.model";
import {TransactionRepository} from "../repository/transaction.repository";

const TransactionsRepository = new TransactionRepository();

export class TransactionService {
    // public TransactionsRepository: TransactionsRepository;

    constructor() {
        // this.TransactionsRepository = new TransactionsRepository();
    }

    public async getAllTransactions(): Promise<Transaction[]> {
        return TransactionsRepository.getAllTransactions();
    }

    public async getTransaction(id:number): Promise<Transaction | null> {
        return await TransactionsRepository.getTransaction(id);
    }

    public async createTransaction(Transaction: Transaction): Promise<Transaction | null> {
        return await TransactionsRepository.createTransaction(Transaction);
    }

    public async updateTransaction(Transaction: Transaction, id: number): Promise<Transaction | null> {
        return await TransactionsRepository.updateTransaction(Transaction, id);
    }

    public async deleteTransaction(id: number): Promise<boolean> {
        return await TransactionsRepository.deleteTransaction(id);
    }
}
