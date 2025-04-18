import React from 'react'

function RadioCityHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "35 Per Second",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Radio City Bazaar",
          about:
            "Radio City Bazaar is a weekly initiative aimed at promoting small and homegrown businesses. The activity features Promos, RJ Mentions, Fabric segments, and Testimonials.",
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