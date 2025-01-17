import React, { useEffect } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoGoal } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutImage from "../assets/about.jpg"


function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  
  return (
    <div id="about" className=" w-full max-h-fit my-4">
      <div  className="md:p-4">
        <h2
          
          className=" text-3xl font-semibold text-primary font-secondary text-center mb-2"
        >
          About
        </h2>
        <div data-aos="zoom-in" className=" flex flex-col lg:flex-row items-center justify-center bg-[#f4f5ff] py-8 p-4">
          <section className=" w-full lg:w-1/2 ">
          <div className=" lg:p-10">
            <div className="  grid grid-cols-3 gap-2 rounded-lg " style={{backgroundImage: `url(${aboutImage})`, backgroundPosition: 'center center'}}>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
              <div className=" w-[100px] h-[100px]"></div>
            </div>
            </div>
          </section>
          <section className=" w-full lg:w-1/2 flex flex-col items-center justify-center font-secondary text-primary">
            <div className=" w-full mx-2 mb-4">
              <h2
                className=" text-2xl font-semibold mb-4"
              >
                We Are MIND BLUE LLP
              </h2>
              <p className=" text-lg">
              Your one-stop solution for all your communication needs.
              <br />
              Headquartered in Bangalore
              </p>
            </div>
            <div
              className=" w-full flex justify-center items-center gap-6 mb-2"
            >
              <div className=" px-4 py-4 rounded-md bg-primary">
                <GoGoal size={"35px"} />
              </div>
              <div className=" mb-4">
                <h2 className=" text-xl text-semibold mb-1"> VISION </h2>
                <p className=" text-base">
                We help companies drive marketing transformation by helping them combine digital and traditional data to gain a competitive advantage.
                <strong className=" block py-4">Business + Data + Math = Actionable Insights</strong>
                </p>
              </div>
            </div>
            <div
              className=" w-full flex justify-center items-center gap-6 mb-2"
            >
              <div className=" px-4 py-4 rounded-md bg-primary">
                <VscWorkspaceTrusted size={"35px"} />
              </div>
              <div>
                <h2 className=" text-xl text-semibold mb-1">VALUES </h2>
                <p className=" text-base">
                  Our values are to provide the best advertising options to our
                  customers, help them grow their business, and provide
                  excellent customer service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
