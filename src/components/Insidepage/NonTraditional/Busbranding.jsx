import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"


function Busbranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1683562524697-f6d6902f2bac?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Full Bus - Exterior",
          about:
            "Full Bus - Exterior is a cost-effective and effective advertising option for your brand. These ads are displayed on the exterior of buses, providing a unique opportunity to reach a wide audience. ",
          price: "1,08,000 Per Bus",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in AC Bus Advertising"}
            image={nontraditional}
            title={"About AC Bus Advertising : "}
            description={
              "Being an effective transit ad option, AC Bus Ads can help bring your brand message into the streets. Operational in a densely populated city, Bangalore AC Bus Ads which follow a fixed route offer brand awareness and exposure to passengers and pedestrians within a predictable geographical area."
            }
            users={"127K Daily Rideship"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default Busbranding