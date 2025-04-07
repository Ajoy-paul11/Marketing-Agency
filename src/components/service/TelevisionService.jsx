import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import aajtak from "../../assets/TV/aajtak2.jpg";
import colors from "../../assets/TV/colors2.jpg";
import suntv from "../../assets/TV/Sun_TV.png";
import starplus from "../../assets/TV/starplus2.jpg";
import sony from "../../assets/TV/sony2.jpg";
import sonySab from "../../assets/TV/sonysab2.png";
import newsfirst from "../../assets/TV/newsfirst-288-x-192.jpg";
import power_tv from "../../assets/TV/power-tv-288-x-192.jpg";
import tv9kannada from "../../assets/TV/tv-9kannada288-x-192.jpg";
import zee_kannada from "../../assets/TV/zee-kannada-288-x-192.jpg";
import public_tv from "../../assets/TV/Public_TV_Kannada-288-x-192.jpg";
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";
import useStore from "../../store.js";

function TelevisionService() {
  const navigate = useNavigate();
  const setMinSpend = useStore((state) => state.setMinSpend);

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Television Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div
            onClick={() => {
              setMinSpend(1000000);
              navigate("/sonytv-pricing");
            }}
          >
            <ServiceTemplate
              img={sony}
              title="SONY"
              type="Engage viewrs with dramas, reality shows, and entertainment content."
              description={"116M Viewers"}
              price={"10,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(500000);
              navigate("/starplus-pricing");
            }}
          >
            <ServiceTemplate
              img={starplus}
              title="Star Plus"
              type="Reach urban families through popular Hindi serials and reality programs."
              description={"115M Viewers"}
              price={"5,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(500000);
              navigate("/suntv-pricing");
            }}
          >
            <ServiceTemplate
              img={suntv}
              title="Sun TV"
              type="Connect with Tamil-speaking viewers via leading entertainment and news."
              description={"79M Viewers"}
              price={"5,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(500000);
              navigate("/colorstv-pricing");
            }}
          >
            <ServiceTemplate
              img={colors}
              title="Colors TV"
              type="Target Hindi-speaking viewers with a variety of dramas and reality shows."
              description={"119M Viewers"}
              price={"5,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(500000);
              navigate("/sonysab-pricing");
            }}
          >
            <ServiceTemplate
              img={sonySab}
              title="SONY SAB"
              type="Appeal to comedy lovers with light-hearted, family-friendly program."
              description={"115.5M Viewers"}
              price={"5,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(18000);
              navigate("/aajtak-pricing");
            }}
          >
            <ServiceTemplate
              img={aajtak}
              title="Aaj Tak"
              type="Reach informed Hindi-speaking viewers with 24/7 news coverage."
              description={"178M Viewers"}
              price={"18,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(17500);
              navigate("/tv9kannada-pricing");
            }}
          >
            <ServiceTemplate
              img={tv9kannada}
              title="TV9 Kannada"
              type="Engage Kannada-speaking viewers with news and entertainment."
              description={"48.9M Viewers"}
              price={"17,500 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(500000);
              navigate("/zeekannada-pricing");
            }}
          >
            <ServiceTemplate
              img={zee_kannada}
              title="Zee Kannada"
              type="Advertise through popular Kannada serials and reality shows."
              description={"46M Viewers"}
              price={"5,00,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(8625);
              navigate("/newsfirst-pricing");
            }}
          >
            <ServiceTemplate
              img={newsfirst}
              title="News 1st Kannada"
              type="Connect with viewers seeking timely Kannada news updates."
              description={"39.4M Viewers"}
              price={"8,625 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(11000);
              navigate("/publictv-pricing");
            }}
          >
            <ServiceTemplate
              img={public_tv}
              title="Public TV"
              type="Reach Kannada viewers through comprehensive news coverage."
              description={"39.2M Viewers"}
              price={"11,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(2500);
              navigate("/powertv-pricing");
            }}
          >
            <ServiceTemplate
              img={power_tv}
              title="Power TV"
              type="Target regional audiences with a mix of news and entertainment content."
              description={"31M Viewers"}
              price={"2,500 Min Spend"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelevisionService;
