import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import bigfm from "../../assets/Radio/bigfm2.png";
import redfm from "../../assets/Radio/redfm2.jpg";
import radiomirchi from "../../assets/Radio/radiomirchi2.png";
import radioCity from "../../assets/Radio/radiocity2.jpg";
import air from "../../assets/Radio/all-india-radio-288-x-192.jpg";
import fever from "../../assets/Radio/fever-288-x-192.jpg";
import radio_one from "../../assets/Radio/radio-one-288-x-192.jpg";
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";
import useStore from "../../store.js";

function RadioService() {
  const navigate = useNavigate();
  const setMinSpend = useStore((state) => state.setMinSpend);

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      {/* container mx-auto */}
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Radio Services:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div
            onClick={() => {
              setMinSpend(15120);
              navigate("/redfm-bengaluru");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title="Red FM, Bengaluru"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"1.3M Listeners"}
              price={"15,120 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(14400);
              navigate("/radiomirchi-bengaluru");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title="Radio Mirchi, Bengaluru"
              type="Connect with India's masses through popular music and entertainment."
              description={"1.8M Listeners"}
              price={"14,400 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10000);
              navigate("/redfm-delhi");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title="Red FM, Delhi"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"2.7M Listeners"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10000);
              navigate("/radiomirchi-delhi");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title="Radio Mirchi, Delhi"
              type="Connect with India's masses through popular music and entertainment."
              description={"4.3M Listeners"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(30240);
              navigate("/redfm-mumbai");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title="Red FM, Mumbai"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"2.9M Listeners"}
              price={"30,240 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(30960);
              navigate("/radiomirchi-mumbai");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title="Radio Mirchi, Mumbai"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"3.3M Listeners"}
              price={"30,960 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(14400);
              navigate("/redfm-hyderabad");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title="Red FM, Hyderabad"
              type="Connect with India's masses through popular music and entertainment."
              description={"682K Listeners"}
              price={"14,400 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(13680);
              navigate("/bigfm-bengaluru");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title="Big FM, Bengaluru"
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"2.4M Listeners"}
              price={"13,680 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10000);
              navigate("/bigfm-delhi");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title="Big FM, Delhi"
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"2.2M Listeners"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(15480);
              navigate("/radiocity-bengaluru");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title="Radio City, Bengaluru"
              type="Target metropolitan listeners with city-centric shows and music."
              description={"1.7M Listeners"}
              price={"15,480 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(26640);
              navigate("/radiocity-delhi");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title="Radio City, Delhi"
              type="Target metropolitan listeners with city-centric shows and music."
              description={"1.8M Listeners"}
              price={"26,640 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(14400);
              navigate("/radiomirchi-hyderabad");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title="Radio Mirchi, Hyderabad"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"761K Listeners"}
              price={"14,400 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(11520);
              navigate("/radiocity-hyderabad");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title="Radio City, Hyderabad"
              type="Target metropolitan listeners with city-centric shows and music."
              description={"432K Listeners"}
              price={"11,520 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(11520);
              navigate("/radiofever-bengaluru");
            }}
          >
            <ServiceTemplate
              img={fever}
              title="Radio Fever, Bengaluru"
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"1.1M Listeners"}
              price={"11,520 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(20880);
              navigate("/radiofever-delhi");
            }}
          >
            <ServiceTemplate
              img={fever}
              title="Radio Fever, Delhi"
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"1.9M Listeners"}
              price={"20,880 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(9630);
              navigate("/radioone-bengaluru");
            }}
          >
            <ServiceTemplate
              img={radio_one}
              title="Radio One, Bengaluru"
              type="Engage urbanites with international music and lifestyle content."
              description={"1M Listeners"}
              price={"9,630 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10080);
              navigate("/redfm-pune");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title="Red FM, Pune"
              type="Engage urban youth with vibrant and contemporary programming."
              description={"1.2M Listeners"}
              price={"10,080 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10080);
              navigate("/bigfm-hyderabad");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title={"Big FM, Hyderabad"}
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"511K Listeners"}
              price={"10,080 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10080);
              navigate("/radiomirchi-pune");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title={"Radio Mirchi, Pune"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"1.6M Listeners"}
              price={"10,080 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(21960);
              navigate("/bigfm-mumbai");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title={"Big FM, Mumbai"}
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"2.6M Listeners"}
              price={"21,960 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(8280);
              navigate("/radiofever-hyderabad");
            }}
          >
            <ServiceTemplate
              img={fever}
              title={"Radio Fever, Hyderabad"}
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"268K Listeners"}
              price={"8,280 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(6840);
              navigate("/radiocity-pune");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title={"Radio City, Pune"}
              type="Target metropolitan listeners with city-centric shows and music."
              description={"1.1M Listeners"}
              price={"6,840 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(15840);
              navigate("/radioone-mumbai");
            }}
          >
            <ServiceTemplate
              img={radio_one}
              title={"Radio One, Mumbai"}
              type="Engage urbanites with international music and lifestyle content."
              description={"1.8M Listeners"}
              price={"15,840 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(12600);
              navigate("/radiomirchi-kolkata");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title={"Radio Mirchi, Kolkata"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"959K Listeners"}
              price={"12,600 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(13320);
              navigate("/radiomirchi-chennai");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title={"Radio Mirchi, Chennai"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"945K Listeners"}
              price={"13,320 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(28440);
              navigate("/radiocity-mumbai");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title={"Radio City, Mumbai"}
              type="Target metropolitan listeners with city-centric shows and music."
              description={"2.5M Listeners"}
              price={"28,440 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10080);
              navigate("/bigfm-chennai");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title={"Big FM, Chennai"}
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"601K Listeners"}
              price={"10,080 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(7560);
              navigate("/radiomirchi-ahmedabad");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title={"Radio Mirchi, Ahmedabad"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"761K Listeners"}
              price={"7,560 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(5400);
              navigate("/radiofever-pune");
            }}
          >
            <ServiceTemplate
              img={fever}
              title={"Radio Fever, Pune"}
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"647K Listeners"}
              price={"5,400 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(12600);
              navigate("/redfm-kolkata");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Kolkata"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"647K Listeners"}
              price={"12,600 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(9360);
              navigate("/bigfm-kolkata");
            }}
          >
            <ServiceTemplate
              img={bigfm}
              title={"Big FM, Kolkata"}
              type="Reach diverse audiences with a mix of retro and modern content."
              description={"597K Listeners"}
              price={"9,360 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(8280);
              navigate("/redfm-indore");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Indore"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"848K Listeners"}
              price={"8,280 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(7560);
              navigate("/redfm-ahamedabad");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Ahmedabad"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"348K Listeners"}
              price={"7,560 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(8280);
              navigate("/redfm-kochi");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Kochi"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"440K Listeners"}
              price={"8,280 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(3240);
              navigate("/radiocity-coimbatore");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title={"Radio City, Coimbatore"}
              type="Target metropolitan listeners with city-centric shows and music."
              description={"191K Listeners"}
              price={"3,240 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(10440);
              navigate("/radiocity-chennai");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title={"Radio City, Chennai"}
              type="Target metropolitan listeners with city-centric shows and music."
              description={"670K Listeners"}
              price={"10,440 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(7560);
              navigate("/radiocity-ahmedabad");
            }}
          >
            <ServiceTemplate
              img={radioCity}
              title={"Radio City, Ahmedabad"}
              type="Target metropolitan listeners with city-centric shows and music."
              description={"303K Listeners"}
              price={"7,560 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(24840);
              navigate("/radiofever-mumbai");
            }}
          >
            <ServiceTemplate
              img={fever}
              title={"Radio Fever, Mumbai"}
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"2.3M Listeners"}
              price={"24,840 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(19800);
              navigate("/radioone-delhi");
            }}
          >
            <ServiceTemplate
              img={radio_one}
              title={"Radio One, Delhi"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"1M Listeners"}
              price={"19,800 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(3960);
              navigate("/radiofever-kolkata");
            }}
          >
            <ServiceTemplate
              img={fever}
              title={"Radio Fever, Kolkata"}
              type="Appeal to young adults with energetic and trendy broadcasts."
              description={"398K Listeners"}
              price={"3,960 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(5040);
              navigate("/redfm-guwahati");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Guwahati"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"200K Listeners"}
              price={"5,040 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(6480);
              navigate("/radiomirchi-patna");
            }}
          >
            <ServiceTemplate
              img={radiomirchi}
              title={"Radio Mirchi, Patna"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"563K Listeners"}
              price={"6,480 Min Spend"}
            />
          </div>
          <div
            onClick={() => {
              setMinSpend(6480);
              navigate("/redfm-lucknow");
            }}
          >
            <ServiceTemplate
              img={redfm}
              title={"Red FM, Lucknow"}
              type="Engage urban youth with vibrant and contemporary programming."
              description={"468K Listeners"}
              price={"6,480 Min Spend"}
            />
          </div>
          {/* <ServiceTemplate
            img={air}
            title="All India Radio"
            type="Access nationwide listeners through India's extensive public broadcaster."
            description={"481K Listeners"}
            price={"19,800 Min Spend"}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default RadioService;
