import React from 'react'
import Insidepage from '../Insidepage'
import sudha from '../../../assets/Magazine/sudha.jpg'

function SudhaMagazine() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-half-page.jpg?updatedAt=1744885365832",
          item: "Half Page",
          about:
            "Half Page Ads occupy half of a magazine page and can be placed on any page. These ads provide ample space for advertisers to customize the content, making it visually appealing to the audience.",
          price: "42,350 Per Insert",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-full-page.jpg?updatedAt=1744952126763",
          item: "Full Page",
          about:
            "Full Page Ads occupy the entire page of the magazine. There are two types of Full Page Ads: Bleed Ads and Non-Bleed Ads. In Bleed Ads, the brand's creative artwork extends to the edge of the page, without any margins. In Non-Bleed Ads, the artwork is surrounded by a border, leaving a margin on all four sides, and does not reach the edge of the page.",
          price: " 72,600 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-doublespread.jpg?updatedAt=1744885366127",
          item: "Double Spread",
          about:
            "Double Spread Ads appear across two adjacent pages of the magazine, covering both pages when the publication is open. These are high-impact ads, and when positioned in the center of the magazine, they are referred to as the Center Spread.",
          price: "1,21,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Magazine/magazine-cover.jpg?updatedAt=1744885365796",
          item: "Cover Page",
          about:
            "Cover Page Ads are featured on the magazine’s cover. These include various types: Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads appear on the outer side of the back cover, Inside Back Cover Ads are displayed on the inner side of the back cover, and Inside Front Cover Ads are shown on the inner side of the front cover.",
          price: "90,750 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Sudha Magazine"}
            image={sudha}
            title={"About Advertising in Sudha Magazine : "}
            description={
              "Sudha is a Kannada magazine that is distributed Weekly covering specialised topics, in which ads are easily noticeable, provide a wide reach attracting attention. Compared to newspapers, Magazine Ads are a more budgeted option way to engage audiences based on their interest. These ads help promote visibility and target a wide audience delivering a high impact."
            }
            users={"98.5K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default SudhaMagazine