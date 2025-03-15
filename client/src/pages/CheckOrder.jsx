import React from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import TitlePage from "../components/TitlePage";

const CheckOrder = () => {
  return (
    <section className="bg-white">
      <div className="">
        <TitlePage title="Kiểm tra đơn hàng" />
      </div>
      <div className="grid gap-2 lg:flex lg:flex-rows justify-around">
        <div className="w-full h-full p-4">
          <p className="font-semibold uppercase ">kiểm tra đơn hàng</p>
          <div className="grid w-full gap-4 p-4">
            <div className="w-full grid gap-2">
              <label htmlFor="phone" className="text-sm">
                Mã đơn hàng/Số điện thoại*
              </label>
              <FormInput
                id={"phone"}
                name={"phone"}
                value={""}
                onChange={""}
                type={"text"}
              />
            </div>

            <div>
              <FormButton title={"Tra cứu đơn hàng"} />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center p-2"></div>
      </div>
    </section>
  );
};

export default CheckOrder;
