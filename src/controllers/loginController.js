const authenticate = require('../services/loginService');

const loginUser = async (req, res) => {
  try {
    const token = await authenticate(req.body);
    console.log('controller', token)
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
};
module.exports = loginUser;