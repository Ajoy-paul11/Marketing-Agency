import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function NonACBusBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/full-bus-exterior.jpg?updatedAt=1744952739412",
          item: "Full Bus - Exterior",
          about:
            "Full Bus - Exterior is an affordable and impactful advertising solution for your brand. These ads are placed on the outer surface of buses, offering a great way to reach a broad audience.",
          price: "55,000 Per Bus",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/combo-bus-panels-ad.jpg?updatedAt=1744883905561",
          item: "Combo Panels",
          about:
            "In Combo Panels, your ad will be featured on the Back Panel and the Upper (Glass) Panels, excluding the bus body. This placement offers excellent visibility and delivers a sleek, eye-catching appearance.",
          price: "35,000 Per Bus", 
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/bus-panel-ad.jpg?updatedAt=1744883905488",
          item: "Bus Panel",
          about:
            "The advertisement will be shown on the back panel of the bus.",
          price: "20,000 Per Bus",
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Non AC Bus"}
            image={nontraditional}
            title={"About Advertising in Non AC Bus : "}
            description={
              "Typically targeting a budget-conscious audience, non-AC bus Ads will reach regular commuters, pedestrians, and passersby. By leveraging their frequency, non-AC bus Ads help create brand awareness and promote products/services. Non-AC Buses in Bangalore are run by BMTC and cover a large part of the city."
            }
            users={"3.8M Daily Ridership"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default NonACBusBranding