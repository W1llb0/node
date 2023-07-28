import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Подключение успешно установлено');
  })
  .catch((error) => {
    console.error('Ошибка подключения:', error);
  });

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
