import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import airlineService from "../../assets/Airline/Airline-service-288-x-192.jpg"

function Airline() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Airline/Airport Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-2 justify-items-center place-content-center lg:px-16">
          <ServiceTemplate
            img={airlineService}
            title="Domestic Airlines"
            type="We provide all advertising services for Domestic Airlines to promote their products."
            description={
              "1M Monthly Passengers"
            }
          />
          <ServiceTemplate
            img={airlineService}
            title="Airport Advertising"
            type="We provide all advertising services for Airport Advertising to promote their products."
            
            description={
              "4M Monthly Passengers"
            }
          />
          
        </div>
      </div>
    </div>
  )
}

export default Airline;