import React from 'react'
import Insidepage from '../Insidepage';
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function Metrobranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1590657004813-b82c66b4c588?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Interior Train Branding",
          about:
            "Bengaluru Metro Train Interior Branding is displayed on the interior panels of the train. A total of 58 trains with 28 interior ad panels per train which are distributed in 6 coaches are available to place your advertisement. Each train with an average of 4 to 5 interior panels per coach is provided as part of Bengaluru Metro Train Interior Branding.",
          price: "1,35,000 Per Month",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Bangalore Metro Train"}
            image={nontraditional}
            title={" About Advertising in Bangalore Metro Train : "}
            description={
              "Metro Train has a large network route connecting the city. Metro Train Ads build recall among an affluent audience of young professionals, students etc who have high purchasing power. Through high-frequency retargeting, brands can promote their products/ services reaching a broad audience and boosting visibility to a city-wide audience."
            }
            users={"800K Rideship"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default Metrobranding