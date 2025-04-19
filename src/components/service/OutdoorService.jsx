import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import outdoorImage from "../../assets/Outdoor/Outdoor-288-x-192.jpg";
import bus_shelter from "../../assets/Outdoor/bus-shelter-288-x-192.jpg";
import hoarding from "../../assets/Outdoor/hoarding-288-x-192.jpg";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";
import useStore from "../../store.js";

function OutdoorService() {
  const navigate = useNavigate();
  const setMinSpend = useStore((state) => state.setMinSpend);

  return (
    <div className="w-full mt-[75px]">
      <Category />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Outdoor Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div onClick={() => {
            setMinSpend(0);
            navigate("/outdoorbillboard-pricing");
            }}>
            <ServiceTemplate
              img={outdoorImage}
              title="Outdoor Billboard"
              type="Capture high-traffic attention with prominent, large-scale displays."
              description={"N/A"}
              price={"Location Based"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(0);
            navigate("/hoarding-pricing");
            }}>
            <ServiceTemplate
              img={hoarding}
              title="Hoarding"
              type="Dominate urban landscapes with eye-catching advertisements."
              description={"85-90K Unique Reach."}
              price={"Location Based"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(0);
            navigate("/busshelter-pricing");
            }}>
            <ServiceTemplate
              img={bus_shelter}
              title="Bus Shelter"
              type="Engage commuters effectively with strategically placed transit ads."
              description={"90-95K Unique Reach."}
              price={"Location Based"}
            />
          </div>
          <div onClick={() => {
            setMinSpend(0);
            navigate("/skywalk-pricing");
          }}>
            <ServiceTemplate
              img={outdoorImage}
              title="Skywalk"
              type="Promote your brand on Skywalkers, reaching urban commuters."
              description={"N/A"}
              price={"Location Based"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutdoorService;
