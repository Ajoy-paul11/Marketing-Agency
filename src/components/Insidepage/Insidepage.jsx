import React,{useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Insidepage({ headerText, image, title, description, users }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <section className=" relative w-full py-10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className=" text-2xl md:text-3xl font-semibold text-orange-600 font-secondary px-4 mb-8">
          {headerText}
        </h2>
        <div className=" bg-gradient-to-b from-blue-600 to-blue-800 rounded-md p-1">
          <div className=" w-full relative flex flex-col md:flex-row justify-between text-[#f4f5ff] lg:gap-10 xl:gap-20">
            <div className=" md:w-1/4 xl:w-2/6">
              <img src={image} alt="" className=" w-full h-full rounded" />
            </div>
            <div className=" md:w-3/4 xl:w-4/6 flex flex-col justify-center p-6 gap-4">
              <h4 className=" text-xl md:text-2xl font-semibold">{title}</h4>
              <p className="text-sm xl:text-lg">{description}</p>
            </div>
            <div className=" absolute -top-6 -right-4 md:-right-6 text-orange-600 text-semibold py-1.5 px-2 bg-[#f4f5ff] rounded-full text-lg shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
              {users}
            </div>
          </div>
        </div>
        <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <div className="mt-6 w-80 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg">
            <div
              className=""
            >
              <div>
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                    className={` w-full h-full object-cover rounded-t-lg`}
                    onClick={openModal}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 text-xl">
                UI/UX Review Check
              </div>
              <div>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </div>
            </div>
            <div className="pt-0">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              &times;
            </button>
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Insidepage;
