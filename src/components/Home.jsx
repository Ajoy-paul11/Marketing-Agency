import React, { lazy } from "react";
import HeroSection from "./HeroSection.jsx";
const Genre = lazy(() => import("./Genre.jsx"));
const AboutNew = lazy(() => import("./AboutNew.jsx"));
const Service = lazy(() => import("./Service.jsx"));
const Portfolio = lazy(() => import("./Portfolio.jsx"));
const Client = lazy(() => import("./Client.jsx"));
import PricingCard from "./PricingCard.jsx";
import AccordionComponent from "./Accordion.jsx";
import Contact from "./Contact.jsx";

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
      {/* <div>
        <PricingCard />
      </div> */}
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
