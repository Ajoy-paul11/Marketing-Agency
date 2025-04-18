import React from 'react'
import Insidepage from "./Insidepage";
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityAds() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "47 Per Second",
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