import React from "react";

const Input = (props: any) => {
  const {
    id,
    name,
    type,
    value,
    className = "",
    disabled = false,
    placeholder,
    onChange,
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      className={`block w-full mt-2 px-3 py-2 text-slate-700 rounded-xl border-2 border-slate-200 bg-white/90 shadow-sm ${disabled ? "bg-slate-100" : ""} focus:border-primary focus:ring-2 focus:ring-primary/20 transition outline-none hover:border-slate-300 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;

export const Textarea = (props: any) => {
  const {
    id,
    name,
    /*type,*/ value,
    className = "",
    placeholder,
    onChange,
  } = props;
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      className={`block w-full h-40 mt-2 px-3 py-2 text-slate-700 rounded-xl border-2 border-slate-200 bg-white/90 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition outline-none hover:border-slate-300 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
