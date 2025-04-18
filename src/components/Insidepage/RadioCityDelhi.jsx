import React from 'react'
import Insidepage from './Insidepage'
import radiocity from '../../assets/Radio/radiocity.jpg'

function RadioCityDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "81 Per Second",
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
            headerText={"Advertising in Radio City - Delhi"}
            image={radiocity}
            title={"About Advertising in Radio City - Delhi : "}
            description={
              "The Capital of India, Delhi welcomes the expert on the radio stage, Radio City FM. India’s private radio channel 91.1 FM this Jagran initiative helps connect in a meaningful way with the listener. It enjoys a wide reach that helps connect with unique and path-breaking content. When brands choose them for endorsement it helps achieve the advertising goal of the brand."
            }
            users={"1.8M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioCityDelhi