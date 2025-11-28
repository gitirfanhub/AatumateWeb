import React from "react";
import { HomePageWrapper } from "./HomePageStyles";
import CategorySection from "./components/CategorySection";
import BrandsSection from "./components/BrandsSection";
import WorkProcess from "./components/WorkProcess";
import CustomerBenefits from "./components/CustomerBenefits";
import FeaturedBikeWorkshops from "./components/FeaturedBikeWorkshops";
import Feedback from "./components/Feedback";
// import AppAdvertisement from "./components/AppAdvertisement";
import TopSection from "./components/TopSection";
import StaticLayout from "./components/StaticLayout";
import OneApp from "./components/OneApp";
import CallToAction from "../../components/CallToAction";
import FeaturedLmvWorkshops from "./components/FeaturedLmvWorkshops";
import FeatureBikeServices from "./components/FeatureBikeServices";
import FeatureCarServices from "./components/FeatureCarServices";

function HomePage() {
  return (
    <HomePageWrapper>
      {/* <BannerSlider /> */}
      <TopSection />
      <CategorySection />
      <CallToAction />
      <FeatureBikeServices />
      <FeatureCarServices />
      <StaticLayout />
      <FeaturedBikeWorkshops />
      <FeaturedLmvWorkshops />
      <WorkProcess />
      <BrandsSection />
      <CustomerBenefits />
      <OneApp />
      <Feedback />
      {/* <AppAdvertisement /> */}
    </HomePageWrapper>
  );
}

export default HomePage;
