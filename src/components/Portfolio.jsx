import React, { useEffect } from "react";
import adhventha from "../assets/portfolio/adhventha.png";
import amrithnoni from "../assets/portfolio/amrithnoni.png";
import applo from "../assets/portfolio/apollo.png";
import featherlite from "../assets/portfolio/featherlite.png";
import garuda from "../assets/portfolio/garudamall.png";
import narayana from "../assets/portfolio/narayana.png";
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
import useScrollPositionRestoration from "../hook/useScrollPositionRestoration.jsx";

function Portfolio() {
  const { handleNavigate } = useScrollPositionRestoration();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  const navigate = useNavigate();

  return (
    <div id="portfolio" className="w-full max-h-fit">
      <div className="py-8 my-4">
        <h2 className=" text-2xl xl:text-3xl text-primary font-secondary text-center mb-2">
          Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-6 xl:gap-x-8 justify-items-center p-3 xl:p-8 overflow-hidden xl:container xl:mx-auto ">
          <div>
            <DefaultGallery img={adhventha} />
          </div>
          <div>
            <DefaultGallery img={amrithnoni} />
          </div>
          <div>
            <DefaultGallery img={applo} />
          </div>
          <div>
            <DefaultGallery img={featherlite} />
          </div>
          <div>
            <DefaultGallery img={garuda} />
          </div>
          <div>
            <DefaultGallery img={nethra} />
          </div>
          <div>
            <DefaultGallery img={narayana} />
          </div>
          <div>
            <DefaultGallery img={npsnorth} />
          </div>
          <div>
            <DefaultGallery img={raymond} />
          </div>
          <div>
            <DefaultGallery img={hitachi} />
          </div>
          <div>
            <DefaultGallery img={neuberg} />
          </div>
          <div>
            <DefaultGallery img={transcend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
