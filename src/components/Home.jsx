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


function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  return (
    <div className=" w-full">
      <HeroSection />
      {/* <div className=" w-full max-h-fit bg-[#f4f5ff] flex flex-col lg:flex-row items-center justify-center gap-4 py-8">
        <section
          data-aos="fade-right"
          data-aos-delay="200"
          className=" w-full lg:w-1/2 flex flex-col items-center justify-center text-primary order-2 lg:order-1"
        >
          <h2 className=" text-3xl lg:text-5xl font-bold mb-4 font-secondary px-10 ml-6 md:px-16 md:ml-16 2xl:leading-[48px]">
            More Than Just An Advertising Agency We Are A 360-Degree Data-Driven
            Marketing Firm
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className=" w-full ">
            <Example />
          </div>
        </section>
        <section
          data-aos="fade-left"
          data-aos-delay="200"
          className=" w-full lg:w-1/2 flex flex-col items-center justify-center order-1"
        >
          <Animation />
        </section>
      </div> */}
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
