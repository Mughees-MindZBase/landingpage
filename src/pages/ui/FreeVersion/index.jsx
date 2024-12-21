import React from "react";
import FreeVersionImg from "../../../assets/images/freeVersionImg.svg";
import Button from "../../../components/Button";

const FreeVersion = () => {
  return (
    <div className="bg-overallBackground py-10 px-14">
      <div className="bg-popularCardBckground px-10 rounded-2xl w-full flex items-center justify-between">
        <div className="w-full  flex justify-between">
          {/* Text Section */}
          <div className="space-y-4 pt-20">
            <p className="text-primaryColor text-4xl font-semibold">
              Explore Free Version now!
            </p>
            <p className="text-lightGrey text-lg w-[80%]">
              Search all the open positions on the web. Get your own
              personalized dashboard for lifetime.
            </p>

            {/* Buttons */}
            <div className="w-full flex items-center gap-10 pt-20">
              <Button
                bgColor="bg-white"
                textColor="text-Black"
                text="Join Waitlist"
              />
              <Button
                bgColor="bg-transparent border-2 border-primaryColor"
                textColor="text-primaryColor"
                text="Contact"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img src={FreeVersionImg} alt="Free Version" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeVersion;
