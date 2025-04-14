import React from 'react'
import Insidepage from '../Insidepage';
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function Metrobranding() {
    const cardInfos = [
        {
          cardImage:
            "https://www.myhoardings.com/blog/wp-content/uploads/2021/07/Bengaluru-Metro-Interior-Branding.jpg",
          item: "Interior Train Branding",
          about:
            "Bengaluru Metro Train Interior Branding is displayed on the interior panels of the train. A total of 58 trains with 28 interior ad panels per train which are distributed in 6 coaches are available to place your advertisement. Each train with an average of 4 to 5 interior panels per coach is provided as part of Bengaluru Metro Train Interior Branding.",
          price: "7,97,500 Per Month",
        },
        {
          cardImage:
            "https://smartads.in/resources/assets/uploads/product_group/non-traditional/metro-train-bangalore-green-line.webp",
          item: "Exterior Train Branding",
          about:
            "Bangalore Metro Train Exterior Branding is offered as a full train wrap on the outer surface of the train. Trains available for wrapping include Green Line (6 coaches) and Purple Line (6 Coaches) with 5300 sq. ft. of ad space per train. Trains on the Purple Line (Nagasandra - Silk Institute - 37 Stations) operate an average of 13 to 14 trips per day, while those on the Green Line (Whitefield Kadugodi - Challaghatta 32 Stations) make about 16 to 17 trips per day.",
          price: "25,77,300 Per Month",
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