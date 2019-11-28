import { Request, Response } from "express";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

const userService = new UserService();

export class UserController {
    // public userService: UserService;

    constructor() {
        // this.userService = new UserService();
    }

    public async getAllUsers(req: Request, res: Response) {
        await userService.getAllUsers()
            .then((categories: Array<User>) => res.json(categories))
            .catch((err: Error) => res.status(500).json({message: 'error occurred', error: err}))
    }

    public async createUser(req: Request, res: Response) {
        await userService.createUser(req.body)
            .then((user: User | null) => {
                res.status(200).json({ message: 'success', data: { user } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async updateUser(req: Request, res: Response) {
        const id = +req.params.id;
        await userService.updateUser(req.body, id)
            .then((user: User | null) => {
                res.status(200).json({ message: 'success', data: { user } })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

    public async deleteUser(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await userService.deleteUser(id)
            .then(() => {
                res.status(200).json({ message: 'success', data: {} })
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }


    public async getUser(req: Request, res: Response) {
        const id = +req.params.id;
        console.log(id);
        await userService.getUser(id)
            .then((user: User | null) => {
                console.log(user);
                res.status(200).json(user)
            })
            .catch((err: Error) => {
                console.log('error is here');
                res.status(500).json({message: 'error occurred', error: err})
            });
    }

}
