import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// import pg from 'pg';
// const { Pool } = pg;

// const pool = new Pool({
//     user: 'postgres',
//     password: 'root',
//     host: 'localhost',
//     port: 5432,
//     database: 'node_postgres',
// });

// export default pool;
export default sequelize;
