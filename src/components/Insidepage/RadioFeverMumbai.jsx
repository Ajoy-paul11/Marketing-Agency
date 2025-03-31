import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverMumbai() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Jingle",
          about:
            "Jingle is a short audio message, used to define and promote a product or a brand. It usually varies between 10-30 seconds. It can be played during between 7am - 12pm & 5pm - 11pm, Mixed Time - Ads are split between 7am - 11pm.",
          price: "76 Per Second",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Radio Fever - Mumbai"}
            image={radiofever}
            title={"About Advertising in Radio Fever - Mumbai : "}
            description={
              "Radio Fever FM is a popular and one of the top stations in Mumbai, offering the latest hit bollywood songs. It offer a variety of programs including talk shows, sports updates, etc, making it a one-stop destination for entertainment and more. By placing adverts here, brands can build high-impact visibility in a short span of time."
            }
            users={"2.3M Listeners"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RadioFeverMumbai