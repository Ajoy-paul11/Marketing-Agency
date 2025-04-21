import React from 'react'
import ScrollToTop from '../ScrollToTop';

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
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Radio City Bazaar",
          about:
            "Radio City Bazaar is a weekly initiative aimed at promoting small and homegrown businesses. The activity features Promos, RJ Mentions, Fabric segments, and Testimonials.",
          price: "On Request",
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
          price: "48,763 Per Mention",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-roadblock.webp?updatedAt=1745226611881",
          item: "Sponsorship Tags",
          about:
            "A promotional method that associates the brand’s name with a specific program or song.",
          price: "4,53,750 Per Mention",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <ScrollToTop />
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