import React from 'react'
import Insidepage from './Insidepage'
import radiocity from '../../assets/Radio/radiocity.jpg'
import ScrollToTop from '../ScrollToTop';

function RadioCityChennai() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "32 Per Second",
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
          price: "On Request",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <ScrollToTop />
          <Insidepage
            headerText={"Advertising in Radio City - Chennai"}
            image={radiocity}
            title={"About Advertising in Radio City - Chennai : "}
            description={
              "The Gateway of South India, Chennai welcomes the expert of the radio stage, Radio City FM. India’s private radio channel 91.1 FM this Jagran initiative helps connect in a meaningful way with the listener. It enjoys a wide reach that helps connect with unique and path-breaking content. When brands choose them for endorsement it helps achieve the advertising goal of the brand."
            }
            users={"670K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityChennai