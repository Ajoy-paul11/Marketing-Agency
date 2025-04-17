import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMPune() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "31 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Pune"}
            image={redfm}
            title={"About Advertising in Red FM - Pune : "}
            description={
              "Red FM 93.5 Pune is a popular station that offers Bollywood hit music, talk shows, contests, and live interactions. It offers engaging content and garners the attention of a massive listenership for providing trending news and entertainment. Advertising in the station will effectively communicate the brand message to the community."
            }
            users={"1.2M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMPune