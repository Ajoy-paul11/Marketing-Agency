import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMIndore() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "9 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Indore"}
            image={redfm}
            title={"About Advertising in Red FM - Indore : "}
            description={
              "Painting the Street Food Capital of India, Indore red with the station of expression Red FM. The Bajate Raho platform brings the hottest and latest gossip, songs cricket from the world that floats the boat of entertainment for its listeners. They enjoy millions of active listeners who experience larger-than-life experiences. Brands endorsing here help in creating brand identity."
            }
            users={"440K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMIndore