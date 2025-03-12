import React from 'react'
import ServiceTemplate from "./ServiceTemplate.jsx";
import forbes from "../../assets/Magazine/forbes2.png";
import business from "../../assets/Magazine/business2.png";
import fortune from "../../assets/Magazine/fortune2.jpg";
import femina from "../../assets/Magazine/femina2.png";
import vogue from "../../assets/Magazine/vogue2.jpg";
import travel from "../../assets/Magazine/travel2.jpg";
import grihshobha from "../../assets/Magazine/grihshobha-288-x-192.jpg"
import indiatoday from "../../assets/Magazine/india-today-288-x-192.jpg"
import outlook from "../../assets/Magazine/out-look-288-x-192.jpg"
import sudha from "../../assets/Magazine/sudha-288-x-192.jpg"
import taranga from "../../assets/Magazine/taranga-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx';



function MagazineService() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Magazine Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
        <ServiceTemplate
            img={indiatoday}
            title="India Today"
            type="We provide the advertising services for Fortune to promote their products."
            description={"550000"}
          />
          <ServiceTemplate
            img={forbes}
            title="Forbes India"
            type="We provide the advertising services for Forbes India to promote their products."
            description={
              "75000"
            }
          />
          <ServiceTemplate
            img={business}
            title="Business Today"
            type="We provide the advertising services for Business Today to promote their products."
            description={
              "195000"
            }
          />
          <ServiceTemplate
            img={fortune}
            title="Fortune"
            type="We provide the advertising services for Fortune to promote their products."
            description={
              "80000"
            }
          />
          <ServiceTemplate
            img={femina}
            title="Femina"
            type="We provide the advertising services for Fortune to promote their products."
            description={"178000"}
          />
          <ServiceTemplate
            img={vogue}
            title="Vogue"
            type="We provide the advertising services for Fortune to promote their products."
            description={"73500"}
          />
          <ServiceTemplate
            img={travel}
            title="Travel + Leisure"
            type="We provide the advertising services for Fortune to promote their products."
            description={"148000"}
          />
          
          <ServiceTemplate
            img={grihshobha}
            title="Grihshobha"
            type="We provide the advertising services for Fortune to promote their products."
            description={"450000"}
          />
          <ServiceTemplate
            img={outlook}
            title="Outlook Business"
            type="We provide the advertising services for Fortune to promote their products."
            description={"170000"}
          />
          <ServiceTemplate
            img={sudha}
            title="Sudha"
            type="We provide the advertising services for Fortune to promote their products."
            description={"97000"}
          />
          <ServiceTemplate
            img={taranga}
            title="Taranga"
            type="We provide the advertising services for Fortune to promote their products."
            description={"90000"}
          />
        </div>
      </div>
    </div>
  )
}

export default MagazineService;