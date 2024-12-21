import React from "react";

const AnalysisNowButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-analysisButtonBackground hover:bg-indigo-600 w-full text-white px-12 py-2 shadow-md transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AnalysisNowButton;
