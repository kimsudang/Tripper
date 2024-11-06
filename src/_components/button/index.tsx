"use client";

const ButtonComponent = ({ value, className, onClick, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {value}
    </button>
  );
};

export default ButtonComponent;
