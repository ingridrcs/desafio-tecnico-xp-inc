const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const generateJWTToken = (email) => {
  const token = jwt.sign({ email }, TOKEN_SECRET, jwtConfig);
  return token;
};

const authenticateToken = async (token) => {
  if (!token) {
    const error = { status: 401, message: 'Token not found' };
    throw error;
  }

  try {
    const validate = jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    const error2 = { status: 401, message: 'Expired or invalid token' };
    throw error2;
  }
};

module.exports = { generateJWTToken, authenticateToken };