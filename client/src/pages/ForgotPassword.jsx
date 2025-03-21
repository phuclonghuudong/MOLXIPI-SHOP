import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import Loading from "../components/Loading";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });

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
        ...SummaryApi.forgot_password,
        data: data,
      });

      const { data: responseData } = response;
      if (responseData?.success) {
        toast.success(responseData?.message);
        navigate("/thanh-vien/xac-minh-otp", { state: data });
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
        <FormTitle title="Quên mật khẩu" />

        <form onSubmit={handleSubmit} className="grid gap-3">
          <FormInput
            id={"email"}
            name={"email"}
            value={data.email}
            onChange={handleOnchange}
            autoFocus
            placeholder="Email"
            type="email"
          />
          <FormButton
            disabled={loading || !validateValue}
            title="Lấy lại mật khẩu"
          />
        </form>
        {loading && <Loading />}

        <div className="text-right items-end justify-end">
          <Link to={"/thanh-vien/dang-nhap"} className="hover:text-orange-500">
            Đăng nhập tại đây
          </Link>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default ForgotPassword;
