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
};

export default SummaryApi;
