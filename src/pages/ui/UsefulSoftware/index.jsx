import React from "react";
import SoftwareListOne from "../../../assets/images/softwareListOne.svg";
import SoftwareListTwo from "../../../assets/images/softwareListTwo.svg";

const UsefulSoftware = () => {
  return (
    <div className="w-full h-screen py-20 bg-overallBackground text-primaryColor flex flex-col items-center justify-center">
      <div className="flex justify-center mb-10 w-[50%]">
        <p className="text-7xl font-semibold text-center uppercase">
          Useful software that We assist.
        </p>
      </div>

      <div className="justify-center">
        <div className="flex flex-col items-center pt-10">
          <img src={SoftwareListOne} alt="Software 1" />
        </div>
        <div className="flex flex-col items-center pt-20">
          <img src={SoftwareListTwo} alt="Software 2" />
        </div>
      </div>
    </div>
  );
};

export default UsefulSoftware;
