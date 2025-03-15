import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import Loading from "../components/Loading";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToast";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const validateValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.confirmPassword !== data.password) {
      toast.error("password and confirm password must be same");
      return;
    }

    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });
      const { data: responseData } = response;

      if (responseData?.success) {
        toast.success(responseData?.message);
        navigate("/thanh-vien/dang-nhap");
      }
      if (responseData?.error) {
        toast.error(responseData?.message);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="  w-full lg:w-96 rounded lg:mx-auto lg:pt-4 text-sm">
      <div className="bg-white grid gap-3 p-2">
        <FormTitle title="Đăng ký" />

        <form className="grid gap-3 p-2" onSubmit={handleSubmit}>
          <FormInput
            id={"username"}
            name="username"
            value={data.username}
            onChange={handleOnchange}
            placeholder="Nhập tên của bạn (*)"
            type="text"
            autoFocus
          />
          <FormInput
            id={"email"}
            name={"email"}
            value={data.email}
            onChange={handleOnchange}
            placeholder="Nhập email của bạn (*)"
            type="email"
          />
          <FormInput
            id={"phone"}
            name={"phone"}
            value={data.phone}
            onChange={handleOnchange}
            placeholder="Số điện thoại"
            type="text"
          />
          <FormInput
            id={"password"}
            name={"password"}
            value={data.password}
            onChange={handleOnchange}
            placeholder="Mật khẩu"
            type="password"
          />
          <FormInput
            id={"confirmPassword"}
            name={"confirmPassword"}
            value={data.confirmPassword}
            onChange={handleOnchange}
            placeholder="Nhập lại mật khẩu"
            type="password"
          />
          <FormButton disabled={loading || !validateValue} title="Đăng ký" />
          {loading && <Loading />}
        </form>

        <div className="text-center">
          Đã có tài khoản, đăng nhập{" "}
          <Link to={"/thanh-vien/dang-nhap"}>
            <span className="text-orange-500 hover:text-black">tại đây</span>
          </Link>{" "}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Register;
