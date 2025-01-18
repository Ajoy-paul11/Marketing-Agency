import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import economic from "../../assets/Newspaper/economic.jpg";
import hindu from "../../assets/Newspaper/hindu.jpg";
import toi from "../../assets/Newspaper/toi.jpg";
import hindustan from "../../assets/Newspaper/hindustan.jpg";

function NewspaperService() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Newspaper Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={economic}
            title=" The Economic Times"
            type="We work with The Economic Times newspaper to promote brands products, and services."
            description={
              "Article writing, Product promotion, Ad-Campaign, Product-Highlighting"
            }
          />
          <ServiceTemplate
            img={hindu}
            title="The Hindu"
            type="We work with The Hindu newspaper to promote brands products, and services."
            description={
              "Article writing, Product promotion, Ad-Campaign, Product-Highlighting"
            }
          />
          <ServiceTemplate
            img={toi}
            title="The Times of India"
            type="We work with The Fortune India newspaper to promote brands products, and services."
            description={
              "Article writing, Product promotion, Ad-Campaign, Product-Highlighting"
            }
          />
          <ServiceTemplate
            img={hindustan}
            title="Hindustan Times"
            type="We work with The Fortune India newspaper to promote brands products, and services."
            description={"Article writing, Product promotion, Ad-Campaign, Product-Highlighting"}
          />
          <ServiceTemplate
            img={economic}
            title="Forbes India"
            type="We work with The Fortune India newspaper to promote brands products, and services"
            description={"Article writing, Product promotion, Ad-Campaign, Product-Highlighting"}
          />
          <ServiceTemplate
            img={hindu}
            title="Business Today"
            type="We work with The Fortune India newspaper to promote brands products, and services"
            description={"Article writing, Product promotion, Ad-Campaign, Product-Highlighting"}
          />
        </div>
      </div>
    </div>
  )
}

export default NewspaperService