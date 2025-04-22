import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function DefaultGallery({ img }) {
  return (
    <Link className=" hover:cursor-pointer px-4 box-link">
      <img    
        className=" max-w-full md:w-[170px] rounded-lg transition-all duration-300 hover:scale-105"
        src={img}
        alt="portfolio-photo"
        />
      {/* <div className=" link">
        <FaLink size={"45px"} className=" text-primary" />
      </div> */}
    </Link>
  );
}
