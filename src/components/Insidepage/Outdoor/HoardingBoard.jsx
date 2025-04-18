import React from 'react'
import Insidepage from '../Insidepage'
import hoarding from "../../../assets/Outdoor/hoarding.jpg"

function HoardingBoard() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Outdoor/outdoor-hoarding-ad.jpg?updatedAt=1744958654536",
          item: "Hoarding",
          about:
            "Hoarding media ensures continuous brand visibility and reaches a broad audience in high-traffic locations. It boosts brand recall, targets local consumers, and stands out without digital distractions. Furthermore, it complements other marketing channels, amplifying the overall advertising impact.",
          price: "Location Based",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising of Hoarding in any part of the City"}
            image={hoarding}
            title={"About Advertising of Hoarding in any part of the City : "}
            description={
              "Hoardings in City improve long-term brand recall and offer wide reach. They are typically found in hyperlocal areas with large crowds which offer high visibility to passersby, pedestrians, and commuters. As people quickly notice them, Hoardings attract potential customers and maintain brand awareness. Hoarding Ads are generally used to showcase new products/services/offers."
            }
            users={"Location Based"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default HoardingBoard