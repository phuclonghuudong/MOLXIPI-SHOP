import React from "react";
import LOGO from "../assets/logo_lien_he.png";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import TitlePage from "../components/TitlePage";

const ContactPage = () => {
  return (
    <section className="bg-white">
      <div className="">
        <TitlePage title="Liên hệ" />
      </div>
      <div className="grid gap-2 lg:flex lg:flex-rows justify-around">
        <div className="w-full h-full">
          <div className="text-xs p-4 grid  gap-2">
            <p className="font-semibold uppercase">
              Nơi giải đáp toàn bộ thắc mắc của bạn
            </p>
            <p className="font-semibold ">
              Hotline:{" "}
              <span className="text-orange-500 hover:text-blue-800">
                0123456789 || 0987654321
              </span>
            </p>
            <p className="font-semibold ">
              Email:{" "}
              <span className="text-orange-500 hover:text-blue-800">
                phucpham.241099@gmail.com
              </span>
            </p>

            <div className="flex flex-row justify-between items-center gap-4">
              <div className="w-full">
                <FormInput
                  id={"name"}
                  name={"name"}
                  value={""}
                  onChange={""}
                  type={"text"}
                  placeholder={"Họ và tên"}
                />
              </div>
              <div className="w-full">
                <FormInput
                  id={"email"}
                  name={"email"}
                  value={""}
                  onChange={""}
                  type={"email"}
                  placeholder={"Email"}
                />
              </div>
            </div>
            <div>
              <FormInput
                id={"phone"}
                name={"phone"}
                value={""}
                onChange={""}
                type={"text"}
                placeholder={"Điện thoại"}
              />
            </div>
            <div>
              <FormInput
                id={"content"}
                name={"content"}
                value={""}
                onChange={""}
                type={"text"}
                placeholder={"Nội dung"}
              />
            </div>
            <div>
              <FormButton title={"Gửi thông tin"} />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center p-2">
          <img src={LOGO} className="object-scale-down w-32 items-center" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
