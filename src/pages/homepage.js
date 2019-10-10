import React from "react";

import HeroSection from "./sections/hero";
import ContactSection from "./sections/contact";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default HomePage;
