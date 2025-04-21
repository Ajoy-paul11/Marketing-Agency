import React from "react";
import Insidepage from "./Insidepage";
import redfm from "../../assets/Radio/redfm.jpg";

function RedFMDelhi() {
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
      price: "4,840 Per Contest",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
      item: "Time Check",
      about:
        "RJs play a 5-second pre-recorded audio message about the brand, aired before, during, and after the program.",
      price: "2,78,300 Per Mention",
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
        headerText={"Advertising in Red FM - Delhi"}
        image={redfm}
        title={"About Advertising in Red FM - Delhi : "}
        description={
          "Painting the Capital of India, Delhi red with the station of expression Red FM. The Bajate Raho platform brings the hottest and latest gossip, songs cricket from the world around that floats the boat of entertainment for its listeners. They enjoy millions of active listeners who experience larger-than-life experiences. Brands endorsing here help in creating brand identity."
        }
        users={"2.7M Listeners"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default RedFMDelhi;
