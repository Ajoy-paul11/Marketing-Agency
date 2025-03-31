import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMMumbai() {
  const cardInfos = [
    {
      cardImage:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Jingle",
      about:
        "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
      price: "93 Per Second",
    },
    
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Advertising in Red FM - Mumbai"}
        image={redfm}
        title={"About Advertising in Red FM - Mumbai : "}
        description={
          "As its tagline suggests, Bajate Rago, Red FM is a one-stop destination for everything entertaining. It offers engaging talk shows, the latest music hits, and much more, which garners a huge listenership across the city. By engaging people as they travel or work, Red FM is a great option for brands to promote their message in a short time."
        }
        users={"2.9M Listeners"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default RedFMMumbai