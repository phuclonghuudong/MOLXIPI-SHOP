import React from "react";

const FormSelect = ({ label, labelBold, id, name, value, onChange }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      {label && (
        <div className="flex-[1]">
          <label className={`text-xs py-2 ${labelBold ? "font-semibold" : ""}`}>
            {label ? label : ""}
          </label>
        </div>
      )}
      <div className="flex-[5] h-10">
        <select
          className="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
          id={id ? id : ""}
          name={name ? name : ""}
          value={value}
          onChange={onChange}
        >
          <option key={"0"} value="">
            Chọn giới tính
          </option>
          <option key={"male"} value="male">
            Nam
          </option>
          <option key={"female"} value="female">
            Nữ
          </option>
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
