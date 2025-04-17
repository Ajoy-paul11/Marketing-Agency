import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverAds() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "35 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Fever - Bengaluru"}
            image={radiofever}
            title={"About Advertising in Radio Fever - Bengaluru : "}
            description={
              "Also known as Fever 104 FM, Radio Fever is known to lay contemporary hit pieces of music in the Silicon Valley of India, Bengaluru. Fever 104 has also been an active part of the sports world, they have been credited with maximum sports alliances in the industry for their close association with multiple IPL teams. Brands endorsing here help in creating brand identity."
            }
            users={"1.1M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioFeverAds