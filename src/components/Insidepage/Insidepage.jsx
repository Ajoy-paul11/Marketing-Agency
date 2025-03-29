import React, { useState } from "react";
import PriceCard from "./PriceCard";

function Insidepage({
  headerText,
  image,
  title,
  description,
  users,
  cardInfos,
}) {
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
        <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-10">
          {cardInfos.map((cardInfo, index) => (
            <PriceCard
              key={index}
              cardImage={cardInfo.cardImage}
              item={cardInfo.item}
              price={cardInfo.price}
              about={cardInfo.about}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insidepage;
