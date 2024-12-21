import React from "react";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-primaryButtonBackground hover:bg-indigo-600 text-primaryColor px-7 py-2 rounded-lg transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
