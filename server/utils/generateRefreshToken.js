const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const generateRefreshToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: "1h" }
  );

  const updateRefreshToken = await UserModel.updateOne(
    {
      _id: userId,
    },
    { refresh_token: token }
  );

  return token;
};

module.exports = generateRefreshToken;
