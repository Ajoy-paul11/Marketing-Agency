import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMGuwahati() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "16 Per Second",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "RJ Mentions",
          about:
            "The RJ will deliver a natural, unscripted mention of your brand during their show, lasting approximately 25 to 45 seconds. This helps promote your brand in an authentic and engaging way. Please note that recordings or broadcast certificates will not be provided for this option.",
          price: "On Request",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          itme: "Contests",
          about:
            "As part of advertising, brands sponsor specific radio games and offer prizes or gift vouchers to the winners. Examples include singing competitions, quizzes, and more.",
          price: "6,050 Per Contest",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Time Check",
          about:
            "RJs play a 5-second pre-recorded audio message about the brand, aired before, during, and after the program.",
          price: "16,093 Per Mention",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Sponsorship Tags",
          about:
            "A promotional method that associates the brand’s name with a specific program or song.",
          price: "On Request",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Red FM - Guwahati"}
            image={redfm}
            title={"About Advertising in Red FM - Guwahati : "}
            description={
              "Radio Ads have the unique power of captivating a large audience while stuck in traffic or commuting. Red FM, Guwahati Ads are a high-impact marketing strategy and have the ability to connect with listeners on a personal level, and reach an engaged audience promoting credibility and recall."
            }
            users={"200K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RedFMGuwahati