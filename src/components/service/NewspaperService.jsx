import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import economic from "../../assets/Newspaper/economic2.jpg";
import hindu from "../../assets/Newspaper/hindu2.jpg";
import toi from "../../assets/Newspaper/TOI.png";
import hindustan from "../../assets/Newspaper/hindustan2.jpg";
import nbt from "../../assets/Newspaper/nbt2.jpg";
import midDay from "../../assets/Newspaper/midday2.jpg";

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
              "195000"
            }
          />
          <ServiceTemplate
            img={hindu}
            title="The Hindu"
            type="We work with The Hindu newspaper to promote brands products, and services."
            description={
              "121432"
            }
          />
          <ServiceTemplate
            img={toi}
            title="The Times of India"
            type="We work with The Times of India newspaper to promote brands products, and services."
            description={
              "750000"
            }
          />
          <ServiceTemplate
            img={hindustan}
            title="Hindustan Times"
            type="We work with The Hindustan Times newspaper to promote brands products, and services."
            description={"686418"}
          />
          <ServiceTemplate
            img={nbt}
            title="Navbharat Times"
            type="We work with The Navbharat Times newspaper to promote brands products, and services"
            description={"310978"}
          />
          <ServiceTemplate
            img={midDay}
            title="Mid-Day"
            type="We work with The Mid-Day newspaper to promote brands products, and services"
            description={"300000"}
          />
        </div>
      </div>
    </div>
  )
}

export default NewspaperService