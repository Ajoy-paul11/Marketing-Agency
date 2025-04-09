import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PriceCard({ cardImage, price, item, about }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const minSpend = useStore((state) => state.minSpend);
  const navigate = useNavigate();

  const handlePaymentNavigation = () => {
    if (minSpend === 0) {
      toast.error("Please call us for pricing");
      return;
    }
    // navigate(`/payment?amount=${minSpend}`);
    navigate("/payment");
  };

  const openModal = (modalImg) => {
    setModalImage(modalImg);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mt-6 w-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg flex flex-col ">
        <div className="">
          <img
            src={cardImage}
            alt="card-image"
            className={` w-full h-full object-cover rounded-t-lg`}
            onClick={() => openModal(cardImage)}
          />
        </div>
        <div className="p-4 flex-grow">
          <div className="mb-2 text-xl text-center font-semibold">{item}</div>
          <div className=" text-sm">{about}</div>
        </div>
        <div className=" flex justify-between p-3 bg-blue-400 mx-2 mb-2 rounded text-sm items-center text-white">
          <div>Base Rate</div>
          <div 
            onClick={handlePaymentNavigation}
          className=" inline-flex gap-0.5 items-center font-semibold bg-white/90 text-black rounded-lg p-3 shadow-[0px_0px_5px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:animate-ring-pulse">
            <LiaRupeeSignSolid /> {price}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full p-[20px] md:p-[40px] lg:p-[60px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              &times;
            </button>
            <img src={modalImage} alt="" className="w-full object-cover" />
          </div>
        </div>
      )}
    </>
  );
}

export default PriceCard;
