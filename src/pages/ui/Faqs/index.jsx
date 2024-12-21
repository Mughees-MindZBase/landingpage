import React from "react";
import FaqQuestion from "../../../components/FaqQuestion";

const Faqs = () => {
  const faqData = [
    {
      question: "What’s gonna be your question??",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
    },
    {
      question: "What’s gonna be your question?",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
    },
    {
      question: "What’s gonna be your question?",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
    },
    {
      question: "What’s gonna be your question?",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
    },
    {
      question: "What’s gonna be your question?",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
    },
    {
      question: "What’s gonna be your question?",
      answer:
        "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
    },
  ];

  return (
    <div className="w-full py-20 bg-primaryBackground text-primaryColor">
      {/* Heading Section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-center uppercase">
            Frequently Asked Questions
          </p>
          <p className="text-secondaryColor text-2xl px-20 w-[90%] pt-7 text-center">
            Create custom landing pages with Omega that converts.
          </p>
        </div>
      </div>

      {/* Faq questions */}
      <div className="container mx-auto px-40 mt-12 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {faqData.map((faq, index) => (
            <FaqQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
