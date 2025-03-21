import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import bigfm from "../../assets/Radio/bigfm2.png";
import redfm from "../../assets/Radio/redfm2.jpg";
import radiomirchi from "../../assets/Radio/radiomirchi2.png";
import radioCity from "../../assets/Radio/radiocity2.jpg";
import air from "../../assets/Radio/all-india-radio-288-x-192.jpg"
import fever from "../../assets/Radio/fever-288-x-192.jpg"
import radio_one from "../../assets/Radio/radio-one-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx';

function RadioService() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Radio Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
        <ServiceTemplate
            img={redfm}
            title="Red FM"
            type="Engage urban youth with vibrant and contemporary programming."
            description={
              "2.7M Listeners"
            }
          />
          <ServiceTemplate
            img={radiomirchi}
            title="Radio Mirchi"
            type="Connect with India's masses through popular music and entertainment."
            description={
              "4.3M Listeners"
            }
          />
          <ServiceTemplate
            img={bigfm}
            title="Big FM"
            type="Reach diverse audiences with a mix of retro and modern content."
            description={
              "2.2M Listeners"
            }
          />
          
          <ServiceTemplate
            img={radioCity}
            title="Radio City"
            type="Target metropolitan listeners with city-centric shows and music."
            description={"1.8M Listeners"}
          />
          
          
          <ServiceTemplate
            img={fever}
            title="Radio Fever"
            type="Appeal to young adults with energetic and trendy broadcasts."
            description={"1.9M Listeners"}
          />
          <ServiceTemplate
            img={radio_one}
            title="Radio One"
            type="Engage upscale urbanites with international music and lifestyle content."
            description={"1M Listeners"}
          />
          <ServiceTemplate
            img={air}
            title="All India Radio"
            type="Access nationwide listeners through India's extensive public broadcaster."
            description={"1.5M Listeners"}
          />
        </div>
      </div>
    </div>
  )
}

export default RadioService