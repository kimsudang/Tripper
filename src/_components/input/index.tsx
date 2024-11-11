"use client";

// TODO: InputComponent type error
const InputComponent = ({
  value,
  className,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <div className="w-3/4 max-w-xl flex content-center items-center gap-5">
      <span className="w-20">{value}</span>
      <input
        className={`w-full h-15 p-2 border-solid border-2 border-black rounded-xl ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default InputComponent;
