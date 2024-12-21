// FaqQuestion.js
import React from "react";

const FaqQuestion = ({ question, answer }) => {
  return (
    <div className="flex flex-col justify-between w-full  p-6">
      <p className="text-xl font-semibold text-primaryColor">{question}</p>
      <p className="text-base text-lightGrey mt-4">{answer}</p>
    </div>
  );
};

export default FaqQuestion;
