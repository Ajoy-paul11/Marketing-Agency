import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
import outside from "../../assets/Outdoor/outdoor-ad.jpg"
import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import dealImage from "../../assets/Deal/deal-img.jpg"


function Deals() {
  return (
    <div className="w-full">
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Deals services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={dealImage}
            title="Outdoor Billboard"
            type="SEO helped these businesses to reach their targeted customers easily and helped to grab more data."
            description={
              "Google-ad-campaign, Facebook-ad-campaign, Social-Media-campaign"
            }
          />
          <ServiceTemplate
            img={dealImage}
            title="SMM"
            type="SMM helped brands to reach their audiences much faster improved the brand value."
            description={
              "Social-Media-Page handling, Ad-Campaign, Search-Campaign"
            }
          />
          <ServiceTemplate
            img={dealImage}
            title="SEM"
            type="SEM helped business through various search engine to gather more information about the customers"
            description={
              "Search engine is helped to choose the specific words and target those audience easily."
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Deals;