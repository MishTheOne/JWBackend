const crypto = require('crypto');

function generateHash(key) {
  const hash = crypto.createHash('sha256'); 
  hash.update(key);

  const hashValue = parseInt(hash.digest('hex').slice(0, 7), 16);
  console.log("hash",hashValue);
  return hashValue;
}

module.exports = {generateHash};