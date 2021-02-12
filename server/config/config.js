require('dotenv').config();

// console.log(process.env.MYSQL_PW)
// console.log('+++++++++++++++++++++++++');
// console.log(' === this is the config.js file');
// console.log('+++++++++++++++++++++++++');

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "logging": true
    },
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "db_test",
        "host": "127.0.0.1",
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        // "use_env_variable": "JAWSDB_URL",
        "dialect": process.env.DB_DIALECT
    }
  };