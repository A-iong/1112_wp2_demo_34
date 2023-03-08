const { Pool } = require("pg");

let pool

if(process.env.NODE_ENV ==== 'SUPABASE'){
  pool = new Pool({
    user: "postgres",
    host: 'localhost',
    database: "wp2_demo_34",
    user: "postgres",
    password: "0000",
    port: 5432,
  });
}else{
  pool = new Pool({
    user: "postgres",
    host: 'localhost',
    database: "wp2_demo_34",
    user: "postgres",
    password: "0000",
    port: 5432,
  });
}



console.log(`Connect localhost PostgreSQL database. ${pool.options.database}`)

module.exports = pool; 
