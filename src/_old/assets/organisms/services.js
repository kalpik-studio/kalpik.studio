import React from "react";
import Dexer from '../assets/icons/dexer';

const services = {
  indentity: [
    {
      title: "Logo Design",
      price: "400",
      description:
        "Max. 3 iterations of a logo (icon or text based). Deliverables: PNG, JPG, SVG, PDF",
      
    },
    {
      title: "Color-Theming and Typography",
      price: "400",
      description:
        "Generate brand colour palette and define typography styles for all major applications."
    },
    {
      title: "Layout and Printing",
      price: "600",
      description: "Letterhead, Business Card, Powerpoint Presentation Design"
    },
    {
      title: "Branding Usage & Applications",
      price: "300",
      description:
        "Social-Media banners, Branding on materials like clothes, mugs, etc."
    },
    {
      title: "Branding and Style Guidelines PDF",
      price: "600",
      description:
        "PDF Document containing guidelines for usage of logo and/or other branding material. The price is per document. Additional price for translation."
    },
    {
      title: "Logo Generator Tool",
      price: "1000",
      description:
        "A web-based tool which can be used internally (or externally) generate your logo/icon in any size, or different colour. It can be even coupled with other text items (lock-ups)."
    },
    {
      title: "Branding Package - Basic",
      price: "1500",
      special: true,
      description:
        "Logo; Color-Theming and Typography; Layout and Printing; Branding Applications"
    },
    {
      title: "Branding Package - Advanced",
      price: "2800",
      special: true,
      description:
        "Logo + Color-Theming and Typography + Layout and Printing + Branding Applications + Branding and Style Guidelines PDF + Logo Generator Tool"
    }
  ]
};

const ServicesSection = () => {
  return (
    <div id="services" className="pad100">
      <div id="hero-text">
        <h1>Services</h1>
        <hr />
        <details open>
        <summary className="h2">Branding and Identity</summary>
        <div className="flex flex-wrap " >
          {services.indentity.map(service => (
            <div
              key={service.title}
              className={service.special ? "serviceBox special" : "serviceBox"}
              style={{
                backgroundImage: service.image
                  ? `url(${service.image})`
                  : "inherit"                
              }}
            >
                {service.image ? <div className="overlay" /> :null}
                
              <h5 style={{color: service.image ? '#FFFFFF' : 'inherit'}}>{service.title}</h5>
              
              <Dexer fill="#888" height="2em" width="2em"/>
              {/* <Icon icon={service.icon ? service.icon : arrowDown} size={32}/> */}
            <span  style={{color: service.image ? '#FFFFFF' : 'inherit'}} className="content">{service.description}</span>
            </div>
          ))}
        </div>
        </details>
      </div>
    </div>
  );
};

export default ServicesSection;
