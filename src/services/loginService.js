const getEmail = require('../models/loginModel');
const { generateJWTToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = { status: 400, message: 'Some required fields are missing' };
    throw error;
  }

  const [userLogin] = await getEmail(email);
  const { senha } = userLogin;

  if (Number(senha) !== password) {
    const error = { status: 400, message: 'Some required fields are missing' };
    throw error;
  }

  const tokenUser = generateJWTToken(email);
  return tokenUser;
};

module.exports = authenticate;