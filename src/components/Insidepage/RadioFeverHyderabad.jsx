import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
          price: "26 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Fever - Hyderabad"}
            image={radiofever}
            title={"About Advertising in Radio Fever - Hyderabad : "}
            description={
              "Considered one of the best stations for Bollywood content in the region, Fever 94.3 FM in Hyderabad is one of the in-demand radio stations. By targeting a diverse audience, Radio Fever will be able to engage a wide listenership within the city. Advertising here will allow brands to connect with the residents, visitors, etc, providing a significant reach."
            }
            users={"268K Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioFeverHyderabad