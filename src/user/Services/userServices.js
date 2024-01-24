var userModel = require('../Models/userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);
// const create = require('../Models/sql');
const userSql = require('../Models/userSql');

module.exports.registerUserDBService = async (userDetails, res) => {
  try {
    await userSql.insertQuery(userDetails);
    return userDetails; // Return the created user
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    throw error; 
  }
};
module.exports.loginuserDBService = async (userDetails) => {
  const password = userDetails.password;
  const data = await userSql.findQuery(userDetails);
  console.log('data = ',data);
  if(!data){
    throw new Error("Invalid Credentials");
  }
  else{
    console.log(data[0].pass);
    const decryptedPass = await encryptor.decrypt(data[0].pass);
    if(decryptedPass !== password){
      console.log(decryptedPass,password);
      throw new Error("Wrong Pass");
    }
    else{
      await userSql.updateQuery(data[0].user_id);
      return data;
    }       
  }
};

 