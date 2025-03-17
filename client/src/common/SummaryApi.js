export const baseURl = import.meta.env.VITE_BASE_URL;

const SummaryApi = {
  // Customer
  register: {
    url: "/api/user/register",
    method: "post",
  },
  login: {
    url: "/api/user/login",
    method: "post",
  },
  getDetailUser: {
    url: "/api/user/details",
    method: "get",
  },
  logout: {
    url: "/api/user/logout",
    method: "post",
  },
  verifyEmail: {
    url: "/api/user/verify-email",
    method: "post",
  },
  forgot_password: {
    url: "/api/user/forgot-password",
    method: "put",
  },
  forgot_password_otp_verification: {
    url: "/api/user/verify-forgot-password-otp",
    method: "put",
  },
  reset_password: {
    url: "/api/user/reset-password",
    method: "put",
  },
  update_password: {
    url: "/api/user/update/update-password",
    method: "put",
  },
  update_detail: {
    url: "/api/user/update/update-detail-user",
    method: "put",
  },
  refresh_token: {
    url: "/api/user/refresh-token",
    method: "post",
  },
};

export default SummaryApi;
