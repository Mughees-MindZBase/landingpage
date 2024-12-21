import React from "react";
import VideoImg from "../../../assets/images/VideoImg.svg";
import playButton from "../../../assets/images/playButton.svg";
import ResponsiveIcon from "../../../assets/images/responsiveIcon.svg";
import LayoutIcon from "../../../assets/images/layoutIcon.svg";
import RocketIcon from "../../../assets/images/rocketIcon.svg";
import MessageIcon from "../../../assets/images/messageIcon.svg";
import DocumentationIcon from "../../../assets/images/documentationIcon.svg";
import UpdateIcon from "../../../assets/images/updateIcon.svg";
import FeaturesCard from "../../../components/FeaturesCard";

const Features = () => {
  // Dummy data for the cards
  const featuresData = [
    {
      icon: ResponsiveIcon,
      title: "Fully Responsive",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: LayoutIcon,
      title: "Multiple Layouts",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: RocketIcon,
      title: "Faster Loading",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: MessageIcon,
      title: "Super Support",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: DocumentationIcon,
      title: "Rich Documentation",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: UpdateIcon,
      title: "Lifetime Updates",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
  ];

  return (
    <>
      <div className="w-full py-20 bg-primaryBackground text-primaryColor">
        <div className="w-full flex items-center justify-center">
          <div className="w-[50%] flex flex-col items-center justify-center">
            <p className="text-6xl font-semibold text-center uppercase">
              Why Orinix would be your best fit?
            </p>
            <p className="text-secondaryColor px-20 w-[90%] pt-7 text-center">
              Watch this 1 min video to learn about Orinix.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex items-center justify-center pt-10 relative">
          <img src={VideoImg} alt="Video" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={playButton}
              alt="Play Button"
              className="w-[80px] h-[80px]"
            />
          </div>
        </div>

        {/* Features Cards */}
        <div className="w-full flex flex-wrap justify-center items-center px-20">
          {featuresData.map((feature, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex justify-center"
              key={index}
            >
              <FeaturesCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
