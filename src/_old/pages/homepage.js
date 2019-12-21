import React from "react";

import HeroSection from "../organisms/hero";
import ContactSection from "../organisms/contact";
import ServicesSection from "../organisms/services";

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
