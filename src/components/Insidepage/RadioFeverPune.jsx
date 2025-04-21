import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'
import ScrollToTop from '../ScrollToTop';

function RadioFeverPune() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "17 Per Second",
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
          price: "1,27,050 Per Mention",
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
          <ScrollToTop />
          <Insidepage
            headerText={"Advertising in Radio Fever - Pune"}
            image={radiofever}
            title={"About Advertising in Radio Fever - Pune : "}
            description={
              "India’s largest international radio network, Radio One is an extremely popular station in Pune. It offers the latest international hits and is a one-stop place for everything entertainment. Advertising here will help target the local community and create impactful engagement among the listeners."
            }
            users={"647K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioFeverPune