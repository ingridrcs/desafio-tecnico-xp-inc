const authenticate = require('../services/loginService');

const loginUser = async (req, res) => {
    try {
   const token = await authenticate(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
module.exports = loginUser;