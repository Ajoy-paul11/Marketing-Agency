import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import forbes from "../../assets/Magazine/forbes2.png";
import business from "../../assets/Magazine/business2.png";
import fortune from "../../assets/Magazine/fortune2.jpg";
import femina from "../../assets/Magazine/femina2.png";
import vogue from "../../assets/Magazine/vogue2.jpg";
import travel from "../../assets/Magazine/travel2.jpg";
import grihshobha from "../../assets/Magazine/grihshobha-288-x-192.jpg";
import indiatoday from "../../assets/Magazine/india-today-288-x-192.jpg";
import outlook from "../../assets/Magazine/out-look-288-x-192.jpg";
import sudha from "../../assets/Magazine/sudha-288-x-192.jpg";
import taranga from "../../assets/Magazine/taranga-288-x-192.jpg";
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";
import useStore from "../../store.js";

function MagazineService() {
  const navigate = useNavigate();
  const setMinSpend = useStore((state) => state.setMinSpend);

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Magazine Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div
            onClick={() => {
              setMinSpend(281750);
              navigate("/indiatoday-pricing");
            }}
          >
            <ServiceTemplate
              img={indiatoday}
              title="India Today"
              type="Reach India's informed readers through impactful advertising."
              description={"550000"}
              price={"2,81,750 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(330000);
              navigate("/forbes-pricing");
            }}
          >
            <ServiceTemplate
              img={forbes}
              title="Forbes India"
              type="Target business leaders with strategic ad placements."
              description={"75000"}
              price={"3,30,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(175950);
              navigate("/businesstoday-pricing");
            }}
          >
            <ServiceTemplate
              img={business}
              title="Business Today"
              type="Engage professionals via authoritative business content."
              description={"195000"}
              price={"1,75,950 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(200000);
              navigate("/fortuneindia-pricing");
            }}
          >
            <ServiceTemplate
              img={fortune}
              title="Fortune"
              type="Connect with global influencers through premium advertising."
              description={"80000"}
              price={" 2,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(156188);
              navigate("/femina-pricing");
            }}
          >
            <ServiceTemplate
              img={femina}
              title="Femina"
              type="Influence modern women with compelling ad narratives."
              description={"178000"}
              price={"1,56,188 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(253000);
              navigate("/vogue-pricing");
            }}
          >
            <ServiceTemplate
              img={vogue}
              title="Vogue"
              type="Showcase luxury brands to fashion-forward audiences."
              description={"73500"}
              price={"2,53,000"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(148000);
              navigate("/travelleisure-pricing");
            }}
          >
            <ServiceTemplate
              img={travel}
              title="Travel + Leisure"
              type=" Inspire affluent travelers with captivating promotions."
              description={"148000"}
              price={"1,48,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(46750);
              navigate("/grihshobha-pricing");
            }}
          >
            <ServiceTemplate
              img={grihshobha}
              title="Grihshobha"
              type="Engage homemakers through culturally resonant advertising."
              description={"450000"}
              price={"46,750 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(325763);
              navigate("/outlook-pricing");
            }}
          >
            <ServiceTemplate
              img={outlook}
              title="Outlook"
              type="Reach discerning readers with insightful business ads."
              description={"170000"}
              price={"3,25,763 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(72600);
              navigate("/sudha-pricing");
            }}
          >
            <ServiceTemplate
              img={sudha}
              title="Sudha"
              type="Connect with Kannada readers through engaging advertisements."
              description={"98500"}
              price={"72,600 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(60500);
              navigate("/taranga-pricing");
            }}
          >
            <ServiceTemplate
              img={taranga}
              title="Taranga"
              type="Reach Kannada-speaking audiences with tailored advertising."
              description={"85000"}
              price={"60,500 Min Spend"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagazineService;
