import React from 'react'
import Insidepage from './Insidepage'
import mirchi from '../../assets/Radio/radiomirchi.png'

function MirchiKolkata() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "38 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Mirchi - Kolkata"}
            image={mirchi}
            title={"About Advertising in Radio Mirchi - Kolkata : "}
            description={
              "Radio Ads have the unique power of captivating a large audience while stuck in traffic or commuting. Radio Mirchi, Kolkata Ads are a high-impact marketing strategy and have the ability to connect with listeners on a personal level, and reach an engaged audience promoting credibility and recall."
            }
            users={"959K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default MirchiKolkata