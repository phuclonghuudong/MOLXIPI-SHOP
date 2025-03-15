const jwt = require("jsonwebtoken");

const auth = async (request, response, next) => {
  try {
    const token =
      request?.cookies?.accessToken ||
      request?.headers?.authorization.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        message: "Provided token",
        error: true,
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    console.log("decode: ", decode);
    console.log("request.userId: ", request.userId);

    if (!decode) {
      return response.status(401).json({
        message: "Unauthorized access",
        error: true,
        success: false,
      });
    }

    request.userId = decode.id;

    next();
  } catch (error) {
    response.status(500).json({
      message: "You have not login",
      // message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = auth;
