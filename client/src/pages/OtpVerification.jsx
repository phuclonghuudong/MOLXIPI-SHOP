import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import FormButton from "../components/FormButton";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";

const OtpVerification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);

  const validateValue = data.every((el) => el);

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/thanh-vien/quen-mat-khau");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password_otp_verification,
        data: {
          otp: data.join(""),
          email: location?.state?.email,
        },
      });

      if (response?.data?.error) {
        toast.error(response?.data?.message);
      }

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        setData(["", "", "", "", "", ""]);
        navigate("/thanh-vien/doi-mat-khau", {
          state: {
            data: response?.data,
            email: location?.state?.email,
          },
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className=" w-full container mx-auto px-2">
      <div className="bg-white my-4 max-w-lg mx-auto rounded p-4">
        <p className="font-bold text-lg mb-3">Xác minh OTP</p>

        <form className="grid gap-4 mt-2" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="otp">Mã OTP đã gửi vào hộp thư của bạn: </label>
            <div className="flex items-center gap-3 justify-between">
              {data.map((e, index) => {
                return (
                  <input
                    key={"opt" + index}
                    ref={(ref) => {
                      inputRef.current[index] = ref;
                      return ref;
                    }}
                    type="text"
                    maxLength={1}
                    value={data[index]}
                    onChange={(e) => {
                      const value = e.target.value;

                      const newData = [...data];
                      newData[index] = value;
                      setData(newData);

                      if (value && index < 5) {
                        inputRef.current[index + 1].focus();
                      }
                    }}
                    id={"opt" + index}
                    autoFocus={index === 0 ? true : false}
                    className="text-center bg-blue-50 w-full max-w-16 p-2 border rounded outline-none focus:border-orange-200 font-semibold"
                  />
                );
              })}
            </div>
          </div>
          <FormButton disabled={loading || !validateValue} title="Xác nhận" />
        </form>
        <div className="grid gap-2 py-2">
          <p className="ml-auto">
            Bạn chưa nhận được mã OTP?{" "}
            <Link
              to={"/thanh-vien/quen-mat-khau"}
              className="font-semibold text-orange-500 hover:text-orange-700"
            >
              Quay lại
            </Link>
          </p>

          <p className="">
            Bạn đã có tài khoản ?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-orange-500 hover:text-orange-700"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtpVerification;
