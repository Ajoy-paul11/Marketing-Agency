import React from 'react'
import Insidepage from './Insidepage'
import radiofever from '../../assets/Radio/fever-300-x-125.jpg'

function RadioFeverMumbai() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Radio/radio-jingles-service.jpg?updatedAt=1744960871788",
          item: "Jingle",
          about:
            "A jingle is a short audio message designed to define and promote a product or brand, typically lasting between 10 to 30 seconds. It can be broadcast between 7 AM – 12 PM and 5 PM – 11 PM. Mixed Time slots allow ads to be aired anytime between 7 AM – 11 PM.",
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