import React, { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionComponent() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" my-16">
      <h2
        className=" text-2xl xl:text-3xl text-primary font-secondary text-center my-8"
      >
        Frequently Asked Questions
      </h2>
      <div className=" container mx-auto w-full my-4 grid grid-cols-1 gap-8 md:grid-cols-2 p-4 xl:p-8 ">
        <Accordion
          className=" px-4 rounded "
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(1)}
          >
            Can you help with social media advertising?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          Yes, we specialize in creating and managing social media ad campaigns on platforms like Facebook, Instagram, LinkedIn. We optimize ads to ensure maximum ROI.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" px-4 rounded "
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(2)}
          >
            Do you offer website design and development?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          Absolutely! We design and develop responsive, user-friendly websites that align with your brand and business goals. Our designs focus on enhancing user experience and conversions.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" px-4 rounded "
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(3)}
          >
            How do you ensure brand consistency across campaigns?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          We maintain brand guidelines to ensure a consistent voice, tone, and visual style across all marketing materials. Our team collaborates closely with you to uphold your brand identity.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" px-4 rounded "
          open={open === 4}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(4)}
          >
            Can you provide reports on campaign performance?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          Yes, we provide detailed reports with key metrics and insights to track your campaign’s success. Our reports include actionable recommendations for further improvement.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" px-4 rounded "
          open={open === 5}
          icon={<Icon id={5} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(5)}
          >
            What platforms do you recommend for my business?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          It depends on your target audience and goals. We analyze your industry and customer behavior to recommend the most effective platforms for your campaigns.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" px-4 rounded"
          open={open === 6}
          icon={<Icon id={6} open={open} />}
        >
          <AccordionHeader
            className=" text-primary flex justify-between text-base lg:text-lg"
            onClick={() => handleOpen(6)}
          >
            What is the cost of your marketing services?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
          Our pricing varies depending on the scope of work, campaign complexity, and the channels used. We offer customized packages to fit different budgets and business needs.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionComponent;
