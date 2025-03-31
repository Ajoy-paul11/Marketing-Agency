import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "64 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Fever - Delhi"}
            image={radiofever}
            title={"About Advertising in Radio Fever - Delhi : "}
            description={
              "Fever FM is a fast-growing radio station providing listeners with the latest Bollywood music and is considered India’s ultimate entertainment destination. With pioneering programs and engaging sports updates, Fever FM has soon become one of the top stations in Delhi. Brands placing ads here will be able to target the Indian capital’s audience and build high-impact visibility."
            }
            users={"1.9M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioFeverDelhi