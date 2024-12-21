import React from "react";
import SecondaryButton from "../../../components/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton";
import AnalyticsImg from "../../../assets/images/analyticsImg.svg";
import Banner from "../../../assets/images/banner.svg";

const HomeHeader = () => {
  return (
    <div className="w-full pt-10 bg-overallBackground text-primaryColor">
      <div className="w-full flex items-center justify-center">
        <div className="w-[60%] flex flex-col items-center justify-center">
          <p className="text-extralarge font-semibold text-center">
            INTEGRATE AI FOR A COMPETITIVE ANALYSIS FOR YOUR BUSINESS ⭐️
          </p>
          <p className="text-secondaryColor px-20 w-[90%] pt-7 text-center">
            ELEVATE YOUR ADVERTISING GAME WITH CREATIVES THAT CONSISTENTLY
            OUTPERFORM YOUR COMPETITORS, SETTING YOUR BRAND APART.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-10 pt-7">
        <PrimaryButton text="Join The Waitlist" />
        <SecondaryButton text="Know More" />
      </div>
      <div className="w-full flex items-center justify-center gap-10 pt-10">
        <img src={AnalyticsImg} className="relative" />
      </div>
      <div className="w-full flex items-center justify-center gap-10 relative">
        <img src={Banner} className="w-full absolute bottom-[-50px]" />
      </div>
    </div>
  );
};

export default HomeHeader;
