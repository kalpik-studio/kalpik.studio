import React from "react";

import HeroSection from "../components/organisms/hero";
import ContactSection from "../components/organisms/contact";
import ServicesSection from "../components/organisms/services";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default HomePage;
