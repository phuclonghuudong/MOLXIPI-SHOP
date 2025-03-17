import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import Loading from "../components/Loading";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (!location?.state?.data?.success) {
      navigate("/");
    }

    if (location?.state?.email) {
      setData((pre) => {
        return { ...pre, email: location?.state?.email };
      });
    }
  }, []);

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
        ...SummaryApi.reset_password,
        data: data,
      });

      const { data: responseData } = response;
      if (responseData?.success) {
        toast.success(responseData?.message);
        navigate("/thanh-vien/dang-nhap", { state: { email: data?.email } });
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
        <FormTitle title="Đổi mật khẩu" />

        <form onSubmit={handleSubmit} className="grid gap-3">
          <FormInput
            id={"newPassword"}
            name={"newPassword"}
            value={data.newPassword}
            onChange={handleOnchange}
            autoFocus
            placeholder="Mật khẩu mới của bạn"
            type="password"
          />
          <FormInput
            id={"confirmNewPassword"}
            name={"confirmNewPassword"}
            value={data.confirmNewPassword}
            onChange={handleOnchange}
            placeholder="Nhập lại mật khẩu"
            type="password"
          />
          <FormButton disabled={loading || !validateValue} title="Xác nhận" />
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

export default ResetPassword;
