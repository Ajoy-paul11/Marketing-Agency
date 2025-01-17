import React, { useEffect } from "react";
import adhventha from "../assets/portfolio/adhventha.png";
import amrithnoni from "../assets/portfolio/amrithnoni.png";
import applo from "../assets/portfolio/apollo.png";
import featherlite from "../assets/portfolio/featherlite.png";
import garuda from "../assets/portfolio/garudamall.png";
import narayana from "../assets/portfolio/narayana.png"
import nethra from "../assets/portfolio/netradhama.png";
import npsnorth from "../assets/portfolio/nps.png";
import raymond from "../assets/portfolio/raymond.png";
import neuberg from "../assets/portfolio/neuberg.png";
import transcend from "../assets/portfolio/transcend.png";
import hitachi from "../assets/portfolio/hitachi.jpeg";
import { DefaultGallery } from "./GalleryComponent";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  const navigate = useNavigate();

  return (
    <div id="portfolio" className="w-full max-h-fit">
      <div className="py-8 my-4">
        <h2
          data-aos="fade-up"
          className="text-3xl font-semibold text-primary font-secondary text-center mb-4"
        >
          Portfolio
        </h2>
        <div data-aos="zoom-in" className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center bg-primary p-8 overflow-hidden xl:container xl:mx-auto">
          <div  onClick={() => navigate("/portfolio-adhventha")}>
            <DefaultGallery img={adhventha} />
          </div>
          <div  onClick={() => navigate("/portfolio-amruth")}>
            <DefaultGallery img={amrithnoni} />
          </div>
          <div  onClick={() => navigate("/portfolio-apollo")}>
            <DefaultGallery img={applo} />
          </div>
          <div  onClick={() => navigate("/portfolio-featherlite")}>
            <DefaultGallery img={featherlite} />
          </div>
          <div  onClick={() => navigate("/portfolio-garudamall")}>
            <DefaultGallery img={garuda} />
          </div>
          <div  onClick={() => navigate("/portfolio-nethradhama")}>
            <DefaultGallery img={nethra} />
          </div>
          <div
            onClick={() => navigate("/portfolio-narayana")}
          >
            <DefaultGallery img={narayana} />
          </div>
          <div  onClick={() => navigate("/portfolio-nps")}>
            <DefaultGallery img={npsnorth} />
          </div>
          <div  onClick={() => navigate("/portfolio-raymond")}>
            <DefaultGallery img={raymond} />
          </div>
          <div  onClick={() => navigate("/portfolio-hitachi")}>
            <DefaultGallery img={hitachi} />
          </div>
          <div  onClick={() => navigate("/portfolio-neuberg")}>
            <DefaultGallery img={neuberg} />
          </div>
          <div  onClick={() => navigate("/portfolio-transcend")}>
            <DefaultGallery img={transcend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
