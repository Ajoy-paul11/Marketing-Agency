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
    <div id="genre" className="container mx-auto max-h-fit py-8">
      <h2
        
        className="text-xl xl:text-3xl text-primary my-6 font-secondary px-8 "
      >
        Browse Media by Genre
      </h2>
      <div className=" font-secondary text-primary grid grid-cols-3 gap-8 lg:grid-cols-5 justify-items-center xl:gap-y-8 p-4">
        <Link
          
          // to="/digital-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/digital.gif?updatedAt=1743142614602"} alt="digtal"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Digital</p>
        </Link>
        <Link
          
          // to="/magazine-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/magazine.gif?updatedAt=1743142610426"} alt="magazine"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Magazine</p>
        </Link>
        <Link
          
          // to="/newspaper-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/news.gif?updatedAt=1743142614027"} alt="newspaper"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Newspaper</p>
        </Link>
        <Link
          
          // to="/radio-service"
          className="flex flex-col items-center  w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/radio.gif?updatedAt=1743142616454"} alt="radio"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Radio</p>
        </Link>
        <Link

          // to="/television-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/television.gif?updatedAt=1743142611034"} alt="tv"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Television</p>
        </Link>
        <Link
          // to="/outdoor-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer"  // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/outdoor.gif?updatedAt=1743144234201"} alt="outdoor"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Outdoor</p>
        </Link>
        <Link
          // to="/nontraditional-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/non-traditional.gif?updatedAt=1743142615198"} alt="radio"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Non Tradional</p>
        </Link>
        <Link
          // to="/cinema-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer "  // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/film-shooting.gif?updatedAt=1743142611031"} alt="magazine"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Cinema</p>
        </Link>
        <Link
          // to="/influencer-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer" // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/influencer.gif?updatedAt=1743142611409"} alt="newspaper"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Influencer</p>
        </Link>
        <Link
          // to="/airline-service"
          className="flex flex-col items-center w-[150px] xl:py-8 rounded-md genre-box hover:cursor-pointer " // px-10
        >
          <img src={"https://ik.imagekit.io/ajoy/GIF/airplane.gif?updatedAt=1743142610473"} alt="digtal"  className="genre-svg mix-blend-multiply w-8 xl:w-14" />
          <p className=" text-xs xl:text-lg">Airline/Airport</p>
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
