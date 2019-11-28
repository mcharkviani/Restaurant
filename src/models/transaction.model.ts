import { Sequelize, Model, DataTypes } from 'sequelize';
import {db} from "../config/database";

class Transaction extends Model { }

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: "products",
                key: "id"
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    },
    {
        tableName: "transactions",
        sequelize: db
    }
);

Transaction.sync({ force: false }).then(() => console.log('Transactions table created'));

export { Transaction }

