import React from 'react'
import Insidepage from './Insidepage'    
import mirchi from '../../assets/Radio/radiomirchi.png'

function MirchiChennai() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "41 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Mirchi - Chennai"}
            image={mirchi}
            title={"About Advertising in Radio Mirchi - Chennai : "}
            description={
              "India’s leading nationwide private FM station from the house of Times Group, Radio Mirchi is ruling over Chennai, with its content on news, gossip, interviews, and songs from the film industry. It caters to stories of the city, evolving the mindset of the native Tamilians. When brands run their endorsement with the king of radio stations it creates a brand identity."
            }
            users={"945K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default MirchiChennai