import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function ApartmentBranding() {
    const cardInfos = [
        {
          cardImage:
          "https://ik.imagekit.io/ajoy/NonTraditional/apartment-board-ad.jpg?updatedAt=1744883905708",
          item: "Digital Screen",
          about:
          "Your ad will be shown on digital screens placed both inside and outside elevator areas in apartment buildings. There are two options available: 450 slots per day, with each ad playing for 15 seconds in a 2-minute loop.",
          price: "1,500 Per Screen",
        },
        {
          cardImage:
          "https://ik.imagekit.io/ajoy/NonTraditional/apartment-lift-ad.jpg?updatedAt=1744883905484",
            item: "Lift Branding",
            about:
              "The ad will be displayed on the panel located inside the elevator.",
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