import React from "react";

const SecondaryButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-transparent hover:bg-primaryColor text-primaryColor hover:text-indigo-500 px-7 py-2 rounded-lg border border-primaryColor transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
