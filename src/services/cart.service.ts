import {Transaction} from "../models/transaction.model";
import {CartRepository} from "../repository/cart.repository";

const cartRepository = new CartRepository();

export class CartService {

    constructor() {}

    public async getAllCarts(): Promise<Transaction[]> {
        return cartRepository.getAllCarts();
    }

    public async getCart(id:number): Promise<Transaction | null> {
        return await cartRepository.getCart(id);
    }

    public async createCart(transaction: Transaction): Promise<Transaction | null> {
        return await cartRepository.createCart(transaction);
    }

    public async updateCart(transaction: Transaction, id: number): Promise<Transaction | null> {
        return await cartRepository.updateCart(transaction, id);
    }

    public async deleteCart(id: number): Promise<boolean> {
        return await cartRepository.deleteCart(id);
    }
}
