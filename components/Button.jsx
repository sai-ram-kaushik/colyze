import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`bg-secondary rounded-full px-4 py-3 font-medium text-background hover:bg-background border border-secondary hover:text-primary duration-500 ease-out ${className}`}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
