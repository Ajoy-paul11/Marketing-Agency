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
// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";

function Home() {
  // const [open, setOpen] = React.useState(false);

  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  return (
    <div className=" w-full">
      {/* <React.Fragment>
        <button onClick={openDrawer} className=" absolute top-[200px] left-0 z-50 w-[10px] h-auto bg-blue-900 text-[#f4f5ff] overflow-x-hidden">Open Drawer</button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Material Tailwind
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Material Tailwind features multiple React and HTML components, all
            written with Tailwind CSS classes and Material Design guidelines.
          </Typography>
          <div className="flex gap-2">
            <Button size="sm" variant="outlined">
              Documentation
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </Drawer>
      </React.Fragment> */}
      <div className=" w-full max-h-fit bg-[#f4f5ff] flex flex-col lg:flex-row items-center justify-center gap-4 py-8">
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
      </div>
      <div className=" container mx-auto">
        <Genre />
      </div>
      <div className=" w-full my-8">
        <About />
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
        <AccordionComponent />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
