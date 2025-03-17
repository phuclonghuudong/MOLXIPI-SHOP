require("dotenv").config();
const sendEmail = require("../config/sendMail");
const UserModel = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");
const forgotPasswordTemplate = require("../utils/forgotPasswordTemplate");
const generateOtp = require("../utils/generateOtp");

const registerUserController = async (request, response) => {
  try {
    const { username, email, password, phone } = request.body;

    if (!username || !email || !password || !phone) {
      return response.status(400).json({
        message: "provide email, username, phone and password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    const checkPhone = await UserModel.findOne({ phone });

    if (user) {
      return response.json({
        message: "Already register email",
        error: true,
        success: false,
      });
    }
    if (checkPhone) {
      return response.json({
        message: "Already register phone",
        error: true,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const payload = {
      username,
      phone,
      email,
      password: hashPassword,
    };

    const newUser = new UserModel(payload);
    const save = await newUser.save();

    const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`;

    await sendEmail({
      sendTo: email,
      subject: "Verify email from PHPMol",
      html: verifyEmailTemplate({
        name: username,
        url: verifyEmailUrl,
        email: email,
      }),
    });

    return response.json({
      message: "User register successfully",
      error: false,
      success: true,
      data: "",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const loginUserController = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        message: "Provide email and password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response.status(400).json({
        message: "User not register",
        error: true,
        success: false,
      });
    }

    if (user?.status !== "Active") {
      return response.status(400).json({
        message: "Contact to Admin",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcrypt.compare(password, user?.password);

    if (!checkPassword) {
      return response.status(400).json({
        message: "Check your password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generateAccessToken(user?._id);
    const refreshToken = await generateRefreshToken(user?._id);

    await UserModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.cookie("accessToken", accessToken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    return response.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const getDetailUser = async (request, response) => {
  try {
    const userId = request.userId;

    const user = await UserModel.findById(userId).select(
      "-password -refresh_token"
    );

    return response.json({
      message: "User details.",
      error: false,
      success: true,
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const logoutController = async (request, response) => {
  try {
    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.findByIdAndUpdate(
      request?.userId,
      {
        refresh_token: "",
      }
    );

    return response.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const verifyEmailController = async (request, response) => {
  try {
    const { code } = request.body;

    const user = await UserModel.findOne({ _id: code });

    if (!user) {
      return response.status(400).json({
        message: "Invalid code",
        error: true,
        success: false,
      });
    }

    const updateUser = await UserModel.updateOne(
      { _id: code },
      {
        verify_email: true,
      }
    );

    return response.json({
      message: "Verify Email",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const forgotPasswordController = async (request, response) => {
  try {
    const { email } = request?.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response
        .status(400)
        .json({ message: "Email not available", error: true, success: false });
    }

    const otp = generateOtp(user);
    const expireTime = new Date() + 60 * 60 * 1000;

    const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
      forgot_password_otp: otp,
      forgot_password_expiry: new Date(expireTime).toISOString(),
    });

    await sendEmail({
      sendTo: email,
      subject: "Forgot password from PHPMol",
      html: forgotPasswordTemplate({
        name: user?.username,
        otp: otp,
      }),
    });

    return response.json({
      message: "Check your email",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const verifyForgotPasswordOtp = async (request, response) => {
  try {
    const { email, otp } = request?.body;

    if (!email || !otp) {
      return response.status(400).json({
        message: "Provide required field email or otp",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response
        .status(400)
        .json({ message: "Email not available", error: true, success: false });
    }

    const currentTime = new Date().toISOString();

    if (user?.forgot_password_expiry > currentTime) {
      return response
        .status(400)
        .json({ message: "OTP is expired", error: true, success: false });
    }

    if (otp !== user?.forgot_password_otp) {
      return response
        .status(400)
        .json({ message: "Invalid OTP", error: true, success: false });
    }
    //if otp == user?.forgot_password_otp

    await UserModel.findByIdAndUpdate(user?._id, {
      forgot_password_otp: "",
      forgot_password_expiry: "",
    });

    return response.json({
      message: "Verify OTP successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const resetPasswordController = async (request, response) => {
  try {
    const { email, newPassword, confirmNewPassword } = request?.body;

    if (!email || !newPassword || !confirmNewPassword) {
      return response.status(400).json({
        message: "Provide required field email, newPassword or confirmPassword",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmNewPassword) {
      return response.status(400).json({
        message: "newPassword and confirmPassword not same.",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response
        .status(400)
        .json({ message: "Email not available", error: true, success: false });
    }

    const salt = await bcrypt.genSalt(10);
    hashPassword = await bcrypt.hash(newPassword, salt);

    const updateUser = await UserModel.findOneAndUpdate(user._id, {
      password: hashPassword,
    });

    return response.json({
      message: "Password update successfully.",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const updateResetPasswordController = async (request, response) => {
  try {
    const userId = request?.userId;
    const { password, newPassword, confirmNewPassword } = request?.body;

    if (!password || !newPassword || !confirmNewPassword) {
      return response.status(400).json({
        message: "Vui lòng nhập đầy đủ mật khẩu!",
        error: true,
        success: false,
      });
    }

    if (newPassword === password) {
      return response.status(400).json({
        message: "Mật khẩu mới và mật khẩu cũ không được trùng nhau.",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmNewPassword) {
      return response.status(400).json({
        message: "Mật khẩu mới và nhập lại không trùng nhau!",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return response.status(400).json({
        message: "Người dùng không tồn tại!",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcrypt.compare(password, user?.password);
    if (!checkPassword) {
      return response.status(400).json({
        message: "Mật khẩu không đúng!",
        error: true,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    const updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        password: hashPassword,
      }
    );

    return response.json({
      message: "Cập nhật thành công.",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const updateUserDetails = async (request, response) => {
  try {
    const userId = request?.userId; //auth middlewareWrapper
    const { username, email, phone, gender, birthday } = request?.body;

    const updateUser = await UserModel.updateOne(
      { _id: userId },
      {
        ...(username && { username: username }),
        ...(email && { email: email }),
        ...(phone && { phone: phone }),
        ...(gender && { gender: gender }),
        ...(birthday && { birthday: birthday }),
      }
    );

    return response.json({
      message: "Cập nhật thành công!",
      error: false,
      success: true,
      data: updateUser,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
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
};
