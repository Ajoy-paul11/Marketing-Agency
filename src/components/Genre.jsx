import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// import digtal from "../assets/gif/digital.gif";
// import magazine from "../assets/gif/magazine.gif";
// import newspaper from "../assets/gif/news.gif";
// import radio from "../assets/gif/radio.gif";
// import tv from "../assets/gif/television.gif";
// import outdoor from "../assets/gif/campaign.gif";
// import airplane from "../assets/gif/airplane.gif";
// import deals from "../assets/gif/deals.gif";
// import cinema from "../assets/gif/film-shooting.gif";
// import gps from "../assets/gif/gps.gif";
// import influencer from "../assets/gif/influencer.gif";
// import nonTradional from "../assets/gif/non-traditional.gif";



function Genre() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  return (
    <div id="genre" className="container max-h-fit" data-aos="fade-down">
      <h2
        data-aos="fade-down"
        className="text-2xl xl:text-3xl font-semibold text-primary my-6 font-secondary px-8 text-center"
      >
        Browse media plans categorized by stops
      </h2>
      <div className="flex flex-wrap justify-evenly gap-2 gap-y-6 font-secondary text-primary lg:grid lg:grid-cols-5 xl:gap-2 xl:justify-items-center xl:gap-y-8">
        <Link
          // to="/digital"
          to="/digital-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/digital.gif?updatedAt=1743142614602"} alt="digtal" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Digital</p>
        </Link>
        <Link
          // to="/magazine"
          to="/magazine-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/magazine.gif?updatedAt=1743142610426"} alt="magazine" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Magazine</p>
        </Link>
        <Link
          // to="/newspaper"
          to="/newspaper-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/news.gif?updatedAt=1743142614027"} alt="newspaper" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Newspaper</p>
        </Link>
        <Link
          // to="/radio"
          to="/radio-service"
          className="flex flex-col items-center  w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/radio.gif?updatedAt=1743142616454"} alt="radio" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Radio</p>
        </Link>
        <Link
          // to="/tv"
          to="/television-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/television.gif?updatedAt=1743142611034"} alt="tv" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Television</p>
        </Link>
        <Link
          // to="/tv"
          to="/outdoor-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer"  // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/outdoor.gif?updatedAt=1743144234201"} alt="outdoor" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Outdoor</p>
        </Link>
        <Link
          to="/airline-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/airplane.gif?updatedAt=1743142610473"} alt="digtal" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Airline/Airport</p>
        </Link>
        <Link
          to="/cinema-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer "  // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/film-shooting.gif?updatedAt=1743142611031"} alt="magazine" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Cinema</p>
        </Link>
        <Link
          to="/influencer-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/influencer.gif?updatedAt=1743142611409"} alt="newspaper" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Influencer</p>
        </Link>
        <Link
          to="/nontraditional-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/non-traditional.gif?updatedAt=1743142615198"} alt="radio" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Non Tradional</p>
        </Link>
        {/* <Link
          to="/hyperlocal-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/gps.gif?updatedAt=1743142610485"} alt="tv" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Hyperlocal</p>
        </Link>
        <Link
          to="/deals-service"
          className="flex flex-col items-center w-[150px] py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/deals.gif?updatedAt=1743142611411"} alt="outdoor" width="56" height="56" className="genre-svg mix-blend-multiply" />
          <p>Deals</p>
        </Link> */}
      </div>
    </div>
  );
}

export default Genre;
