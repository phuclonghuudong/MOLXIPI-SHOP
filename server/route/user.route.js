const { Router } = require("express");
const {
  registerUserController,
  loginUserController,
  getDetailUser,
  logoutController,
  verifyEmailController,
  forgotPasswordController,
  verifyForgotPasswordOtp,
  resetPasswordController,
  updateResetPasswordController,
  updateUserDetails,
} = require("../controller/UserController");
const auth = require("../middleware/auth");
const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/details", auth, getDetailUser);
userRouter.post("/logout", auth, logoutController);
userRouter.post("/verify-email", verifyEmailController);
userRouter.put("/forgot-password", forgotPasswordController);
userRouter.put("/verify-forgot-password-otp", verifyForgotPasswordOtp);
userRouter.put("/reset-password", resetPasswordController);
userRouter.put("/update/update-password", auth, updateResetPasswordController);
userRouter.put("/update/update-detail-user", auth, updateUserDetails);

module.exports = userRouter;
