import React from 'react'
import Insidepage from '../Insidepage'
import forbes from '../../../assets/Magazine/forbes.png'

function ForbesIndia() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads cover an entire page of the newspaper. Full Page Ads can be placed anywhere on the newspaper, other than the front page because the front page always carries the latest news content. Full Page Ads will provide advertisers with good brand visibility as it takes up a large area in the newspaper, i.e. approx. 1726sq. cm.",
          price: "3,60,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Double Spread",
          about:
            "Double Spread Ads are displayed on two consecutive pages of the magazine, covering both pages of an open publication. Double Spread Ads are high-impact ads, and if they are displayed in the center of the magazine, they are called as Center Spread.",
          price: "7,20,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Cover Page",
          about:
            "Cover Page Ads are displayed on the cover page of a magazine. There are different types of Cover Page Ads, Back Cover Ads, Inside Back Cover Ads, and Inside Front Cover Ads. Back Cover Ads will be displayed on the outer part of the back cover page of the magazine. Inside Back Cover Ads will be displayed on the inside part of the back cover page of the magazine. Inside Front Cover Ads will be displayed on the inside part of the front cover page of the magazine.",
          price: "4,50,000 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Forbes India Magazine"}
            image={forbes}
            title={"About Advertising in Forbes India Magazine : "}
            description={
              "Forbes India was launched in June 2009 and is one of the most sought-after business magazines. With approx. 85K circulations, Forbes India is released every fortnight and Advertising in Forbes India will help build recall and noticeability of brand products, services or seasonal offers to potential customers."
            }
            users={"75K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default ForbesIndia