import React from 'react'
import Insidepage from '../Insidepage'
import economictimes from '../../../assets/Newspaper/economic.jpg'

function EconomictimesDelhi() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
          price: "2,605 Per Sq Cm",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
          price: "10,42,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Half Page",
          about:
            "Half Page Newspaper Ads will cover half of the page and can be displayed on any page of the newspaper. Half Page Ads can be placed either horizontally or vertically across the page and have a total area of approx. 823 sq. cm of ad space. Compared to Quater Page Ads, Half Page Ads will have more ad space, in which advertisers can customize the content and make them eye-catching to the audience.",
          price: "21,49,125 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads cover an entire page of the newspaper. Full Page Ads can be placed anywhere on the newspaper, other than the front page because the front page always carries the latest news content. Full Page Ads will provide advertisers with good brand visibility as it takes up a large area in the newspaper, i.e. approx. 1726sq. cm.",
          price: "44,70,180 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are extra pages added before the front page of the newspaper. Jacket Front Side Ads are displayed on the front side of the extra page and will include advertisements that will cover an area of approx. 1579.2 sq. cm space, excluding the Masthead/Title Head",
            price: "68,55,420 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Back Side",
            about:
              "Jacket Back Side Ads will be displayed on the back side of the extra page that is added to the newspaper's front page. Jacket Back Side Ads cover the entire page with a total area of approx. 1726 sq cm. As the availability of Jacket Back Side Ad only is comparatively rare, advertisers prefer to take Jacket Both Side Ads.",
            price: "68,55,420 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Both Side",
            about:
              "Jacket Both Sides Ads will be displayed on the extra page that is added to the front of the newspaper. Advertisers can choose to display their advertisement on both sides of the extra page. Jacket Both Sides will provide maximum visibility and will help increase brand recall.",
            price: "1,37,10,840 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Economic Times, Delhi"}
            image={economictimes}
            title={"About Advertising in Economic Times, Delhi : "}
            description={
              "As one of India's leading business newspapers, the Economic Times Delhi Edition offers an unparalleled platform to connect with the dynamic community in Delhi. Delhi serves as an epicentre for politics and business, making this vibrant hub a prime spot for readers. Ads here engage readers and gain exposure to decision-makers, and industry leaders in various sectors."
            }
            users={"45.3K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default EconomictimesDelhi