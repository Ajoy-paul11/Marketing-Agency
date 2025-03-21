import React from 'react'
import ServiceTemplate from './ServiceTemplate.jsx';
import economic from "../../assets/Newspaper/economic2.jpg";
import hindu from "../../assets/Newspaper/hindu2.jpg";
import toi from "../../assets/Newspaper/TOI.png";
import hindustan from "../../assets/Newspaper/hindustan2.jpg";
import nbt from "../../assets/Newspaper/nbt2.jpg";
import midDay from "../../assets/Newspaper/midday2.jpg";
import kannada_prabha from "../../assets/Newspaper/kannada-prabha-288-x-192.jpg"
import prajavani from "../../assets/Newspaper/prajavani-288-x-192.jpg"
import udayavani from "../../assets/Newspaper/udayavani-288-x-192.jpg"
import vijaya_karnataka from "../../assets/Newspaper/vijaya-karnataka-288-x-192.jpg"
import ScrollToTop from '../ScrollToTop.jsx';

function NewspaperService() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Newspaper Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={economic}
            title="The Economic Times"
            type="Engage India's business community with targeted financial news ads."
            description={
              "195000"
            }
          />
          <ServiceTemplate
            img={hindu}
            title="The Hindu"
            type="Reach discerning readers seeking in-depth national and international coverage."
            description={
              "121432"
            }
          />
          <ServiceTemplate
            img={toi}
            title="The Times of India"
            type="Connect with a diverse urban audience through India's largest English daily."
            description={
              "750000"
            }
          />
          <ServiceTemplate
            img={hindustan}
            title="Hindustan Times"
            type="Target North India's urban populace with comprehensive news coverage."
            description={"686418"}
          />
          <ServiceTemplate
            img={nbt}
            title="Navbharat Times"
            type="Engage Hindi-speaking readers in metropolitan areas with trusted news content."
            description={"310978"}
          />
          <ServiceTemplate
            img={prajavani}
            title="Prajavani"
            type="Reach Kannada-speaking audiences through Karnataka's leading daily."
            description={"156000"}
          />
          <ServiceTemplate
            img={vijaya_karnataka}
            title="Vijaya Karnataka"
            type="Advertise to a vast readership in Karnataka's prominent Kannada newspaper."
            description={"216000"}
          />
          <ServiceTemplate
            img={udayavani}
            title="Udayavani"
            type="Connect with coastal Karnataka's readers via this widely circulated Kannada daily."
            description={"300000"}
          />
          <ServiceTemplate
            img={midDay}
            title="Mid-Day"
            type="Engage Mumbai's urban audience with this popular afternoon daily."
            description={"300000"}
          />
          <ServiceTemplate
            img={kannada_prabha}
            title="Kannada Prabha"
            type="Target informed Kannada readers with quality journalism and regional news."
            description={"45000"}
          />
        </div>
      </div>
    </div>
  )
}

export default NewspaperService