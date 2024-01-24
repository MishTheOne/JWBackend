const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);
const sql = require('../../../sql');


const insertQuery = async (userDetails)=>{
  try{

    const {fname, lname, email, password} = {...userDetails};
    const encryptedPass = await encryptor.encrypt(password, 10);

    const insert = "INSERT INTO tb_user (first_name, last_name, email, pass, login_status) VALUES ?";

    const values = [
        [fname,lname,email,encryptedPass,false]
    ];

    sql.makeQuery(insert,[values]);
  }catch(err){
    throw(err);
  }
}

async function findQuery(userDetails) {
    try {
        console.log(userDetails);
        const email = userDetails.email;
        const find = "select * from tb_user where email = ?"
      const result = await sql.makeQuery(find,[email]);
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error in main:', error);
      throw(error);
    }
  }

  async function updateQuery(id) {
    try {
        const update = "update tb_user set login_status = 1 where user_id = ?"
      const result = await sql.makeQuery(update,[id]);
      // Use the result here
      console.log(result);
    } catch (error) {
      // Handle errors
      console.error('Error in main:', error);
      throw(error);
    }
}


module.exports = {insertQuery,findQuery,updateQuery};