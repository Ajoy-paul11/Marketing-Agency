import React from 'react'
import Insidepage from './Insidepage'
import bigfm from '../../assets/Radio/bigfm.png'

function BigFMHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "31 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Big FM - Hyderabad"}
            image={bigfm}
            title={"About Advertising in Big FM - Hyderabad : "}
            description={
              "Big FM Hyderabad focuses on regional language content, connecting with the local community. Being a leading radio station in the city, Big FM reaches a diverse audience of commuters, working professionals, etc. Brands advertising here will help target a Telugu-speaking listenership, and build recall as well as connect a receptive audience."
            }
            users={"511K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMHyderabad