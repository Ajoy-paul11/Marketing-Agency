import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import influencerService from "../../assets/Influencer/Influencer-288-x-192.jpg"

function Influencer() {
  return (
    <div className="w-full mt-[75px]">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Influencer Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 justify-items-center lg:px-16">
          <ServiceTemplate
            img={influencerService}
            title="Influencer Marketing"
            type="Influencer marketing with large followings to promote services."
            description={
              "Varies by Influencer"
            }
            price={"Based on Influencer"}
          />
        </div>
      </div>
    </div>
  )
}

export default Influencer;