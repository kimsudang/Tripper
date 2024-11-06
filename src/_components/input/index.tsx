"use client";

const InputComponent = ({ className, placeholder ...props }) => {
  return <input className={className} placeholder={placeholder}/>;
};

export default InputComponent;
