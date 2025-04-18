import React from 'react'
import Insidepage from '../Insidepage'
import grihshoba from "../../../assets/Magazine/grihshobha.jpg"

function Grihshoba() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-half-page.jpg?updatedAt=1744885365832",
          item: "Half Page",
          about:
            "Half Page Ads occupy half of a magazine page and can be placed on any page. These ads provide ample space for advertisers to customize the content, making it visually appealing to the audience.",
          price: " 3,15,000 Per Insert",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-full-page.jpg?updatedAt=1744952126763",
          item: "Full Page",
          about:
            "Full Page Ads occupy the entire page of the magazine. There are two types of Full Page Ads: Bleed Ads and Non-Bleed Ads. In Bleed Ads, the brand's creative artwork extends to the edge of the page, without any margins. In Non-Bleed Ads, the artwork is surrounded by a border, leaving a margin on all four sides, and does not reach the edge of the page.",
          price: "5,03,762 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-doublespread.jpg?updatedAt=1744885366127",
          item: "Double Spread",
          about:
            "Double Spread Ads appear across two adjacent pages of the magazine, covering both pages when the publication is open. These are high-impact ads, and when positioned in the center of the magazine, they are referred to as the Center Spread.",
          price: "8,00,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-cover.jpg?updatedAt=1744885365796",
          item: "Cover Page",
          about:
            "Cover Page Ads are featured on the magazine’s cover. These include various types: Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads appear on the outer side of the back cover, Inside Back Cover Ads are displayed on the inner side of the back cover, and Inside Front Cover Ads are shown on the inner side of the front cover.",
          price: "6,85,000 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Grihshobha Magazine"}
            image={grihshoba}
            title={"About Advertising in Grihshobha Magazine : "}
            description={
              "Grihshobha is one of the most popular magazines for women both at home and at work. Topics include managing finances, balancing traditions, building effective relationship, parenting, work trends, health, lifestyle and fashion, every article and every issue is crafted to enhance a positive awareness of her independence."
            }
            users={"450K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default Grihshoba