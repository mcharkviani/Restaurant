import {UserRepository} from "../repository/user.repository";
import {User} from "../models/user.model";

const userRepository = new UserRepository()

export class UserService {
    // public userRepository: UserRepository;

    constructor() {
        // this.userRepository = new UserRepository();
    }

    public async getAllUsers(): Promise<User[]> {
        return userRepository.getAllUsers();
    }

    public async getUser(id:number): Promise<User | null> {
        return await userRepository.getUser(id);
    }

    public async createUser(user: User): Promise<User | null> {
        return await userRepository.createUser(user);
    }

    public async updateUser(user: User, id: number): Promise<User | null> {
        return await userRepository.updateUser(user, id);
    }

    public async deleteUser(id: number): Promise<boolean> {
        return await userRepository.deleteUser(id);
    }
}
