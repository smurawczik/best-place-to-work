import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-sm border-0 text-white py-1 px-2 rounded"
      {...props}
    >
      {children}
    </button>
  );
};
