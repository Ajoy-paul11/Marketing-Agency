import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function GarudaBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/Facade%20865%20x%20500.jpg?updatedAt=1745241682480",
          item: "Facade",
          about:
            "The advertisement will be displayed on the facade located on the exterior of the mall.",
          price: "2,20,000 Per Unit Per Month",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/Back%20Lit%20Board%20865%20x%20500.jpg?updatedAt=1745241682663",
          item: "Back Lit Board",
          about:
            "Advertisements can be displayed on Backlit Boards positioned at various locations within the mall.",
          price: "1,37,500 Per Unit Per Month",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/Garuda%20Mall%20865%20x%20500.jpg?updatedAt=1745241682565",
          item: "Digital Screen",
          about:
            "The ad will be shown on a digital screen, with a 20-second clip playing 200 times per day.",
          price: "5,500 Per Screen Per Day",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Garuda Mall, Bangalore"}
            image="https://ik.imagekit.io/ajoy/NonTraditional/garuda-mall-300-x-128.jpg?updatedAt=1745237496209"
            title={" About Advertising in Garuda Mall, Bangalore : "}
            description={
              "Garuda Mall, Bangalore is a well-connected hub for entertainment, shopping, and socializing with a large crowd visiting. Garuda Mall, Bangalore Ads improve visibility and recall among potential customers in a hyperlocal area delivering high impact. Mall Ads engage affluent audiences in minimal time and leverage this opportunity to build awareness among a large-scale audience."
            }
            users={"30K Footfall Weekly"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default GarudaBranding