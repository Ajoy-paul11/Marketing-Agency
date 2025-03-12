import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
import seo from "../../assets/services/seo.png";
import g_ads from "../../assets/DigitalMedia/google-Ad-288-x-192.jpg"
import meta from "../../assets/DigitalMedia/meta-288-x-192.jpg"
import spotify from "../../assets/DigitalMedia/spotify-288-x-192.jpg"
import hotstar from "../../assets/DigitalMedia/hotstar-288-x-192.jpg"
import ScrollToTop from "../ScrollToTop.jsx";

function DigiService() {
  return (
    <div className="w-full mt-[75px]">
      <ScrollToTop />
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Digital Media:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <ServiceTemplate
            img={seo}
            title="SEO"
            type="We specialize in SEO strategies that drive organic traffic, improve visibility, and help you outrank your competitors."
            description={
              "N/A"
            }
          />
          <ServiceTemplate
            img={g_ads}
            title="Google Ads"
            type="At Mindblue, We create high-converting Google Ads campaigns that drive results across Search, Display, and Video Ads."
            description={
              "200M Monthly Users"
            }
          />
          <ServiceTemplate
            img={meta}
            title="Meta Ads"
            type=" We specialize in Meta Ads (Facebook & Instagram Ads) to help you reach your ideal customers and maximize conversions."
            description={
              "400.3M Monthly Users"
            }
          />
          <ServiceTemplate
            img={spotify}
            title="Spotify Ads"
            type="Spotify Ads offer a powerful way to connect with your audience while they listen to their favorite music and podcasts."
            description={
              "68.2M Monthly Users"
            }
          />
          <ServiceTemplate
            img={hotstar}
            title="Hotstar Ads"
            type="Hotstar Ads offer a powerful advertising platform to reach a highly engaged audience through premium content."
            description={
              "102.2M Monthly Users"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DigiService;
