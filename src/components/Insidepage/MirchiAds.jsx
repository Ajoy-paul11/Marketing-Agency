import React from "react";
import Insidepage from "./Insidepage";
import mirchi from "../../assets/Radio/radiomirchi.png";

function MirchiAds() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
      item: "Jingle",
      about:
        "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
      price: "44 Per Second",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Advertising in Radio Mirchi - Bengaluru"}
        image={mirchi}
        title={"About Advertising in Radio Mirchi - Bengaluru : "}
        description={
          "India’s leading nationwide private FM station from the house of Times Group, Radio Mirchi is ruling over Bengaluru, with its content on news, gossip, interviews, and songs from the film industry. It caters to stories of the city, evolving the mindset of the native Kannadigas. When brands run their endorsement with the king of radio stations it creates a brand identity."
        }
        users={"1.8M Listeners"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default MirchiAds;
