import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function NonACBusBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1683562524697-f6d6902f2bac?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Full Bus - Exterior",
          about:
            "Full Bus - Exterior is a cost-effective and effective advertising option for your brand. These ads are displayed on the exterior of buses, providing a unique opportunity to reach a wide audience. ",
          price: "55,000 Per Bus",
        },
        {
            cardImage:
            "https://images.unsplash.com/photo-1683562524697-f6d6902f2bac?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Combo Panels",
          about:
            "In Combo Panels, your ad will be displayed on the Back Panel and the Upper Panels (Glass Panels) only, excluding the bus body. This placement ensures high visibility and creates a sleek, attention-grabbing look.",
          price: "35,000 Per Bus", 
        },
        {
            cardImage:
            "https://images.unsplash.com/photo-1683562524697-f6d6902f2bac?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Bus Panel",
          about:
            "Advertisements will be displayed on the back panel of the bus.",
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