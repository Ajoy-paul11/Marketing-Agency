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
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={hyperImage}
            title="Outdoor Billboard"
            type="SEO helped these businesses to reach their targeted customers easily and helped to grab more data."
            description={
              "Google-ad-campaign, Facebook-ad-campaign, Social-Media-campaign"
            }
          />
          <ServiceTemplate
            img={hyperImage}
            title="SMM"
            type="SMM helped brands to reach their audiences much faster improved the brand value."
            description={
              "Social-Media-Page handling, Ad-Campaign, Search-Campaign"
            }
          />
          <ServiceTemplate
            img={hyperImage}
            title="SEM"
            type="SEM helped business through various search engine to gather more information about the customers"
            description={
              "Search engine is helped to choose the specific words and target those audience easily."
            }
          />
          {/* <ServiceTemplate
            img={hyperImage}
            title="Big FM, Delhi"
            type="Hindi"
            description={"2.5M Listeners"}
          />
          <ServiceTemplate
            img={hyperImage}
            title="Red FM, Mumbai"
            type="Hindi & Marathi"
            description={"3M Listeners"}
          />
          <ServiceTemplate
            img={hyperImage}
            title="Radio Mirchi, Delhi"
            type="Hindi"
            description={"4.5M Listeners"}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Hyperlocal;