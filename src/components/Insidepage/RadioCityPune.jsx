import React from 'react'
import Insidepage from './Insidepage'
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityPune() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "21 Per Second",
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
            headerText={"Advertising in Radio City - Pune"}
            image={radiocity}
            title={"About Advertising in Radio City - Pune : "}
            description={
              "Considered India's first FM Radio, Radio City 91.1 is a go-to source of entertainment for a legacy of decades. By offering innovative content, this station is a great place to find trending information. Placing ads here can effectively showcase the brand message and build visibility among a massive listenership of Mumbai city."
            }
            users={"1.1M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityPune