import React from 'react'
import Insidepage from './Insidepage'
import bigfm from '../../assets/Radio/bigfm.png'

function BigFMDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "81 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Big FM - Delhi"}
            image={bigfm}
            title={"About Advertising in Big FM - Delhi : "}
            description={
              "The Capital of India, Delhi welcomes Big FM one of India’s second-largest private radio stations. From the House of Reliance, it runs with the ideology of becoming a role model in thought inspiration in society, it covers almost all of the country’s radio listeners. When brands choose them for endorsement it helps achieve the advertising goal of the brand."
            }
            users={"2.2M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMDelhi