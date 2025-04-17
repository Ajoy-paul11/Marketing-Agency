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
            "Bengaluru Metro Train Interior Branding is displayed on the interior panels of the train. There are 58 trains available, each with 28 interior ad panels spread across 6 coaches. On average, each coach has 4 to 5 interior panels, providing ample space for your advertisement as part of the Bengaluru Metro Train Interior Branding.",
          price: "7,97,500 Per Month",
        },
        {
          cardImage:
            "https://smartads.in/resources/assets/uploads/product_group/non-traditional/metro-train-bangalore-green-line.webp",
          item: "Exterior Train Branding",
          about:
            "Bangalore Metro Train Exterior Branding is available as a full train wrap on the exterior of the train. Branding can be placed on trains from the Green Line (6 coaches) and Purple Line (6 coaches), offering 5300 sq. ft. of ad space per train. The Purple Line (Nagasandra - Silk Institute - 37 stations) runs an average of 13 to 14 trips per day, while the Green Line (Whitefield Kadugodi - Challaghatta - 32 stations) operates approximately 16 to 17 trips daily.",
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