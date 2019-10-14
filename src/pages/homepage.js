import React from "react";

import HeroSection from "../components/organisms/hero";
import ContactSection from "../components/organisms/contact";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default HomePage;
