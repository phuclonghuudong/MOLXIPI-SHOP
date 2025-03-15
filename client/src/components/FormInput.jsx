import React from "react";

const FormInput = ({
  label,
  labelBold,
  placeholder,
  type,
  id,
  name,
  value,
  onChange,
  autoFocus,
}) => {
  return (
    <div className="grid">
      {label && (
        <label className={`text-xs py-2 ${labelBold ? "font-semibold" : ""}`}>
          {label ? label : ""}
        </label>
      )}
      <input
        type={type ? type : ""}
        id={id ? id : ""}
        name={name ? name : ""}
        value={value ? value : ""}
        onChange={onChange}
        autoFocus={autoFocus ? true : false}
        className="w-full outline-none  h-10 p-4 border border-slate-300 rounded-sm placeholder:text-slate-700 text-xs"
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default FormInput;
