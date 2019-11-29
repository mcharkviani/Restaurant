import { Request, Response } from "express";
import {CartService} from "../services/cart.service";
import {Cart} from "../models/cart.model";

const cartService = new CartService();

export class CartController {

    constructor() {}

    public async getAllCarts(req: Request, res: Response) {
        await cartService.getAllCarts()
            .then((cart: Array<Cart>) => res.json(cart))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createCart(req: Request, res: Response) {
        await cartService.createCart(req.body)
            .then((transaction: Cart | null) => {
                res.status(200).json({ message: 'success', data: { transaction } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateCart(req: Request, res: Response) {
        const id = +req.params.id;
        await cartService.updateCart(req.body, id)
            .then((cart: Cart | null) => {
                res.status(200).json({ message: 'success', data: { cart } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteCart(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await cartService.deleteCart(id)
            .then(() => {
                res.status(200).json({ message: 'success', data: {} })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }


    public async getCart(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await cartService.getCart(id)
            .then((cart: Cart | null) => {
                console.log(cart);
                res.status(200).json(cart)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
