import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import aajtak from "../../assets/TV/aajtak.jpg";
import colors from "../../assets/TV/colors.jpg";
import suntv from "../../assets/TV/suntv.jpg";
import starplus from "../../assets/TV/starplus.jpg";

function TelevisionService() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Television Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={aajtak}
            title="Big FM"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={colors}
            title="Red FM"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={suntv}
            title="Radio Mirchi"
            type="We help our clients to promote their products throught radio media."
            description={
              "Article writing, Product promotion, Ad-Campaign"
            }
          />
          <ServiceTemplate
            img={starplus}
            title="Radio Mirchi"
            type="We help our clients to promote their products throught radio media."
            description={"Article writing, Product promotion, Ad-Campaign"}
          />
          <ServiceTemplate
            img={colors}
            title="Big FM"
            type="We help our clients to promote their products throught radio media."
            description={"3M Listeners"}
          />
          <ServiceTemplate
            img={aajtak}
            title="Red FM"
            type="We help our clients to promote their products throught radio media."
            description={"Ads, "}
          />
        </div>
      </div>
    </div>
  )
}

export default TelevisionService