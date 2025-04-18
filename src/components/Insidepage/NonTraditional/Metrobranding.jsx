import React from 'react'
import Insidepage from '../Insidepage';
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function Metrobranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/metro-inside-branding.jpg?updatedAt=1744953659600",
          item: "Interior Train Branding",
          about:
            "Bengaluru Metro Train Interior Branding involves placing advertisements on the inner panels of the trains. A total of 58 trains are available, each consisting of 6 coaches and equipped with 28 interior ad panels. On average, each coach includes 4 to 5 panels, offering ample visibility for your brand inside the Bengaluru Metro.",
          price: "7,97,500 Per Month",
        },
        {
          cardImage:
            "https://smartads.in/resources/assets/uploads/product_group/non-traditional/metro-train-bangalore-green-line.webp",
          item: "Exterior Train Branding",
          about:
            "Bangalore Metro Train Exterior Branding offers a full train wrap across the outer surface of the train. Ads can be placed on trains from both the Green Line and the Purple Line, each comprising 6 coaches and providing up to 5300 sq. ft. of advertising space per train. The Purple Line (Nagasandra to Silk Institute, covering 37 stations) operates about 13 to 14 trips daily, while the Green Line (Whitefield Kadugodi to Challaghatta, covering 32 stations) runs around 16 to 17 trips per day.",
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