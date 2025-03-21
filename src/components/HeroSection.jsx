import React, { useEffect, useState } from "react";



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

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
      "https://ik.imagekit.io/ajoy/Home-1.jpg?updatedAt=1742543747808", 
      "https://ik.imagekit.io/ajoy/Home-2.jpg?updatedAt=1742543748080", 
      "https://ik.imagekit.io/ajoy/bg-image.jpg?updatedAt=1742543746473"
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);

        return () => clearInterval(timer);
    }, [nextSlide]);


  return (
    <div className={` relative top-[-87px]`}>
      <div className=" w-full h-full">
        <div className=" w-full h-screen lg:h-full relative">
          {/* Slide Container Images */}
          <div
          className=" w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
          >
            {images.map((image, index) => (
              <div key={index}
              className=" w-full h-full flex-shrink-0">
                <picture>
                  <source srcSet={`${image}?w=480`} media="(max-width: 480px)"/>
                  <source srcSet={`${image}?w=768`} media="(max-width: 768px)"/>
                  <source srcSet={`${image}?w=1024`} media="(min-width: 769px)"/>
                  <source srcSet={`${image}?w=1280`} media="(min-width: 1025px)"/>
                </picture>
                <img
                src={image}
                alt="background-image"
                className=" object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className=" w-full h-full absolute top-0 left-0 bg-black/70 ">
            <div className=" container mx-auto flex flex-col items-center justify-center h-full">
              <div className=" text-white  mb-4 font-secondary">
                <h1 className=" text-3xl lg:text-4xl xl:text-6xl font-bold mb-8 pl-4">
                  Seeking tangible results?
                </h1>
                <h1 className=" text-3xl lg:text-4xl xl:text-6xl font-bold mb-16 pl-4">
                  Partner with the experts at <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 "> MINDBLUE </span>
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
