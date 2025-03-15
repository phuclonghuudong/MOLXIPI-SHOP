import React, { useState } from "react";

const FormBirthday = ({ label, labelBold, id, name, value, onChange }) => {
  const [select, setSelect] = useState({
    day: "",
    month: "",
    year: "",
  });
  return (
    <div className="flex flex-row justify-center items-center">
      {label && (
        <div className="flex-[2]">
          <label className={`text-xs py-2 ${labelBold ? "font-semibold" : ""}`}>
            {label ? label : ""}
          </label>
        </div>
      )}
      <div className="flex-[10] flex justify-center items-center">
        <div className="flex-[3] h-10">
          <select
            class="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
            id={id ? id : ""}
            name={name ? name : ""}
            value={value}
            onChange={onChange}
          >
            <option value="0">Chọn ngày</option>
            {new Array(12).fill(null).map((item, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
        <div className="flex-[3] h-10">
          <select
            class="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
            value={value}
            onChange={onChange}
          >
            <option value="0">Chọn tháng</option>
            {new Array(12).fill(null).map((item, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
        <div className="flex-[3] h-10">
          <select
            class="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
            value={value}
            onChange={onChange}
          >
            <option value="0">Chọn năm</option>
            {new Array(12).fill(null).map((item, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormBirthday;
