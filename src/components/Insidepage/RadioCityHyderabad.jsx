import React from 'react'

function RadioCityHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "35 Per Second",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Radio City Bazaar",
          about:
            "Radio City Bazaar is a weekly activity which is an initiative to promote small and homegrown businesses. It includes Promo, RJ Mentions, Fabric and Testimonial.",
          price: "On Request",
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio City - Hyderabad"}
            image={radiocity}
            title={"About Advertising in Radio City - Hyderabad : "}
            description={
              "Radio City is a prominent radio station in Hyderabad offering locally relevant content, curated playlists, and more, which garners a large audience. The station will help brands target a diverse listenership of Telugu-speaking audiences or others, improving awareness among them."
            }
            users={"432K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityHyderabad