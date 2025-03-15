const { Router } = require("express");
const {
  registerUserController,
  loginUserController,
  getDetailUser,
  logoutController,
} = require("../controller/UserController");
const auth = require("../middleware/auth");
const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/details", auth, getDetailUser);
userRouter.post("/logout", auth, logoutController);

module.exports = userRouter;

// userRouter.get("/", (request, response) => {
//   response.json({
//     message: "Server is running ",
//   });
// });
