import React from "react";
import star from "../../assets/images/star.svg";
const ReviewCard = ({ profilePic, name, role, reviewText, stars }) => {
  return (
    <div className="bg-reviewBackground p-5 w-[430px] h-[200px] rounded-lg hover:shadow-lg flex-shrink-0 relative">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src={profilePic}
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <div>
          <p className="text-primaryColor text-base font-medium">{name}</p>
          <p className="text-lightGrey text-sm font-normal">{role}</p>
        </div>
      </div>

      <div className="text-justify mt-4">
        <p className="text-lightGrey text-base font-normal">{reviewText}</p>
      </div>

      <div className="flex space-x-1 absolute bottom-4 left-4">
        {Array(stars)
          .fill()
          .map((_, index) => (
            <img
              key={index}
              src={star}
              alt="Star"
              className="w-[20px] h-[20px]"
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewCard;
