import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import aajtak from "../../assets/TV/aajtak2.jpg";
import colors from "../../assets/TV/colors2.jpg";
import suntv from "../../assets/TV/Sun_TV.png";
import starplus from "../../assets/TV/starplus2.jpg";
import sony from "../../assets/TV/sony2.jpg";
import sonySab from "../../assets/TV/sonysab2.png";

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
            img={sony}
            title="SONY"
            type="We help our clients to promote their products throught radio media."
            description={"115M Viewers"}
          />
          <ServiceTemplate
            img={starplus}
            title="Star Plus"
            type="We help our clients to promote their products throught radio media."
            description={"121.3M Viewers"}
          />
          <ServiceTemplate
            img={suntv}
            title="Sun TV"
            type="We help our clients to promote their products throught radio media."
            description={
              "83.9M Viewers"
            }
          />
          <ServiceTemplate
            img={colors}
            title="Colors TV"
            type="We help our clients to promote their products throught radio media."
            description={
              "138.7M Viewers"
            }
          />
          <ServiceTemplate
            img={sonySab}
            title="SONY SAB"
            type="We help our clients to promote their products throught radio media."
            description={"118.1M Viewers"}
          />
          <ServiceTemplate
            img={aajtak}
            title="Aaj Tak"
            type="We help our clients to promote their products throught radio media."
            description={
              "186.1M Viewers"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TelevisionService