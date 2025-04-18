import React from 'react'
import Insidepage from './Insidepage'
import bigfm from '../../assets/Radio/bigfm.png'

function BigFMHyderabad() {
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
            headerText={"Advertising in Big FM - Hyderabad"}
            image={bigfm}
            title={"About Advertising in Big FM - Hyderabad : "}
            description={
              "Big FM Hyderabad focuses on regional language content, connecting with the local community. Being a leading radio station in the city, Big FM reaches a diverse audience of commuters, working professionals, etc. Brands advertising here will help target a Telugu-speaking listenership, and build recall as well as connect a receptive audience."
            }
            users={"511K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default BigFMHyderabad