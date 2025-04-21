import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"


function Busbranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/full-bus-exterior.jpg?updatedAt=1744952739412",
          item: "Full Bus - Exterior",
          about:
            "Full Bus - Exterior is an affordable and impactful advertising solution for your brand. These ads are placed on the outer surface of buses, offering a great way to reach a broad audience.",
          price: "1,08,000 Per Bus",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in AC Bus Advertising"}
            image="https://ik.imagekit.io/ajoy/NonTraditional/AC-bus-branding-300-x-128.jpg?updatedAt=1745236533121"
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