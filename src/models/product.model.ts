import { Sequelize, Model, DataTypes } from 'sequelize';
import {db} from "../config/database";

class Product extends Model { }

Product.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: "categories",
                key: "id"
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        isVegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isFavorite: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: "products",
        sequelize: db
    }
);

Product.sync({ force: false }).then(() => console.log('Products table created'));

export { Product }

