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
          <div onClick={() => navigate("/cinepoliskrishnarajapura-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="Cinepolis Nexus Shantiniketan, Screen-1, Krishnarajapura"
              type=""
              description={"No of Seats: 108"}
              price={"1,900 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/cinepolismaruthi-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="Cinepolis Orien East Mall, Screen-1, Maruthi Sevanagar"
              type=""
              description={"No of Seats: 247"}
              price={"3,640 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxnagavara-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Elements Mall, Screen-7, Nagavara"
              type=""
              description={"No of Seats: 114"}
              price={"5,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxneighbourhoodmall-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Forum Neighbourhood Mall, Screen-4, Krishnarajapura"
              type=""
              description={"No of Seats: 51"}
              price={"3,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxgarudamall-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Garuda Mall, Screen-2, Ashok Nagar"
              type=""
              description={"No of Seats: 66"}
              price={"4,280 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxvaishnavi-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Vaishnavi Sapphire Mall, Screen-5, Yeswanthapur"
              type=""
              description={"No of Seats: 179"}
              price={"6,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxphoenix4-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Phoenix Market City Mall, Screen-4, Krishnarajapura"
              type=""
              description={"No of Seats: 128"}
              price={"12,110 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxrajajinagar-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Orion Mall, Screen-7, Rajajinagar"
              type=""
              description={"No of Seats: 387"}
              price={"1,430 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxkoramangala7-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Forum Mall, Screen-7, Koramangala"
              type=""
              description={"No of Seats: 253"}
              price={"5,420 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/hulimavucinepolis6-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="Cinepolis Royal Meenakshi Mall, Screen-6, Hulimavu"
              type=""
              description={"No of Seats: 302"}
              price={"6,400 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxkoramangala6-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Forum Mall, Screen-6, Koramangala"
              type=""
              description={"No of Seats: 168"}
              price={"5,420 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/hulimavucinepolis2-pricing")}>
            <ServiceTemplate
              img={cinemaImage}
              title="Cinepolis Royal Meenakshi Mall, Screen-2, Hulimavu"
              type=""
              description={"No of Seats: 129"}
              price={"3,150 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/swagathmall-pricing")}>
          <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Shree Garuda Swagath Mall, Screen-3, Jayanagar"
              type=""
              description={"No of Seats: 312"}
              price={"5,700 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/mahadevapura-pricing")}>
          <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX VR Mall, Screen-5, Mahadevapura"
              type=""
              description={"No of Seats: 255"}
              price={"1,430 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/inoxforumneighbourhood2-pricing")}>
          <ServiceTemplate
              img={cinemaImage}
              title="PVR INOX Forum Neighbourhood Mall, Screen-2, Whitefield"
              type=""
              description={"No of Seats: 198"}
              price={"5,770 Min Spend"}
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
