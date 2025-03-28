import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import seo from "../../assets/services/seo.png";
import g_ads from "../../assets/DigitalMedia/google-Ad-288-x-192.jpg"
import meta from "../../assets/DigitalMedia/meta-288-x-192.jpg"
import spotify from "../../assets/DigitalMedia/spotify-288-x-192.jpg"
import hotstar from "../../assets/DigitalMedia/hotstar-288-x-192.jpg"
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";


function DigiService() {
  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Digital Media:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={seo}
            title="SEO"
            type="We specialize in SEO strategies that drive organic traffic."
            description={
              "N/A"
            }
            price={"15,000 Min Spend"}
          />
          <ServiceTemplate
            img={g_ads}
            title="Google Ads"
            type=" Google Ads campaigns that drive results across Search."
            description={
              "200M Monthly Users"
            }
            price={"10,000 Min Spend"}
          />
          <ServiceTemplate
            img={meta}
            title="Meta Ads"
            type=" We specialize in Meta Ads to help you reach your ideal customers."
            description={
              "399.3M Monthly Users"
            }
            price={"10,000 Min Spend"}
          />
          <ServiceTemplate
            img={spotify}
            title="Spotify Ads"
            type="Spotify Ads offer a powerful way to connect with your audience."
            description={
              "68.2M Monthly Users"
            }
            price={"10,000 Min Spend"}
          />
          <ServiceTemplate
            img={hotstar}
            title="Hotstar Ads"
            type="A powerful advertising platform to reach a highly engaged audience."
            description={
              "102.2M Monthly Users"
            }
            price={"50,000 Min Spend"}
          />
        </div>
      </div>
    </div>
  );
}

export default DigiService;
