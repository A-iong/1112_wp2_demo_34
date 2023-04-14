const db = require('./database');

const testDB = async () => {
  try {
    const results1 = await db.query(`select * from middle_product_34 where cat_id='5'`);
    console.log('results1 json data', JSON.stringify(results1.rows));
    const results2 = await db.query(`select * from middle_product_34 where cat_id='1'`);
    console.log('results2 json data', JSON.stringify(results2.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
