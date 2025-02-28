import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import seo from "../../assets/services/seo.png";
import digitalImage from "../../assets/DigitalMedia/Digital-services-300-x-128.jpg";

function DigiService() {
  return (
    <div className="w-full">
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Digital Media:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={seo}
            title="SEO"
            type="SEO helped these businesses to reach their targeted customers easily and helped to grab more data."
            description={
              "N/A"
            }
          />
          <ServiceTemplate
            img={digitalImage}
            title="Google Ads"
            type="SMM helped brands to reach their audiences much faster improved the brand value."
            description={
              "200M Monthly Users"
            }
          />
          <ServiceTemplate
            img={seo}
            title="Meta Ads"
            type="SEM helped business through various search engine to gather more information about the customers"
            description={
              "400.3M Monthly Users"
            }
          />
          <ServiceTemplate
            img={seo}
            title="Spotify Ads"
            type="SEM helped business through various search engine to gather more information about the customers"
            description={
              "68.2M Monthly Users"
            }
          />
          <ServiceTemplate
            img={seo}
            title="Hotstar Ads"
            type="SEM helped business through various search engine to gather more information about the customers"
            description={
              "102.2M Monthly Users"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DigiService;
