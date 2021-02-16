require('dotenv').config();

// console.log(process.env.MYSQL_PW)
console.log('+++++++++++++++++++++++++');
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
console.log('+++++++++++++++++++++++++');

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": 'postgres',
        "logging": false
    },
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "db_test",
        "host": "127.0.0.1",
        "dialect": 'postgres'
    },
    "production": {
        // "use_env_variable": "JAWSDB_URL",
        "dialect": 'postgres'
    }
  };