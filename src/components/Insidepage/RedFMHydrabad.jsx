import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMHydrabad() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "44 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Hyderabad"}
            image={redfm}
            title={"About Advertising in Red FM - Hyderabad : "}
            description={
              "Red FM Hyderabad is a famous station that takes pride in connecting with the local community, making it a favourite among the listeners. Brands associated with the station can leverage a strong and dedicated fanbase, which will build visibility and awareness. Advertising here will target a city-wide audience by ensuring promotion through engaging content."
            }
            users={"682K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMHydrabad