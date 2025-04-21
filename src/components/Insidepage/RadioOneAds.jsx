import React from "react";
import Insidepage from "./Insidepage";
import radioOne from "../../assets/Radio/radio-one-300-x-125.jpg";
import ScrollToTop from "../ScrollToTop";

function RadioOneAds() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
      item: "Jingle",
      about:
        "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
      price: "28 Per Second",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
      item: "RJ Mentions",
      about:
        "The RJ will deliver a natural, unscripted mention of your brand during their show, lasting approximately 25 to 45 seconds. This helps promote your brand in an authentic and engaging way. Please note that recordings or broadcast certificates will not be provided for this option.",
      price: "4,180 Per Mention",
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
      price: "48,763 Per Mention",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
      item: "Sponsorship Tags",
      about:
        "A promotional method that associates the brand’s name with a specific program or song.",
      price: "47,190 Per Mention",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in Radio One - Bengaluru"}
        image={radioOne}
        title={"About Advertising in Radio One - Bengaluru : "}
        description={
          "The Silicon Valley of India, Bengaluru welcomes the channel which claims to be the Entertainment ka Baap, Radio One. The coolest station includes globally curated content of all genres for its listeners. It has already built a community of digital savvy and sports enthusiasts. When brands endorse themselves here at India’s only international radio network."
        }
        users={"1M Listeners"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default RadioOneAds;
