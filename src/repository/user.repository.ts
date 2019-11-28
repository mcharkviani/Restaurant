import {User} from "../models/user.model";
import {where} from "sequelize";

export class UserRepository {

    public getAllUsers(): Promise<User[]> {
        return User.findAll();
    }

    public async createUser(user: User): Promise<User | null> {
        await User.create(user);
        return user ? user : null;
    }

    public async getUser(id: number): Promise<User | null> {
        const user = await User.findByPk(id);
        return user ? user : null;
    }

    public async updateUser(user: User, id: number): Promise<any> {
        await User.update(user, {where: {id}});
    }

    public async deleteUser(id: number): Promise<boolean> {
        const result = await User.destroy({
            where: { id }
        });
        return result === 1;
    }
}
