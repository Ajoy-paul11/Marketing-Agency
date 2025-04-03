import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function ApartmentBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1610376096719-9819725cfb00?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Digital Screen",
          about:
            "Your ad will be displayed on digital screens located inside and outside the lifts of apartment buildings, with two options: 450 slots per day, where the ad plays 15 seconds every 2 minutes loop.",
          price: "1,500 Per Screen",
        },
        {
            cardImage:
              "https://images.unsplash.com/photo-1547630824-eed1be6a27b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            item: "Lift Branding",
            about:
              "Ad will be placed on the panel which is located inside the lift.",
            price: "1,800 Per Poster",
          },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Apartment"}
            image={nontraditional}
            title={"About Advertising in Apartment : "}
            description={
              "Apartment Bangalore Advertising is a hyperlocal marketing strategy that targets residents, visitors and people passing by. A growth in gated communities in top cities across India has led to brands taking this opportunity to build visibility and brand recollection among potential customers."
            }
            users={"218.5K No. of Flats"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default ApartmentBranding