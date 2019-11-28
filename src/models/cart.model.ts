import { Sequelize, Model, DataTypes } from 'sequelize';
import {db} from "../config/database";

class Cart extends Model { }

Cart.init(
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
    },
    {
        tableName: "carts",
        sequelize: db
    }
);

Cart.sync({ force: false }).then(() => console.log('Carts table created'));

export { Cart }

