import React from "react";
import profilePic1 from "../../../assets/images/reviewPic1.svg";
import profilePic2 from "../../../assets/images/reviewPic2.svg";
import profilePic3 from "../../../assets/images/reviewPic3.svg";
import ReviewCard from "../../../components/ReviewCard";

const Reviews = () => {
  const reviewsData = [
    {
      profilePic: profilePic1,
      name: "Leslie Alexander",
      role: "Community",
      reviewText:
        "Circle is being used for my project, and the team has been very helpful. Thanks, are there any new Tools you've tried this week?",
      stars: 5,
    },
    {
      profilePic: profilePic2,
      name: "John Doe",
      role: "Marketing",
      reviewText:
        "The platform is intuitive and easy to use. I would highly recommend it to others.",
      stars: 4,
    },
    {
      profilePic: profilePic3,
      name: "Sara Lee",
      role: "Design",
      reviewText: "Great support and useful tools for collaboration. Love it!",
      stars: 5,
    },
    {
      profilePic: profilePic1,
      name: "James Smith",
      role: "Product Manager",
      reviewText: "Fantastic experience, and it's been a real game-changer.",
      stars: 4,
    },
    {
      profilePic: profilePic2,
      name: "Mary Johnson",
      role: "Developer",
      reviewText:
        "Circle has made collaboration with my team so much easier. Highly recommended!",
      stars: 5,
    },
    {
      profilePic: profilePic3,
      name: "David Williams",
      role: "Sales",
      reviewText:
        "The user interface is intuitive and the experience is smooth.",
      stars: 4,
    },
    {
      profilePic: profilePic1,
      name: "Jessica Brown",
      role: "Customer Support",
      reviewText:
        "Absolutely fantastic. We use Circle every day, and it's great!",
      stars: 5,
    },
  ];

  return (
    <div className="w-full py-20 bg-primaryBackground text-primaryColor">
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-center uppercase">
            What people are saying about Circle
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="pt-10 inline-flex space-x-5 min-w-max px-4">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={index}
              profilePic={review.profilePic}
              name={review.name}
              role={review.role}
              reviewText={review.reviewText}
              stars={review.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
