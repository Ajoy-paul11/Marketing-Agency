import React from "react";
import aboutImage from "../assets/about.jpg";

function AboutNew() {
  return (
    <div id="about">
      <div className=" w-full">
        {/* Previous Code for About Section */}
        
        <div className=" bg-gradient-to-b from-blue-400 to-blue-700">
          <div className=" flex flex-col lg:flex-row relative">
            <div className=" flex flex-col px-8 md:px-16 lg:pr-4 gap-6 py-8 lg:w-3/4 xl:w-1/2 2xl:w-2/3 order-2">
              <div className=" text-3xl md:text-4xl xl:text-5xl text-white font-bold">
                <h2 className=" my-4">THE MARKETING</h2>
                <h2 className=" my-4">ENGINE YOU'VE</h2>
                <h2 className=" my-4">BEEN LOOKING FOR</h2>
              </div>
              <p className=" text-base md:text-xl xl:text-2xl text-white">
                We do a lot amazing things at Mindblue, but behind every
                outstanding deliverable is a solid process that keeps us true to
                our overall goal our client's success. The team at Mindblue is
                composed of creatives, planners, designers, developers, and tech
                savvy problem solvers capable of integrating a wide range of
                services resulting in a marketing engine that drives results.
              </p>
            </div>
            <div className=" z-10 border-l-[10px] md:border-l-[20px] border-b-[10px] md:border-b-[20px] border-white absolute top-0 right-0 rounded-bl-full w-12 md:w-20 h-12 md:h-20 bg-pink-600 "></div>
            <div className=" border-l-[10px] md:border-l-[20px] border-b-[10px] md:border-b-[20px] border-white absolute top-0 right-0 rounded-bl-full w-24 md:w-40 h-24 md:h-40 bg-gradient-to-b from-blue-400 to-blue-700"></div>
            <div className=" order-1 lg:order-2">
              <img
                src="https://ik.imagekit.io/ajoy/about.jpg?updatedAt=1743141147435"
                alt="about"
                className="w-full h-full rounded-bl-full border-l-[10px] md:border-l-[20px] border-b-[10px] md:border-b-[20px] border-white "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNew;
