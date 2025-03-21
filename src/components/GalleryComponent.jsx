import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function DefaultGallery({ img }) {
  return (
    <Link className=" hover:cursor-pointer px-4 box-link">
      <img    
        className=" w-[330px] lg:w-[250px] h-[180px] lg:h-[125px] xl:h-[135px] max-w-full rounded-lg  transition-all shadow-slate-500 duration-300 hover:opacity-50 hover:scale-105"
        src={img}
        alt="portfolio-photo"
      />
      <div className=" link">
        <FaLink size={"45px"} className=" text-primary" />
      </div>
    </Link>
  );
}
