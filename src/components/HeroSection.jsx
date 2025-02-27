import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg-image.jpg";


function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const handleWindowResize = () => {
            window.innerWidth >= 1024 ? setIsOpen(false) : setIsOpen(true);
        };

        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
  return (
    <div className={` relative top-[-87px]`}>
      <div className=" w-full h-full">
        <div className=" w-full h-screen lg:h-full relative">
          <img src={bgImage} alt="" className=" w-full h-full object-cover " />
          <div className=" w-full h-full absolute top-0 left-0 bg-black/90 ">
            <div className=" container mx-auto flex flex-col items-center justify-center h-full">
              <div className=" text-white  mb-4 font-secondary">
                <h1 className=" text-3xl lg:text-4xl xl:text-6xl font-bold mb-8 pl-4">
                  Seeking tangible results?
                </h1>
                <h1 className=" text-3xl lg:text-4xl xl:text-6xl font-bold mb-16 pl-4">
                  Partner with the experts at MINDBLUE
                </h1>
                <h5 className=" text-base lg:text-lg xl:text-2xl pl-2">
                  Discover and Purchase top-notch advertising solution with us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
