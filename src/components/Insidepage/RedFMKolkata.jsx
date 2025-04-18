import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMKolkata() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "38 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Kolkata"}
            image={redfm}
            title={"About Advertising in Red FM - Kolkata : "}
            description={
              "City of Joy is painted red in color with the station of expression the one and only Red FM. The Bajate Raho platform brings the hottest and latest gossip from Tollywood to the audience. Kolkata floats in the boat of entertainment with them. They enjoy millions of active listeners who experience larger-than-life experiences. Brands endorsing here help in creating brand identity."
            }
            users={"647K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMKolkata