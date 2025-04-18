import React from 'react'
import Insidepage from '../Insidepage'
import travelLeisure from "../../../assets/Magazine/travel.jpg"

function TravelLeisure() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-half-page.jpg?updatedAt=1744885365832",
          item: "Half Page",
          about:
            "Half Page Ads occupy half of a magazine page and can be placed on any page. These ads provide ample space for advertisers to customize the content, making it visually appealing to the audience.",
          price: "1,50,000 Per Insert",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-full-page.jpg?updatedAt=1744952126763",
          item: "Full Page",
          about:
            "Full Page Ads occupy the entire page of the magazine. There are two types of Full Page Ads: Bleed Ads and Non-Bleed Ads. In Bleed Ads, the brand's creative artwork extends to the edge of the page, without any margins. In Non-Bleed Ads, the artwork is surrounded by a border, leaving a margin on all four sides, and does not reach the edge of the page.",
          price: "2,50,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-doublespread.jpg?updatedAt=1744885366127",
          item: "Double Spread",
          about:
            "Double Spread Ads appear across two adjacent pages of the magazine, covering both pages when the publication is open. These are high-impact ads, and when positioned in the center of the magazine, they are referred to as the Center Spread.",
          price: "7,50,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-cover.jpg?updatedAt=1744885365796",
          item: "Cover Page",
          about:
            "Cover Page Ads are featured on the magazine’s cover. These include various types: Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads appear on the outer side of the back cover, Inside Back Cover Ads are displayed on the inner side of the back cover, and Inside Front Cover Ads are shown on the inner side of the front cover.",
          price: "5,15,000 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Travel + Leisure Magazine"}
            image={travelLeisure}
            title={"About Advertising in Travel + Leisure Magazine : "}
            description={
              "Travel+Leisure India & South Asia entered a strategic alliance&#160;with Jet Airways, offering an exclusive subscription offer in all copies&#160;of Travel+Leisure India & South Asia edition available in business class on&#160;over 550 flights (including domestic and international services)."
            }
            users={"148K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TravelLeisure