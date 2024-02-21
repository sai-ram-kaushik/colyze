import React from "react";

const HeadingButton = ({ title, className }) => {
  return (
    <div
      className={`px-4 py-2 border border-secondary rounded-full text-2xl font-semibold ${className}`}>
      {title}
    </div>
  );
};

export default HeadingButton;
