const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host: "localhost",
    user: "Ayush",
    password: "Alm!g#ty3deV",
    database: "user"
});

const queryAsync = util.promisify(con.query).bind(con);

async function makeQuery(query,values) {
    try {
      const results = await queryAsync(query,values);
      // console.log('Query results:', results);
      return results;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    } 
}

module.exports = {con,makeQuery};