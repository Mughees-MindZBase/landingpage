import React from "react";
import Layout from "../../layout";
import HomeHeader from "../ui/HomeHeader";
import AnalyticsFeature from "../ui/AnalyticsFeature";
import Features from "../ui/Features";
import UsefulSoftware from "../ui/UsefulSoftware";
import Reviews from "../ui/Reviews";
import PricingSection from "../ui/PricingSection";
import Faqs from "../ui/Faqs";
import FreeVersion from "../ui/FreeVersion";

const LandingPage = () => {
  return (
    <Layout>
      <HomeHeader />
      <AnalyticsFeature />
      <Features />
      <UsefulSoftware />
      <Reviews />
      <PricingSection />
      <Faqs />
      <FreeVersion />
    </Layout>
  );
};

export default LandingPage;
