import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
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