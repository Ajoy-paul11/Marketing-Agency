import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import outdoorImage from "../../assets/Outdoor/Outdoor-288-x-192.jpg"
import bus_shelter from "../../assets/Outdoor/bus-shelter-288-x-192.jpg"
import hoarding from "../../assets/Outdoor/hoarding-288-x-192.jpg"

function OutdoorService() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Outdoor Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={outdoorImage}
            title="Outdoor Billboard"
            type="Outdoor billboard is the best way to advertise your business."
            description={
              "N/A"
            }
          />
          <ServiceTemplate
            img={hoarding}
            title="Hoarding"
            type="Hoarding is the best way to advertise your business."
            description={
              "85-90K Unique Reach."
            }
          />
          <ServiceTemplate
            img={bus_shelter}
            title="Bus Shelter"
            type="Bus Shelter is the best way to advertise your business."
            description={
              "90-95K Unique Reach."
            }
          />
        </div>
      </div>
    </div>
  )
}

export default OutdoorService