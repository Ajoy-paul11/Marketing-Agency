import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import outdoorImage from "../../assets/Outdoor/Outdoor-288-x-192.jpg";
import bus_shelter from "../../assets/Outdoor/bus-shelter-288-x-192.jpg";
import hoarding from "../../assets/Outdoor/hoarding-288-x-192.jpg";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";

function OutdoorService() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[75px]">
      <Category />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Outdoor Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div onClick={() => navigate("/outdoorbillboard-pricing")}>
            <ServiceTemplate
              img={outdoorImage}
              title="Outdoor Billboard"
              type="Capture high-traffic attention with prominent, large-scale displays."
              description={"N/A"}
              price={"Location Based"}
            />
          </div>
          <div onClick={() => navigate("/hoarding-pricing")}>
            <ServiceTemplate
              img={hoarding}
              title="Hoarding"
              type="Dominate urban landscapes with eye-catching advertisements."
              description={"85-90K Unique Reach."}
              price={"Location Based"}
            />
          </div>
          <div onClick={() => navigate("/busshelter-pricing")}>
            <ServiceTemplate
              img={bus_shelter}
              title="Bus Shelter"
              type="Engage commuters effectively with strategically placed transit ads."
              description={"90-95K Unique Reach."}
              price={"Location Based"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutdoorService;
