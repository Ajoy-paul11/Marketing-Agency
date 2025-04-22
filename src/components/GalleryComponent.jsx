import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function DefaultGallery({ img }) {
  return (
      <img    
        className=" max-w-full md:w-[170px] rounded-lg transition-all duration-300 hover:scale-105"
        src={img}
        alt="portfolio-photo"
        />
  );
}
