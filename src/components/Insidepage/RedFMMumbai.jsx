import React from 'react'
import Insidepage from './Insidepage'
import redfm from '../../assets/Radio/redfm.jpg'

function RedFMMumbai() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
      item: "Jingle",
      about:
        "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
      price: "93 Per Second",
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
      price: "1,81,500 Per Mention",
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
        headerText={"Advertising in Red FM - Mumbai"}
        image={redfm}
        title={"About Advertising in Red FM - Mumbai : "}
        description={
          "As its tagline suggests, Bajate Rago, Red FM is a one-stop destination for everything entertaining. It offers engaging talk shows, the latest music hits, and much more, which garners a huge listenership across the city. By engaging people as they travel or work, Red FM is a great option for brands to promote their message in a short time."
        }
        users={"2.9M Listeners"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default RedFMMumbai