import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
// import billboard from "../../assets/Outdoor/outdoor-billboard.jpg"
// import outdoor from "../../assets/Outdoor/outdoor-image.jpg"
// import outside from "../../assets/Outdoor/outdoor-ad.jpg"
// import outdooradvertise from "../../assets/Outdoor/outdoor-advertising.jpg"
import cinemaImage from "../../assets/Cinema/Cinema-288-x-192.jpg";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";

function Cinema() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[75px]">
      <Category />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Cinema Services:
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-items-center lg:px-16">
          <div onClick={() => navigate("/inoxkoramangala-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Forum Mall, Screen-1, Koramangala"
              type=""
              description={"No of Seats: 347"}
              price={"12,830 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxashoknagar-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Garuda Mall, Screen-3, Ashok Nagar"
              type=""
              description={"No of Seats: 175"}
              price={"7,130 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxkrishnarajapura-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Phoenix Market City Mall, Screen-6, Krishnarajapura"
              type=""
              description={"No of Seats: 207"}
              price={"9,260 Min Spend"}
            />
          </div>
          <ServiceTemplate
            img={cinemaImage}
            title="Cinema"
            type="Engage audiences with impactful ads, capturing their attention."
            description={"No of Average Seats: 200"}
            price={"Based on Theater"}
          />
        </div>
      </div>
    </div>
  );
}

export default Cinema;
