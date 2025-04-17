import React from 'react'
import Insidepage from '../Insidepage'
import vogue from '../../../assets/Magazine/vogue.jpg'

function VogueMagazine() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Ads occupy the entire page of the magazine. There are two types of Full Page Ads: Bleed Ads and Non-Bleed Ads. In Bleed Ads, the brand's creative artwork extends to the edge of the page, without any margins. In Non-Bleed Ads, the artwork is surrounded by a border, leaving a margin on all four sides, and does not reach the edge of the page.",
          price: "3,39,480 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Double Spread",
          about:
            "Double Spread Ads appear across two adjacent pages of the magazine, covering both pages when the publication is open. These are high-impact ads, and when positioned in the center of the magazine, they are referred to as the Center Spread.",
          price: "6,78,960 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Cover Page",
          about:
            "Cover Page Ads are featured on the magazine’s cover. These include various types: Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads appear on the outer side of the back cover, Inside Back Cover Ads are displayed on the inner side of the back cover, and Inside Front Cover Ads are shown on the inner side of the front cover.",
          price: "4,41,324 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Vogue Magazine"}
            image={vogue}
            title={"About Advertising in Vogue Magazine : "}
            description={
              "When it comes to fashion, beauty, and lifestyle, no other magazine comes close to the prestige Vogue holds. Known for its unparalleled focus on high fashion, luxury, and style, Vogue caters to the affluent crowd who are fashion-conscious."
            }
            users={"73.5K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default VogueMagazine