import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import hyperImage from "../../assets/Hyperlocal/Hyperlocal-288-x-192.jpg"

function Hyperlocal() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Hyperlocal Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 justify-items-center lg:px-16">
          <ServiceTemplate
            img={hyperImage}
            title="Hyperlocal Advertisements"
            type="We provide hyperlocal advertisements to grow your business."
            description={
              "N/A"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Hyperlocal;