import React from "react";
import Insidepage from "./Insidepage";
import radioOne from "../../assets/Radio/radio-one-300-x-125.jpg";

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
  ];
  return (
    <section className=" w-full mt-[72px]">
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
