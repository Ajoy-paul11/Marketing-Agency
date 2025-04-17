import React from 'react'
import Insidepage from './Insidepage'
import mirchi from '../../assets/Radio/radiomirchi.png'

function MirchiHyderbad() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "44 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Mirchi - Hyderbad"}
            image={mirchi}
            title={"About Advertising in Radio Mirchi - Hyderbad : "}
            description={
              "Radio Mirchi is a popular radio station, known for its energetic content, like popular music and interactive talk shows. Having a diverse population, Radio Mirchi Hyderabad is a go-to station for the young and vibrant population, targeting a city-wide audience. Brands advertising here can create awareness and improve visibility."
            }
            users={"761K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default MirchiHyderbad