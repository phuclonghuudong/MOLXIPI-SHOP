import React from "react";

const FormButton = ({ title, type, disabled }) => {
  return (
    <div className="">
      <button
        type={type ? type : ""}
        disabled={disabled ? true : false}
        className={` w-full h-10 rounded-sm  text-xs uppercase font-semibold ${
          disabled
            ? "cursor-not-allowed bg-yellow-50 text-slate-500 "
            : "cursor-pointer bg-orange-600 border-orange-600 border hover:bg-white hover:border hover:border-orange-600 hover:text-orange-600 duration-300"
        }`}
      >
        {title}
      </button>
    </div>
  );
};

export default FormButton;
