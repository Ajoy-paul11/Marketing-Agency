import React, { useEffect } from 'react'
import { MdBusinessCenter } from "react-icons/md";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function ServiceTemplate({img, title, type, description}) {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Card
        data-aos="zoom-in"
        className="mt-6 w-72 lg:w-64 xl:w-72 h-[402px] bg-primary hover:shadow-xl hover:shadow-slate-500 hover:scale-110 duration-300 transition-colors flex flex-col"
      >
        <CardHeader className="relative h-48 overflow-hidden m-0 rounded-t-xl bg-[#DBC9A6] min-h-[192px] flex-shrink-0">
          <img src={img} alt="card-image" className=' w-full h-full object-contain'/>
        </CardHeader>
        <CardBody className=' p-2 flex-grow-0'>
          <Typography variant="h5" className="mb-2 text-primary text-center">
            {title}
          </Typography>
          <Typography className=" text-primary">
             {type}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 p-2 mt-auto">
          <div className="flex items-center justify-start gap-4">
            <div className=' w-8 flex-shrink-0'>

            <MdBusinessCenter className="text-primary" size={24}/>
            </div>
            <p className=" text-base font-semibold text-primary line-clamp-3 lg:line-clamp-2 xl:line-clamp-3"> {description}</p>
          </div>
        </CardFooter>
      </Card>
  )
}

export default ServiceTemplate;