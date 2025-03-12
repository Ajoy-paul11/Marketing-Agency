import React, { useEffect } from "react";
import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.png";
import client4 from "../assets/clients/client-4.png";
import client5 from "../assets/clients/client-5.png";
import client6 from "../assets/clients/client-6.png";
import client7 from "../assets/clients/client-7.png";
import client8 from "../assets/clients/client-8.png";
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
import Marquee from "react-fast-marquee";

import Aos from "aos";
import "aos/dist/aos.css";

function Client() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1500,
  //   });
  // });
  return (
    <div className=" w-full">
      <div
        // data-aos="zoom-in"
        className=" py-4  max-w-screen-2xl mx-auto my-4"
      >
        <h2 className=" text-3xl font-semibold text-primary font-secondary text-center mb-6 py-4">
          Our Clients
        </h2>
        <Marquee pauseOnHover={true} className="flex items-center">
          <img className=" w-28 mr-20" src={adhventha} alt="client-logo" />
          <img className=" w-28 mr-20" src={amrithnoni} alt="client-logo" />
          <img className=" w-28 mr-20" src={applo} alt="client-logo" />
          <img className=" w-28 mr-20" src={featherlite} alt="client-logo" />
          <img className=" w-28 mr-20" src={garuda} alt="client-logo" />
          <img className=" w-28 mr-20" src={narayana} alt="client-logo" />
          <img className=" w-28 mr-20" src={nethra} alt="client-logo" />
          <img className=" w-28 mr-20" src={npsnorth} alt="client-logo" />
          <img className=" w-28 mr-20" src={raymond} alt="client-logo" />
          <img className=" w-28 mr-20" src={neuberg} alt="client-logo" />
          <img className=" w-28 mr-20" src={transcend} alt="client-logo" />
        </Marquee>
      </div>
    </div>
  );
}

export default Client;
