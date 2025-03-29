import React from 'react'
import Insidepage from "./Insidepage";
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityAds() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "47 Per Second",
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
            headerText={"Advertising in Radio City - Bengaluru"}
            image={radiocity}
            title={"About Advertising in Radio City - Bengaluru : "}
            description={
              "Radio City, Bengaluru is a Kannada based radio station that caters to a very large number of audiences in Bengaluru city. The station is owned by Jagran Group and it is India's first private Radio Station as was started on 1st July 2001. Radio City Bengaluru a key player in the Kannada music space and lets advertisers reach out to the regional audiences."
            }
            users={"1.7M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityAds