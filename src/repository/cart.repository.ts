import {Cart} from "../models/cart.model";

export class CartRepository {

    public getAllCarts(): Promise<Cart[]> {
        return Cart.findAll();
    }

    public async createCart(cart: Cart): Promise<Cart | null> {
        await Cart.create(cart);
        return cart ? cart : null;
    }

    public async getCart(id: number): Promise<Cart | null> {
        const cart = await Cart.findByPk(id);
        return cart ? cart : null;
    }

    public async updateCart(cart: Cart, id: number): Promise<any> {
        await cart.update(cart, {where: {id}});
    }

    public async deleteCart(id: number): Promise<boolean> {
        const result = await Cart.destroy({
            where: { id }
        });
        return result === 1;
    }
}
