import React from "react";
import ClientService from "./ClientService.jsx";
import business from "../../assets/Magazine/business.png";
import bigfm from "../../assets/Radio/bigfm.png";
import facebook from "../../assets/DigitalMedia/facebook.png";
import economic from "../../assets/Newspaper/economic.jpg";
import ScrollToTop from "../ScrollToTop.jsx";

function Nps() {
  return (
    <div className=" py-6 bg-[#f4f5ff] mt-[75px]">
      <ScrollToTop />
      <div className=" px-4 mb-4 container mx-auto">
        <h1 className=" pl-2 lg:pl-16 xl:pl-32 text-3xl font-semibold text-primary py-3">
          <span className=" primary-font text-orange-600">NPS School</span>{" "}
          associated with the services:{" "}
        </h1>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6  px-12 xl:px-48">
        <div>
          <ClientService
            imageSrc={business}
            imageAlt={"magazine"}
            title={"Business Today"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus ut perferendis quas amet, eum soluta."
            }
            // buttonText={"Know more"}
          />
        </div>
        <div>
          <ClientService
            imageAlt={"radio"}
            imageSrc={bigfm}
            title={"Big FM"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus ut perferendis quas amet, eum soluta."
            }
            // buttonText={"Know more"}
          />
        </div>
        <div>
          <ClientService
            imageSrc={facebook}
            imageAlt={"facebook"}
            title={"Facebook"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus ut perferendis quas amet, eum soluta."
            }
            // buttonText={"Know more"}
          />
        </div>
        <div>
          <ClientService
            imageSrc={economic}
            imageAlt={"news"}
            title={"Economic Times"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus ut perferendis quas amet, eum soluta."
            }
            // buttonText={"Know more"}
          />
        </div>
      </div>
    </div>
  );
}

export default Nps;
