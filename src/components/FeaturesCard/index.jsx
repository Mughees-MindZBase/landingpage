import React from "react";

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="w-80 space-y-5 mt-10 items-center justify-center text-justify p-5">
      <img src={icon} alt={title} className="w-[50px] h-[50px] mb-4 mx-auto" />
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-base font-semibold text-lightGrey">{description}</p>
    </div>
  );
};

export default FeaturesCard;
