const connection = require('../db/connection');

const getEmail = async (email) => {
 const [getEmail] = await connection.execute('SELECT * FROM TechBank.User WHERE email = ?;', [email]);
  return getEmail;
}

module.exports = getEmail;