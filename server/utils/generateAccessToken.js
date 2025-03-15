const jwt = require("jsonwebtoken");

const generateAccessToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: "1h" }
  );

  return token;
};

module.exports = generateAccessToken;
