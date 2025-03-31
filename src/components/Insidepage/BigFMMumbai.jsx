import React from 'react'

function BigFMMumbai() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "68 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Big FM - Mumbai"}
            image={bigfm}
            title={"About Advertising in Big FM - Mumbai : "}
            description={
              "As its tagline Dhun Badalke toh Dekho suggests, 92.7 Big FM Mumbai offers a variety of content which garners the attention of a diverse audience. By offering unique and distinctive programs, Big FM engages its listeners constantly. Brands placing ads here will be able to create awareness and build visibility to a wide listenership."
            }
            users={"2.6M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMMumbai