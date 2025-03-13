import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import aajtak from "../../assets/TV/aajtak2.jpg";
import colors from "../../assets/TV/colors2.jpg";
import suntv from "../../assets/TV/Sun_TV.png";
import starplus from "../../assets/TV/starplus2.jpg";
import sony from "../../assets/TV/sony2.jpg";
import sonySab from "../../assets/TV/sonysab2.png";
import newsfirst from "../../assets/TV/newsfirst-288-x-192.jpg"
import power_tv from "../../assets/TV/power-tv-288-x-192.jpg"
import tv9kannada from "../../assets/TV/tv-9kannada288-x-192.jpg"
import zee_kannada from "../../assets/TV/zee-kannada-288-x-192.jpg"
import public_tv from "../../assets/TV/Public_TV_Kannada-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx';

function TelevisionService() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Television Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
        <ServiceTemplate
            img={sony}
            title="SONY"
            type="We help our clients to promote their products throught television media."
            description={"115M Viewers"}
          />
          <ServiceTemplate
            img={starplus}
            title="Star Plus"
            type="We help our clients to promote their products throught television media."
            description={"121.3M Viewers"}
          />
          <ServiceTemplate
            img={suntv}
            title="Sun TV"
            type="We help our clients to promote their products throught television media."
            description={
              "83.9M Viewers"
            }
          />
          <ServiceTemplate
            img={colors}
            title="Colors TV"
            type="We help our clients to promote their products throught television media."
            description={
              "138.7M Viewers"
            }
          />
          <ServiceTemplate
            img={sonySab}
            title="SONY SAB"
            type="We help our clients to promote their products throught television media."
            description={"118.1M Viewers"}
          />
          <ServiceTemplate
            img={aajtak}
            title="Aaj Tak"
            type="We help our clients to promote their products throught television media."
            description={
              "186.1M Viewers"
            }
          />
          <ServiceTemplate
            img={tv9kannada}
            title="TV9 Kannada"
            type="We help our clients to promote their products throught television media."
            description={
              "56.1M Viewers"
            }
          />
          <ServiceTemplate
            img={zee_kannada}
            title="Zee Kannada"
            type="We help our clients to promote their products throught television media."
            description={
              "46.8M Viewers"
            }
          />
          <ServiceTemplate
            img={newsfirst}
            title="News 1st Kannada"
            type="We help our clients to promote their products throught television media."
            description={
              "44.6M Viewers"
            }
          />
          <ServiceTemplate
            img={power_tv}
            title="Power TV"
            type="We help our clients to promote their products throught television media."
            description={
              "36.5M Viewers"
            }
          />
          <ServiceTemplate
          img={public_tv}
          title="Public TV"
          type="We help our clients to promote their products throught television media."
          description={
            "39.2M Viewers"
          }
          />
        </div>
      </div>
    </div>
  )
}

export default TelevisionService