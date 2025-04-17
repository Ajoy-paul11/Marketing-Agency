import React from 'react'
import Insidepage from './Insidepage'
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityChennai() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "32 Per Second",
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