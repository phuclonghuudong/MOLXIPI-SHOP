import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import Loading from "../components/Loading";
import { setUserDetails } from "../store/userSlice";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToast";
import fetchUserDetails from "../utils/fetchUserDetails";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const validateValue = Object.values(data).every((el) => el);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.login,
        data: data,
      });

      const { data: responseData } = response;

      if (responseData?.success) {
        localStorage.setItem("accessToken", responseData?.data?.accessToken);
        localStorage.setItem("refreshToken", responseData?.data?.refreshToken);

        const userDetails = await fetchUserDetails();
        dispatch(setUserDetails(userDetails?.data));

        toast.success(responseData?.message);
        setData({
          email: "",
          password: "",
        });
        navigate("/thanh-vien");
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="  w-full lg:w-96 rounded lg:mx-auto lg:pt-4 text-sm">
      <div className="bg-white ">
        <FormTitle title="Đăng Nhập" />

        <form className="grid gap-3 p-2" onSubmit={handleSubmit}>
          <FormInput
            placeholder="Email"
            type="email"
            autoFocus
            id={"email"}
            name={"email"}
            value={data.email}
            onChange={handleOnchange}
          />
          <FormInput
            placeholder="Mật khẩu"
            type="password"
            id={"password"}
            name={"password"}
            value={data.password}
            onChange={handleOnchange}
          />
          <FormButton disabled={loading || !validateValue} title="Đăng nhập" />
        </form>
        {loading && <Loading />}

        <div className="text-right items-end justify-end">
          <Link
            to={"/thanh-vien/quen-mat-khau"}
            className="font-semibold hover:text-orange-500"
          >
            Quên mật khẩu.{" "}
          </Link>
          <Link to={"/thanh-vien/dang-ky"}>
            Đăng ký <span className="text-orange-500"> tại đây</span>
          </Link>{" "}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Login;
