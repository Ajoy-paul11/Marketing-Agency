import React from 'react'
import Insidepage from '../Insidepage'
import grihshoba from "../../../assets/Magazine/grihshobha.jpg"

function Grihshoba() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Half Page",
          about:
            "Half Page Ads will cover half of the page and can be displayed on any page of the magazine. These ads will cover half the page, in which advertisers can customize the content and make them eye-catching to the audience.",
          price: " 3,15,000 Per Insert",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads cover an entire page of the newspaper. Full Page Ads can be placed anywhere on the newspaper, other than the front page because the front page always carries the latest news content. Full Page Ads will provide advertisers with good brand visibility as it takes up a large area in the newspaper, i.e. approx. 1726sq. cm.",
          price: "5,03,762 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Double Spread",
          about:
            "Double Spread Ads are displayed on two consecutive pages of the magazine, covering both pages of an open publication. Double Spread Ads are high-impact ads, and if they are displayed in the center of the magazine, they are called as Center Spread.",
          price: "8,00,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Cover Page",
          about:
            "Cover Page Ads are displayed on the cover page of a magazine. There are different types of Cover Page Ads, Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads will be displayed on the outer part of the back cover page of the magazine. Inside Back Cover Ads will be displayed on the inside part of the back cover page of the magazine. Inside Front Cover Ads will be displayed on the inside part of the front cover page of the magazine.",
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