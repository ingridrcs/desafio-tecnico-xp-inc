const loginValidation = (req, res, next) => {
  const { password, email } = req.body;
  const dateRegex = /\S+@\S+\.\S+/;
  if (!dateRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
    if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};


module.exports = loginValidation; 