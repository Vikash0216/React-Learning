import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
