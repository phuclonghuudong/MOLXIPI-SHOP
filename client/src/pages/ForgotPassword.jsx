import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import Loading from "../components/Loading";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="  w-full lg:w-96 rounded lg:mx-auto lg:pt-4 text-sm">
      <div className="bg-white grid gap-3 p-2">
        <FormTitle title="Quên mật khẩu" />

        <FormInput
          id={"email"}
          name={"email"}
          value={""}
          onChange={""}
          autoFocus
          placeholder="Email"
          type="email"
        />
        <FormButton disabled={loading} title="Lấy lại mật khẩu" />
        {loading && <Loading />}

        <div className="text-right items-end justify-end">
          <Link to={"/thanh-vien/dang-nhap"} className=" hover:text-orange-500">
            Đăng nhập tại đây
          </Link>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default ForgotPassword;
