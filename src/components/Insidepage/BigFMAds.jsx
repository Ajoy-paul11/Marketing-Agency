import React from 'react'
import Insidepage from './Insidepage'
import bigfm from '../../assets/Radio/bigfm.png'

function BigFMAds() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "42 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Big FM - Bengaluru"}
            image={bigfm}
            title={"About Advertising in Big FM - Bengaluru : "}
            description={
              "Big FM is a well-known Kannada radio station in Bengaluru with high-quality entertainment content. With a 2395000 weekly listenership, Big FM Bengaluru Advertising would be an ideal venue for advertisers to expose their brands to a larger audience. Big FM Bengaluru Ads will assist advertisers in reaching wide listeners."
            }
            users={"2.4M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMAds