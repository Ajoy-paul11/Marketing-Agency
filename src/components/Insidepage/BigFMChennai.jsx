import React from 'react'
import Insidepage from './Insidepage'
import bigfm from '../../assets/Radio/bigfm.png'

function BigFMChennai() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "31 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Big FM - Chennai"}
            image={bigfm}
            title={"About Advertising in Big FM - Chennai : "}
            description={
              "Chennai, known as the Gateway of South India, is home to Big FM, one of India's largest private radio stations. With its mission to inspire positive thinking in society and become a role model, this station has gained a significant following among radio listeners across the country. Brands that choose to partner with Big FM for endorsement can achieve their advertising goals successfully."
            }
            users={"601K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMChennai