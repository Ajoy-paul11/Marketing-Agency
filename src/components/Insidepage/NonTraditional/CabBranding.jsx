import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function CabBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/full-cab-ad.jpg?updatedAt=1744953233317",
          item: "Full Cab",
          about:
            "Full Cab - Exterior is an affordable and impactful advertising option for your brand. These ads are showcased on the exterior of cabs, offering a unique opportunity to reach a broad audience.",
          price: "3,025 Per Cab",
        },
        {
            cardImage:
              "https://ik.imagekit.io/ajoy/NonTraditional/cab-door-ad.jpg?updatedAt=1744953251336",
            item: "Door Branding",
            about:
              "Advertisements will be placed on all four doors of the cab, covering both the front and rear doors on each side.",
            price: "2,662 Per Cab",
          },
          {
            cardImage:
              "https://ik.imagekit.io/ajoy/NonTraditional/cab-back-seat.jpg?updatedAt=1744953251617",
            item: "Seat Back Branding",
            about:
              "Seat Back Branding involves hanging two laminated cards on the backrests—one behind the driver’s seat and the other behind the front passenger seat.",
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