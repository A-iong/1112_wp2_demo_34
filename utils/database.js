const { Pool } = require("pg");
require("dotenv").config();

let pool
if (process.env.DATABASE === "SUPABASE") {
  pool = new Pool({
    user: "postgres",
    host: process.env.SUPABASE_HOST,
    port: "6543",
    database: "postgres",
    password: process.env.SUPABASE_PASSWORD,
  });
  console.log(
    `Connect SUPABASE PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
} else {
  pool = new Pool({
    user: "postgres",
    host: 'localhost',
    database: "wp2_demo_34",
    user: "postgres",
    password: "0000",
    port: 5432,
  });

  console.log(
    `Connect localhost PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
}

module.exports = pool; 
