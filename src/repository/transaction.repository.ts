import {Transaction} from "../models/transaction.model";

export class TransactionRepository {

    public getAllTransactions(): Promise<Transaction[]> {
        return Transaction.findAll();
    }

    public async createTransaction(transaction: Transaction): Promise<Transaction | null> {
        await Transaction.create(transaction);
        return transaction ? transaction : null;
    }

    public async getTransaction(id: number): Promise<Transaction | null> {
        const transaction = await Transaction.findByPk(id);
        return transaction ? transaction : null;
    }

    public async updateTransaction(transaction: Transaction, id: number): Promise<any> {
        await transaction.update(transaction, {where: {id}});
    }

    public async deleteTransaction(id: number): Promise<boolean> {
        const result = await Transaction.destroy({
            where: { id }
        });
        return result === 1;
    }
}
