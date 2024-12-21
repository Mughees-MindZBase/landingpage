import React from "react";
import DotsImg from "../../../assets/images/dotsImg.svg";
import ActivityImg from "../../../assets/images/activityImg.svg";
import FoodUtilizationIcon from "../../../assets/images/foodUtilizationIcon.svg";
import AnalysisNowButton from "../../../components/AnalysisNowButton";
import TickIcon from "../../../assets/images/tickIcon.svg";
import BuildingIcon from "../../../assets/images/buildingIcon.svg";
import BrifcaseIcon from "../../../assets/images/brifcaseIcon.svg";

const AnalyticsFeature = () => {
  return (
    <>
      <div className="w-full h-[55rem] bg-overallBackground text-primaryColor ">
        <div className="w-full flex h-full">
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="relative">
              <img src={DotsImg} alt="Dots" className="w-[190px] h-[190px]" />
            </div>

            <div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px]">
              <img src={ActivityImg} alt="Activity" className="" />
            </div>

            <div className="absolute bottom-[110px] right-[-50px] bg-primaryColor p-4 rounded-lg shadow-lg">
              <div className="w-full space-y-3">
                <div className="w-full flex items-center gap-5">
                  <img src={FoodUtilizationIcon} />
                  <div>
                    <p className="text-lg font-bold text-black">
                      FoodUtilizationIcon
                    </p>
                    <p className="text-sm font-normal text-black">
                      24 Data available
                    </p>
                  </div>
                </div>
                <div>
                  <AnalysisNowButton text="Analyze Now" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-start pl-32 pr-10">
            <p className="text-4xl font-bold mb-4 uppercase">
              help you find the best analysis for your business
            </p>
            <div className="w-[80%] space-y-5">
              <div className="w-full flex items-center justify-between gap-5">
                <img src={TickIcon} className="w-16 h-16" />
                <div>
                  <p className="text-primaryColor text-xl font-medium">
                    Trusted and Acccurate
                  </p>
                  <p className="text-lightGrey text-base">
                    Amet minim mollit non deserunt ullamco est sit dolor do amet
                    sint.Velit officia consequat duis
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-5">
                <img src={BuildingIcon} className="w-16 h-16" />
                <div>
                  <p className="text-primaryColor text-xl font-medium">
                    Hired By Top Company
                  </p>
                  <p className="text-lightGrey text-base">
                    Amet minim mollit non deserunt ullamco est sit dolor do amet
                    sint.Velit officia consequat duis
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-5">
                <img src={BrifcaseIcon} className="w-16 h-16" />
                <div>
                  <p className="text-primaryColor text-xl font-medium">
                    Various Categories
                  </p>
                  <p className="text-lightGrey text-base">
                    Amet minim mollit non deserunt ullamco est sit dolor do amet
                    sint.Velit officia consequat duis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsFeature;
