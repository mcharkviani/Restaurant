import { Sequelize } from 'sequelize';

export const db = new Sequelize('shopping', 'postgres', 'postgre123', {
    host: 'localhost',
    dialect: 'postgres'
});
