import React from 'react'

function MirchiPune() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "31 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Mirchi - Pune"}
            image={mirchi}
            title={"About Advertising in Radio Mirchi - Pune : "}
            description={
              "Mirchi Pune is a good mix of relatable engaging daily shows, music and other content. It ensures a local connection offering something for their dedicated listeners who enjoy the latest music. Ads here can allow brands to build credibility and improve visibility among a mass audience effectively."
            }
            users={"1.6M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default MirchiPune