import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import CheckOrder from "../pages/CheckOrder";
import CheckWarranty from "../pages/CheckWarranty";
import ContactPage from "../pages/ContactPage";
import ForgotPassword from "../pages/ForgotPassword";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import OtpVerification from "../pages/OtpVerification";
import ProductPage from "../pages/ProductPage";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import SaleOff from "../pages/SaleOff";
import UpdateAccount from "../pages/UpdateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/thanh-vien/dang-ky",
        element: <Register />,
      },
      {
        path: "/thanh-vien/dang-nhap",
        element: <Login />,
      },

      {
        path: "/lien-he",
        element: <ContactPage />,
      },
      {
        path: "/kiem-tra-don-hang",
        element: <CheckOrder />,
      },
      {
        path: "/kiem-tra-bao-hanh",
        element: <CheckWarranty />,
      },
      {
        path: "/san-pham",
        element: <ProductPage />,
      },
      {
        path: "/gio-hang",
        element: <Cart />,
      },
      {
        path: "/thanh-ly",
        element: <SaleOff />,
      },
      {
        path: "/thanh-vien",
        element: <Account />,
      },
      {
        path: "/thanh-vien/thong-tin",
        element: <UpdateAccount />,
      },
      {
        path: "/thanh-vien/quen-mat-khau",
        element: <ForgotPassword />,
      },
      {
        path: "/thanh-vien/xac-minh-otp",
        element: <OtpVerification />,
      },
      {
        path: "/thanh-vien/doi-mat-khau",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
