import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import economic from "../../assets/Newspaper/economic2.jpg";
import hindu from "../../assets/Newspaper/hindu2.jpg";
import toi from "../../assets/Newspaper/TOI.png";
import hindustan from "../../assets/Newspaper/hindustan2.jpg";
import nbt from "../../assets/Newspaper/nbt2.jpg";
import midDay from "../../assets/Newspaper/midday2.jpg";
import kannada_prabha from "../../assets/Newspaper/kannada-prabha-288-x-192.jpg";
import prajavani from "../../assets/Newspaper/prajavani-288-x-192.jpg";
import udayavani from "../../assets/Newspaper/udayavani-288-x-192.jpg";
import vijaya_karnataka from "../../assets/Newspaper/vijaya-karnataka-288-x-192.jpg";
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";

function NewspaperService() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Newspaper Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div onClick={() => navigate("/economictimes-bengalore")}>
            <ServiceTemplate
              img={economic}
              title={"Economic Times, Bangalore"}
              type="Engage India's business community with targeted financial news ads."
              description={"45345"}
              price={"14,860 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-mumbai")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Mumbai"
              type="Connect with a urban audience through India's largest English daily."
              description={"750000"}
              price={"1,01,520 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/hindustantimes-delhi")}>
            <ServiceTemplate
              img={hindustan}
              title="Hindustan Times, Delhi"
              type="Target North India's urban populace with comprehensive news coverage."
              description={"686418"}
              price={"1,06,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-delhi")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Delhi"
              type="Connect with a urban audience through India's largest English daily."
              description={"594773"}
              price={"74,160 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-bangalore")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Bangalore"
              type="Reach discerning readers seeking national and international coverage."
              description={"121432"}
              price={"25,120 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-hyderabad")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Hyderabad"
              type="Connect with a urban audience through India's largest English daily."
              description={"138364"}
              price={"24,300 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-bangalore")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Bengalore"
              type="Connect with a urban audience through India's largest English daily."
              description={"366465"}
              price={"59,040 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/hindustantimes-mumbai")}>
            <ServiceTemplate
              img={hindustan}
              title="Hindustan Times, Mumbai"
              type="Target North India's urban populace with comprehensive news coverage."
              description={"625000"}
              price={"59,400 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/navbharat-delhi")}>
            <ServiceTemplate
              img={nbt}
              title="Navbharat Times, Delhi"
              type="Engage Hindi-speaking readers in city areas with trusted news content."
              description={"310978"}
              price={"35,100 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/economictimes-mumbai")}>
            <ServiceTemplate
              img={economic}
              title={"Economic Times, Mumbai"}
              type="Engage India's business community with targeted financial news ads."
              description={"195000"}
              price={"51,200 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/economictimes-delhi")}>
            <ServiceTemplate
              img={economic}
              title={"Economic Times, Delhi"}
              type="Engage India's business community with targeted financial news ads."
              description={"86621"}
              price={"46,900 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-delhi")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Delhi"
              type="Reach discerning readers seeking national and international coverage."
              description={"104720"}
              price={"13,780 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-pune")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Pune"
              type="Connect with a urban audience through India's largest English daily."
              description={"123561"}
              price={"43,660 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-chennai")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Chennai"
              type="Reach discerning readers seeking national and international coverage."
              description={"197688"}
              price={"1,02,880 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/prajavani-bangalore")}>
            <ServiceTemplate
              img={prajavani}
              title="Prajavani, Bangalore"
              type="Reach Kannada-speaking audiences through Karnataka's leading daily."
              description={"156000"}
              price={"23,400 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/vijayakarnataka-bangalore")}>
            <ServiceTemplate
              img={vijaya_karnataka}
              title="Vijaya Karnataka, Bangalore"
              type="Focus a vast readership in Karnataka's prominent newspaper."
              description={"4,91,200"}
              price={"61,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/udayavani-bangalore")}>
            <ServiceTemplate
              img={udayavani}
              title="Udayavani, Bangalore"
              type="Connect with coastal Karnataka's readers via circulated Kannada daily."
              description={"300000"}
              price={"17,600 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/kannadaprabha-bangalore")}>
            <ServiceTemplate
              img={kannada_prabha}
              title="Kannada Prabha, Bangalore"
              type="Target Kannada readers with top journalism and regional news."
              description={"45000"}
              price={"11,880 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/midday-mumbai")}>
            <ServiceTemplate
              img={midDay}
              title="Mid-Day, Mumbai"
              type="Engage Mumbai's urban audience with this popular afternoon daily."
              description={"300000"}
              price={"39,422 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-noida")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Noida"
              type="Connect with a urban audience through India's largest English daily."
              description={"17049"}
              price={"6,660 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/navbharat-mumbai")}>
            <ServiceTemplate
              img={nbt}
              title="Navbharat Times, Mumbai"
              type="Engage Hindi-speaking readers in city areas with trusted news content."
              description={"47380"}
              price={"19,960 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-chennai")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Chennai"
              type="Connect with a urban audience through India's largest English daily."
              description={"1,91,000"}
              price={"71,460 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-kolkata")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Kolkata"
              type="Connect with a urban audience through India's largest English daily."
              description={"173265"}
              price={"33,040 Min Spend"}
            />
          </div>

          <div onClick={() => navigate("/economicstimes-chennai")}>
            <ServiceTemplate
              img={economic}
              title="Economic Times, Chennai"
              type="Connect with a urban audience through India's largest English daily."
              description={"20600"}
              price={"14,140 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/timesofindia-ahmedabad")}>
            <ServiceTemplate
              img={toi}
              title="Times of India, Ahmedabad"
              type="Connect with a urban audience through India's largest English daily."
              description={"123956"}
              price={"13,320 Min Spend"}
            />
          </div>

          <div onClick={() => navigate("/economicstimes-kolkata")}>
            <ServiceTemplate
              img={economic}
              title="Economic Times, Kolkata"
              type="Connect with a urban audience through India's largest English daily."
              description={"22671"}
              price={"12,880 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/economicstimes-hyderabad")}>
            <ServiceTemplate
              img={economic}
              title="Economic Times, Hyderabad"
              type="Connect with a urban audience through India's largest English daily."
              description={"15879"}
              price={"8,200 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/economicstimes-pune")}>
            <ServiceTemplate
              img={economic}
              title="Economic Times, Pune"
              type="Connect with a urban audience through India's largest English daily."
              description={"20255"}
              price={"6,760 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-coimbatore")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Coimbatore"
              type="Reach discerning readers seeking national and international coverage."
              description={"77295"}
              price={"19,000 Min Spend"}
            />
          </div>

          <div onClick={() => navigate("/thehindu-mumbai")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Mumbai"
              type="Reach discerning readers seeking national and international coverage."
              description={"37091"}
              price={"8,740 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-hyderabad")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Hyderabad"
              type="Reach discerning readers seeking national and international coverage."
              description={"135707"}
              price={"20,620 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/economicstimes-kochi")}>
            <ServiceTemplate
              img={economic}
              title="Economic Times, Kochi"
              type="Connect with a urban audience through India's largest English daily."
              description={"5485"}
              price={"1,560 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-mangaluru")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Mangaluru"
              type="Reach discerning readers seeking national and international coverage."
              description={"12634"}
              price={"2,400 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/thehindu-madurai")}>
            <ServiceTemplate
              img={hindu}
              title="The Hindu, Mangaluru"
              type="Reach discerning readers seeking national and international coverage."
              description="50,567"
              price={"8,760"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewspaperService;
