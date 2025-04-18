import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
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