import React, { useEffect } from "react";
import { MdBusinessCenter } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ServiceTemplate({ img, title, type, description, price }) {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Card
      data-aos="zoom-in"
      className="mt-6 w-72 lg:w-64 xl:w-72 h-[380px] bg-[#f4f5ff] hover:shadow-xl hover:shadow-slate-500 hover:scale-105 duration-300 transition-colors flex flex-col shadow-[0_0_10px_0_rgba(0,0,0,0.25)] hover:cursor-pointer"
    >
      <CardHeader className="relative h-48 overflow-hidden m-0 rounded-t-xl min-h-[192px] flex-shrink-0">
        <LazyLoadImage
          src={img}
          alt="card-image"
          className=" w-full h-full object-contain"
          effect="blur"
          wrapperProps={{
            style: {
              transitionDelay: "1s",
              width: "100%",
              height: "100%",
            },
          }}
        />
      </CardHeader>
      <CardBody className=" p-2 flex-grow-0">
        <Typography variant="h5" className="mb-2 text-primary text-center">
          {title}
        </Typography>
        <Typography className=" text-primary">{type}</Typography>
      </CardBody>
      <CardFooter className="pt-0 p-2 px-4">
        <div className="flex items-center gap-6">
          <div className=" flex flex-col gap-3">
            <FaUserAlt className="text-primary text-lg" />
            <LuIndianRupee className="text-primary text-lg" />
          </div>
          <div className=" flex flex-col gap-3">
            <p className=" text-base font-semibold text-primary">
              {description}
            </p>
            <p className=" text-base font-semibold text-primary">{price}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ServiceTemplate;
