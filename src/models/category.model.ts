import { Sequelize, Model, DataTypes } from 'sequelize';
import {db} from "../config/database";

class Category extends Model { }

Category.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "categories",
        sequelize: db
    }
);

Category.sync({ force: false }).then(() => console.log('Categories table created'));

export { Category }

