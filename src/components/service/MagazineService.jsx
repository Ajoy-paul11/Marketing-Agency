import React from 'react'
import ServiceTemplate from "./ServiceTemplate.jsx";
import forbes from "../../assets/Magazine/forbes-image.png";
import business from "../../assets/Magazine/business.png";
import fortune from "../../assets/Magazine/fortune.jpg";



function MagazineService() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Magazine Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={forbes}
            title="Forbes India"
            type="We provide the advertising services for Forbes India to promote their products."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={business}
            title="Business Today"
            type="We provide the advertising services for Business Today to promote their products."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={fortune}
            title="Fortune"
            type="We provide the advertising services for Fortune to promote their products."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={fortune}
            title="Fortune"
            type="We provide the advertising services for Fortune to promote their products."
            description={"Article writing, Product promotion, Ad-Campaign"}
          />
          <ServiceTemplate
            img={forbes}
            title="Forbes India"
            type="Hindi & Marathi"
            description={"3M Listeners"}
          />
          <ServiceTemplate
            img={business}
            title="Business Today"
            type="Hindi"
            description={"4.5M Listeners"}
          />
        </div>
      </div>
    </div>
  )
}

export default MagazineService;