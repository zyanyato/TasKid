import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL ? new Sequelize(process.env.DB_URL) : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
        decimalNumbers: true
    }
})

export default sequelize;