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
          class="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
          id={id ? id : ""}
          name={name ? name : ""}
          value={value ? value : ""}
          onChange={onChange}
        >
          <option value="0">Chọn giới tính</option>
          <option value="1">Nam</option>
          <option value="2">Nữ</option>
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
