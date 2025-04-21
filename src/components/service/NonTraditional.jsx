import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx'
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import nonTradImage from "../../assets/NonTradional/Non-traditional-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx'
import Category from '../Category.jsx'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store.js'

function NonTraditional() {
  const navigate = useNavigate();
  const setMinSpend = useStore((state) => state.setMinSpend);

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Non Tradional Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div onClick={() => {
            setMinSpend(294000);
            navigate("/acbus-pricing")}}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/AC-bus-branding-288-x-192.jpg?updatedAt=1745236580312"
            title="AC Bus Branding"
            type="Promote your brand on AC buses, reaching urban commuters."
            description={
              "400 Estimated Fleets"
            }
            price={"2,94,000 Min Spend"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(115000);
            navigate("/metrobranding-pricing");
            }}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/metro-branding-288-x-192.jpg?updatedAt=1745237096489"
            title="Metro Branding"
            type="Enhance brand visibility by advertising in metro stations, trains."
            description={
              "800K Daily Ridership"
            }
            price={"1,15,000 Min Spend"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(9900);
            navigate("/auto-pricing");
            }}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/auto-branding-288-x-192.jpg?updatedAt=1745236695330"
            title="Auto Branding"
            type="Utilize auto-rickshaws to penetrate densely populated areas effectively."
            description={
              "150 Avg Distance/Day"
            }
            price={"9,900 Min Spend"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(86900);
            navigate("/nonacbus-pricing");
            }}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/nonAC-bus-288-x-192.jpg?updatedAt=1745236402148"
            title="Non-AC Bus Branding"
            type="Expand reach via advertisements to broad passenger base."
            description={
              "6.2K Estimated Fleets"
            }
            price={"86,900 Min Spend"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(132000);
            navigate("/cab-pricing");
            }}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/cab-branding-288-x-192.jpg?updatedAt=1745236620057"
            title="Cab Branding"
            type="Leverage taxis, ensuring brand presence across city landscapes."
            description={
              "250 Avg Distance/Day"
            }
            price={"1,32,000 Min Spend"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(0);
            navigate("/apartment-pricing")}}>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/apratment-branding-288-x-192.jpg?updatedAt=1745236355110"
            title="Apartment Branding"
            type="Target residential complexes by placing advertisements."
            description={
              "720 times/Day"
            }
            price={"On Request"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(0);
            navigate("/garudamall-pricing")}
            }>
          <ServiceTemplate
            img="https://ik.imagekit.io/ajoy/NonTraditional/garuda-mall-288-x-192.jpg?updatedAt=1745237395471"
            title="Garuda Mall, Bangalore"
            type=" Target residential complexes by placing advertisements."
            description={
              "30K Avg Footfall, Weekly"
            }
            price={"1,25,000 Min Spend"}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default NonTraditional;