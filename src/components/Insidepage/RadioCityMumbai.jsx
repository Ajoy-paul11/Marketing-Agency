import React from 'react'
import Insidepage from './Insidepage'
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityMumbai() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "87 Per Second",
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
            headerText={"Advertising in Radio City - Mumbai"}
            image={radiocity}
            title={"About Advertising in Radio City - Mumbai : "}
            description={
              "Considered India’s first private radio station, Radio City has been evolving over the decades, earning it a loyal following. Here the RJs keep you updated with the latest goings, and play you some hit songs. And entertain you with their engaging content. Brands placing ads here can create awareness through repetitive ads and improve visibility."
            }
            users={"2.5M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityMumbai