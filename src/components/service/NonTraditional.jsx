import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import nonTradImage from "../../assets/NonTradional/Non-traditional-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx'

function NonTraditional() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Non Tradional Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={nonTradImage}
            title="AC Bus Branding"
            type="AC Bus Branding is the best way to advertise your business."
            description={
              "N/A"
            }
          />
          <ServiceTemplate
            img={nonTradImage}
            title="Metroo Branding"
            type="Metroo Branding is the best way to advertise your business."
            description={
              "3M Daily Ridership"
            }
          />
          <ServiceTemplate
            img={nonTradImage}
            title="Auto Branding"
            type="Auto Branding is the best way to advertise your business."
            description={
              "150 Avg Distance/Day"
            }
          />
          <ServiceTemplate
            img={nonTradImage}
            title="Non-AC Bus Branding"
            type="Non-AC Bus Branding is the best way to advertise your business."
            description={
              "N/A"
            }
          />
          <ServiceTemplate
            img={nonTradImage}
            title="Cab Branding"
            type="Cab Branding is the best way to advertise your business."
            description={
              "250 Avg Distance/Day"
            }
          />
          <ServiceTemplate
            img={nonTradImage}
            title="Apartment Branding"
            type="Apartment Branding is the best way to advertise your business."
            description={
              "720 times/Day"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default NonTraditional;