const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: 'localhost',
  database: "wp2_demo_34",
  user: "postgres",
  password: "0000",
  port: 5432,
});

console.log('connect database'. pool.options.database)

module.exports = pool; 
