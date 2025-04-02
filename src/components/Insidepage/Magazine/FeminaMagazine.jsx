import React from 'react'
import Insidepage from '../Insidepage'
import femina from '../../../assets/Magazine/femina.png'

function FeminaMagazine() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Ads will cover an entire page of the magazine. There are two types of Full Page Ads, i.e., Bleed Ad and Non-Bleed Ads. In Bleed Ads, the brands creative artwork will extend up to the edge or border of the page with no margins. In Non-Bleed Ads, brand artwork will be covered with a border leaving a margin on all four sides and these ads will not extend to the edge of the page.",
          price: "1,79,616 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Double Spread",
          about:
            "Double Spread Ads are displayed on two consecutive pages of the magazine, covering both pages of an open publication. Double Spread Ads are high-impact ads, and if they are displayed in the center of the magazine, they are called as Center Spread.",
          price: "3,59,231 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Cover Page",
          about:
            "Cover Page Ads are displayed on the cover page of a magazine. There are different types of Cover Page Ads, Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads will be displayed on the outer part of the back cover page of the magazine. Inside Back Cover Ads will be displayed on the inside part of the back cover page of the magazine. Inside Front Cover Ads will be displayed on the inside part of the front cover page of the magazine.",
          price: "2,24,520 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Femina Magazine"}
            image={femina}
            title={"About Advertising in Femina Magazine : "}
            description={
              "Femina is a English magazine that is distributed Fortnightly covering specialised topics, in which ads are easily noticeable, provide a wide reach attracting attention. Compared to newspapers, Magazine Ads are a more budgeted option way to engage audiences based on their interest. These ads help promote visibility and target a wide audience delivering a high impact."
            }
            users={"178K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default FeminaMagazine