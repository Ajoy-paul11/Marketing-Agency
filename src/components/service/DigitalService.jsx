import React from "react";
import ServiceTemplate from "./ServiceTemplate.jsx";
// import seo from "../../assets/DigitalMedia/seo.png";
// import g_ads from "../../assets/DigitalMedia/google-Ad-288-x-192.jpg"
// import meta from "../../assets/DigitalMedia/meta-288-x-192.jpg"
// import spotify from "../../assets/DigitalMedia/spotify-288-x-192.jpg"
// import hotstar from "../../assets/DigitalMedia/hotstar-288-x-192.jpg"
import ScrollToTop from "../ScrollToTop.jsx";
import Category from "../Category.jsx";
import { useNavigate } from "react-router-dom";

function DigiService() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-[75px]">
      <Category />
      <ScrollToTop />
      <div className=" px-4  xl:px-20 2xl:px-44 py-14 bg-[#f4f5ff]">
        <h2 className="text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          Digital Media:
        </h2>
        <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <div onClick={() => navigate("/seo-pricing")}>
            <ServiceTemplate
              img={
                "https://ik.imagekit.io/ajoy/Digital/seo.png?updatedAt=1743156462113"
              }
              title="SEO"
              type="We specialize in SEO strategies that drive organic traffic."
              description={"N/A"}
              price={"15,000 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/google-pricing")}>
            <ServiceTemplate
              img={
                "https://ik.imagekit.io/ajoy/Digital/google-Ad-288-x-192.jpg?updatedAt=1743156368085"
              }
              title="Google Ads"
              type=" Google Ads campaigns that drive results across Search."
              description={"200M Monthly Users"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/meta-pricing")}>
            <ServiceTemplate
              img={
                "https://ik.imagekit.io/ajoy/Digital/meta-288-x-192.jpg?updatedAt=1743156368150"
              }
              title="Meta Ads"
              type=" We specialize in Meta Ads to help you reach your ideal customers."
              description={"399.3M Monthly Users"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/spotify-pricing")}>
            <ServiceTemplate
              img={
                "https://ik.imagekit.io/ajoy/Digital/spotify-288-x-192.jpg?updatedAt=1743156368056"
              }
              title="Spotify Ads"
              type="Spotify Ads offer a powerful way to connect with your audience."
              description={"68.2M Monthly Users"}
              price={"10,000 Min Spend"}
            />
          </div>
          <div onClick={() => navigate("/hotstar-pricing")}>
            <ServiceTemplate
              img={
                "https://ik.imagekit.io/ajoy/Digital/hotstar-288-x-192.jpg?updatedAt=1743156367808"
              }
              title="Hotstar Ads"
              type="A powerful advertising platform to reach a highly engaged audience."
              description={"102.2M Monthly Users"}
              price={"50,000 Min Spend"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigiService;
