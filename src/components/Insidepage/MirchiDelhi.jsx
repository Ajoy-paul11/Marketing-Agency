import React from 'react'
import Insidepage from './Insidepage'
import mirchi from '../../assets/Radio/radiomirchi.png'
import ScrollToTop from '../ScrollToTop';

function MirchiDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "92 Per Second",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "RJ Mentions",
          about:
            "The RJ will deliver a natural, unscripted mention of your brand during their show, lasting approximately 25 to 45 seconds. This helps promote your brand in an authentic and engaging way. Please note that recordings or broadcast certificates will not be provided for this option.",
          price: "6,600 Per Mention",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          itme: "Contests",
          about:
            "As part of advertising, brands sponsor specific radio games and offer prizes or gift vouchers to the winners. Examples include singing competitions, quizzes, and more.",
          price: "3,630 Per Contest",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Time Check",
          about:
            "RJs play a 5-second pre-recorded audio message about the brand, aired before, during, and after the program.",
          price: "1,81,500 Per Mention",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Sponsorship Tags",
          about:
            "A promotional method that associates the brand’s name with a specific program or song.",
          price: "1,57,300 Per Mention",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <ScrollToTop />
          <Insidepage
            headerText={"Advertising in Radio Mirchi - Delhi"}
            image={mirchi}
            title={"About Advertising in Radio Mirchi - Delhi : "}
            description={
              "The Capital of India, Delhi is ruled by Radio Mirchi which is from the house of Times Group, with its content on news, gossip, interviews, and songs from the film industry. It caters to stories of the city, evolving the mindset of the native in Delhi. When brands run their endorsement with the king of radio stations it creates a brand identity."
            }
            users={"4.3M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default MirchiDelhi