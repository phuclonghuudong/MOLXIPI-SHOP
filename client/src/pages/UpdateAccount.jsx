import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormBirthday from "../components/FromBirthday";
import Loading from "../components/Loading";
import TextBoldNoUppercase from "../components/TextBoldNoUppercase";
import TextUpperCaseNoBold from "../components/TextUpperCaseNoBold";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import fetchUserDetails from "../utils/fetchUserDetails";

const UpdateAccount = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    phone: "",
    gender: "",
    birthday: "",
  });
  console.log(data);

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
  useEffect(() => {
    if (user?._id) {
      setData({
        email: user?.email,
        username: user?.username,
        phone: user?.phone,
        gender: user?.gender,
        birthday: birthday ? birthday : user?.birthday,
      });
    }
  }, [user, birthday]);

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await Axios({
        ...SummaryApi.update_detail,
        data: data,
      });

      const { data: responseData } = response;
      if (responseData?.success) {
        toast.success(responseData?.message);
        fetchUserDetails();
      }
      if (responseData?.error) {
        toast?.error(responseData?.message);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  // thay đổi mật khẩu
  const [dataReset, setDataReset] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loadingResetPassword, setLoadingResetPassword] = useState(false);
  const validateValueDataReset = Object.values(dataReset).every((el) => el);
  const handleOnchangeDataReset = (event) => {
    const { name, value } = event.target;

    setDataReset((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmitForgotPassword = async (e) => {
    e.preventDefault();

    try {
      setLoadingResetPassword(true);

      const response = await Axios({
        ...SummaryApi.update_password,
        data: dataReset,
      });

      const { data: responseData } = response;

      if (responseData?.success) {
        toast.success(responseData.message);
        setDataReset({
          password: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        navigate("/thanh-vien/dang-nhap", { state: { email: user?.email } });
      }
      if (responseData?.error) {
        toast.error(responseData?.message);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoadingResetPassword(false);
    }
  };
  return (
    <section className="lg:p-0 p-4 items-center justify-center flex">
      <div className=" w-full lg:w-2/3">
        <div className="py-2">
          <div className="py-4">
            <TextUpperCaseNoBold title={"TRANG THÔNG TIN KHÁCH HÀNG"} />
          </div>

          <div className="w-1/4 py-2">
            <Link to={"/thanh-vien"} className="">
              <FormButton title={"QUAY LẠI"} />
            </Link>
          </div>
        </div>

        <div className="">
          <TextBoldNoUppercase title="Thông tin tài khoản" />
          <form className="py-2 grid gap-2" onSubmit={handleUpdateDetails}>
            <FormInput
              label="Email *"
              placeholder="Nhập email của bạn"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnchange}
            />
            <FormInput
              label="Họ tên *"
              placeholder="Nhập tên của bạn"
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleOnchange}
            />
            <FormInput
              label="Số điện thoại *"
              placeholder="Nhập số điện thoại của bạn"
              type="text"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleOnchange}
            />

            <FormSelect
              labelBold
              label="Giới tính:"
              id="gender"
              name="gender"
              value={data.gender}
              onChange={handleOnchange}
            />
            <FormBirthday
              labelBold
              label="Ngày sinh:"
              type="text"
              id="birthday"
              name="birthday"
              value={data?.birthday}
              onChange={(e) => setBirthday(e)}
            />
            <div className="py-4">
              <FormButton
                disabled={loading || !validateValue}
                title={"Cập nhật"}
              />
            </div>
            {loading && <Loading />}
          </form>
        </div>

        <div className="pb-20">
          <TextBoldNoUppercase title="Đổi mật khẩu" />
          <form className="py-2" onSubmit={handleSubmitForgotPassword}>
            <FormInput
              label="Mật khẩu hiện tại:"
              labelBold
              placeholder="Mật khẩu hiện tại (*)"
              type="password"
              id="password"
              name="password"
              value={dataReset.password}
              onChange={handleOnchangeDataReset}
            />
            <FormInput
              label="Mật khẩu mới:"
              labelBold
              placeholder="Mật khẩu mới (*)"
              type="password"
              id="newPassword"
              name="newPassword"
              value={dataReset.newPassword}
              onChange={handleOnchangeDataReset}
            />
            <FormInput
              label="Nhập lại mật khẩu mới:"
              labelBold
              placeholder="Nhập lại mật khẩu mới (*)"
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={dataReset.confirmNewPassword}
              onChange={handleOnchangeDataReset}
            />
            <div className="py-4">
              <FormButton
                disabled={loadingResetPassword || !validateValueDataReset}
                title={"Đổi mật khẩu"}
              />
            </div>
            {loadingResetPassword && <Loading />}
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateAccount;
