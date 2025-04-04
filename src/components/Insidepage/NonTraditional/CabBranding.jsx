import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function CabBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1637366099044-9e33e7f67705?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Full Cab",
          about:
            "Full Bus - Exterior is a cost-effective and effective advertising option for your brand. These ads are displayed on the exterior of buses, providing a unique opportunity to reach a wide audience. ",
          price: "3,025 Per Cab",
        },
        {
            cardImage:
              "https://images.unsplash.com/photo-1637366099044-9e33e7f67705?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            item: "Door Branding",
            about:
              "Ads will be placed on all four doors of the cab. The ads will be displayed on the two front doors and two back doors of the cab.",
            price: "2,662 Per Cab",
          },
          {
            cardImage:
              "https://images.unsplash.com/photo-1637366099044-9e33e7f67705?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            item: "Seat Back Branding",
            about:
              "As part of Seat Back Branding, 2 laminated cards will be hung on the back of the seat, one behind the driver’s seat and another behind the front passenger seat.",
            price: "1,452 Per Cab",
          },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Cab"}
            image={nontraditional}
            title={"About Advertising in Cab : "}
            description={
              "Cab Ads will help brands reach commuters and pedestrians while travelling through the city's busy streets, residential areas, and commercial hubs. These high-frequency ads placed inside or outside cabs are difficult to ignore and have a higher chance of being noticed in a congested-traffic city like Bangalore."
            }
            users={"250KM Average"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default CabBranding