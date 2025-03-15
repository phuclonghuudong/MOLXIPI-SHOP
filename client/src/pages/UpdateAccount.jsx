import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormBirthday from "../components/FromBirthday";
import TextBoldNoUppercase from "../components/TextBoldNoUppercase";
import TextUpperCaseNoBold from "../components/TextUpperCaseNoBold";

const UpdateAccount = () => {
  const user = useSelector((state) => state.user);
  const [selectGender, setSelectGender] = useState();
  const [selectBirthday, setSelectBirthday] = useState();
  const [data, setData] = useState({
    email: user?.email,
    username: user?.username,
    address: user?.address,
    phone: user?.phone,
    gender: user?.gender,
    password: "",
    newPassword: "",
    confirmNewPassword: "",
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
          <form className="py-2 grid gap-2">
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
              value={selectGender}
              onChange={(e) => setSelectGender(e.target.value)}
            />
            <FormBirthday
              labelBold
              label="Ngày sinh:"
              type="text"
              id="birthday"
              name="birthday"
              value={selectBirthday}
              onChange={(e) => setSelectBirthday(e.target.value)}
            />
            <div className="py-4">
              <FormButton title={"Cập nhật"} />
            </div>
          </form>
        </div>

        <div className="pb-20">
          <TextBoldNoUppercase title="Đổi mật khẩu" />
          <form className="py-2">
            <FormInput
              label="Mật khẩu hiện tại:"
              labelBold
              placeholder="Mật khẩu hiện tại (*)"
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnchange}
            />
            <FormInput
              label="Mật khẩu mới:"
              labelBold
              placeholder="Mật khẩu mới (*)"
              type="password"
              id="newPassword"
              name="newPassword"
              value={data.newPassword}
              onChange={handleOnchange}
            />
            <FormInput
              label="Nhập lại mật khẩu mới:"
              labelBold
              placeholder="Nhập lại mật khẩu mới (*)"
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={data.confirmNewPassword}
              onChange={handleOnchange}
            />
            <div className="py-4">
              <FormButton title={"Đổi mật khẩu"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateAccount;
