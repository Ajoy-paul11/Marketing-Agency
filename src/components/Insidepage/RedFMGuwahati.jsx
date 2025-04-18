import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMGuwahati() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "16 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Guwahati"}
            image={redfm}
            title={"About Advertising in Red FM - Guwahati : "}
            description={
              "Radio Ads have the unique power of captivating a large audience while stuck in traffic or commuting. Red FM, Guwahati Ads are a high-impact marketing strategy and have the ability to connect with listeners on a personal level, and reach an engaged audience promoting credibility and recall."
            }
            users={"200K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMGuwahati