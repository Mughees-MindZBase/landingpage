import React from "react";

const Button = ({ bgColor, textColor, text, onClick }) => {
  return (
    <button
      className={`px-5 py-3 rounded-lg font-medium ${bgColor} ${textColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
