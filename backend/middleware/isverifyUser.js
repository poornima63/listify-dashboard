const jwt = require('jsonwebtoken');
// const secretKey = process.env.SECRET_KEY;

const isVerifyUser = (req, res, next) => {
  let token = req.header('auth-token');
  // console.log(token)
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Please authenticate',
    });
  }

  try {
    const tokenUser = jwt.verify(token, process.env.SECRET_KEY);
    req.user = tokenUser.id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

module.exports = isVerifyUser;
