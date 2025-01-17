import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import stroke from "../assets/stroke.png";
import { LuZap } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";
import { BsBarChart } from "react-icons/bs";
import { MdVideoCameraBack } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  })

  const points = [
    { icon: LuZap, text: "Data-driven strategies" },
    { icon: FiTarget, text: "High-impact design" },
    { icon: FiUsers, text: "Collaborative culture" },
    { icon: GoLightBulb, text: "Creatively driven ideas" },
    { icon: BsBarChart, text: "Measurable growth" },
    { icon: MdVideoCameraBack, text: "Innovative solutions" },
  ];

  const navigate = useNavigate();
  
  return (
    <div className=" w-full relative">
      <div
        className='min-h-[90vh] w-full bg-[url("https://images.pexels.com/photos/7563612/pexels-photo-7563612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-no-repeat bg-opacity-30 bg-cover bg-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/7563612/pexels-photo-7563612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      ></div>

      <div className=" text-[#f4f5ff] absolute top-[80px] lg:top-[35px] xl:top-[5px] left-[30px] lg:left-[80px] w-full lg:w-[45%]">
        <div 
        data-aos="fade-right"
        className=" absolute w-[90%] left-[5px] lg:top-[35px] lg:left-[70px] lg:w-[70%] xl:top-[95px] xl:w-[60%] 2xl:w-[60%]">
          <h2 className=" text-3xl font-bold mb-6 primary-font">
            THE MARKETING ENGINE YOU'VE BEEN LOOKING FOR
          </h2>
          <div className=" text-xl font-secondary">
            We do a lot of amazing things at MindBlue, but behind every
            outstanding deliverable is a solid process that keeps us true to our
            overall goal our clients' success.
            {/* We provide a 360-degree view of the consumer, enabling companies to predict new revenue streams, anticipate product trends and popularity, improve customer retention rates, and optimize investment decisions.  */}
          </div>
        </div>
        <div 
        data-aos="fade-left"
        className=" ml-auto text-right absolute top-[425px] md:top-[480px] w-[80%] lg:top-[445px] lg:right-[-440px] xl:right-[-675px] xl:top-[510px] 2xl:top-[550px] 2xl:right-[-840px] font-secondary text-xl lg:w-[70%] xl:w-[60%] 2xl:w-[60%]">
          The team at MindBlue is composed of creatives, planners, designers,
          developers, and tech savvy problem solvers capable of integrating a
          wide range of services resulting in a marketing engine that drives
          results.
          {/* We help businesses measure and improve the effectiveness of their marketing campaigns across channels through effective targeting and segmentation, content match-making, and testing. */}
        </div>
        <img
          data-aos="zoom-in"
          // data-aos="fade-down"
          src={stroke}
          alt="doddle"
          className=" absolute  w-[150px] top-[290px] left-[100px] md:w-[250px] md:top-[240px] md:left-[200px] lg:w-[240px] xl:w-[400px] lg:top-[310px] xl:top-[300px] lg:left-[320px] xl:left-[465px] 2xl:left-[660px]"
        />
      </div>
      <div className=" w-full bg-[#f4f5ff]">
        <main className=" container mx-auto px-4">
          <section className="py-12">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6 primary-font">
              Our way of approaching things is pretty amazing!!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-secondary">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:scale-105 duration-300"
                >
                  <point.icon className="w-8 h-8 text-blue-500" />
                  <span className="text-lg text-blue-800">{point.text}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-blue-900 text-[#f4f5ff] primary-font rounded-lg shadow-lg p-8 py-12">
            <h3 className="text-2xl font-semibold mb-4">
              Multidisciplinary Approach
            </h3>
            <p className="text-lg mb-4">
              Our culture of collaboration brings together diverse talents and
              perspectives, allowing us to create unique and effective solutions
              for our clients.
            </p>
            <div className="text-xl font-semibold">
              Collaboration + Creativity = Growth
            </div>
          </section>
          <section className="text-center py-12">
      <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Grow Your Brand?</h3>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 hover:scale-105"
       onClick={() => navigate("/contact")}
      >
        Get in Touch
        <FaArrowRightLong className="ml-2 text-white" />
      </button>
    </section>
        </main>
      </div>
    </div>
  );
}

export default AboutPage;
