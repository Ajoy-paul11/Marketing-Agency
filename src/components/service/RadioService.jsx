import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
// import bigfm from "../../assets/Radio/bigfm.png";
// import redfm from "../../assets/Radio/redfm.jpg";
// import radiomirchi from "../../assets/Radio/radiomirchi.png";
import radioImage from "../../assets/Radio/Radio-288-x-192.jpg";


function RadioService() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Radio Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={radioImage}
            title="Big FM"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={radioImage}
            title="Red FM"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={radioImage}
            title="Radio Mirchi"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={radioImage}
            title="Radio Mirchi"
            type="We help our clients to promote their products throught radio media."
            description={"Article writing, Product promotion, Ad-Campaign"}
          />
          <ServiceTemplate
            img={radioImage}
            title="Big FM"
            type="We help our clients to promote their products throught radio media."
            description={"3M Listeners"}
          />
          <ServiceTemplate
            img={radioImage}
            title="Red FM"
            type="We help our clients to promote their products throught radio media."
            description={"4.5M Listeners"}
          />
        </div>
      </div>
    </div>
  )
}

export default RadioService