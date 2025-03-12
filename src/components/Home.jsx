import React, { useEffect } from "react";
import Example from "./Carousel.jsx";
import Animation from "./Animation.jsx";
import Genre from "./Genre.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Portfolio from "./Portfolio.jsx";
import Client from "./Client.jsx";
import AccordionComponent from "./Accordion.jsx";
import Contact from "./Contact.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroSection from "./HeroSection.jsx";
import AboutNew from "./AboutNew.jsx";
import PricingCard from "./PricingCard.jsx";
import useScrollPositionRestoration from "../hook/useScrollPositionRestoration.jsx";



function Home() {
  
  useScrollPositionRestoration()

  return (
    <div className=" w-full">
      <HeroSection />
      <div className=" container mx-auto">
        <Genre />
      </div>
      <div className=" w-full my-8">
        {/* <About /> */}
        <AboutNew />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Client />
      </div>
      <div>
        <PricingCard />
      </div>
      <div>
        <AccordionComponent />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
