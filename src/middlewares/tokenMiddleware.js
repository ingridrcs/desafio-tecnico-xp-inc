const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = async (req, res, next) => {
  try {
const token = req.headers.authorization;
const user = await authenticateToken(token);
console.log('token', user);
if (!user) {
  return res.status(400).json({ message: 'Token not found' });
}
res.locals.user = user;
next();
} catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
};
module.exports = authenticateMiddleware;