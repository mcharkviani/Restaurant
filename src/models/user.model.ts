import { Sequelize, Model, DataTypes } from 'sequelize';
import {db} from "../config/database";

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please add a valid email']
        },
        role: {
            type:   DataTypes.ENUM,
            values: ['ADMIN', 'CUSTOMER'],
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "users",
        sequelize: db
    }
);

User.sync({ force: false }).then(() => console.log('Users table created'));

export { User }

