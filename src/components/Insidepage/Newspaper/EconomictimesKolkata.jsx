import React from 'react'
import Insidepage from '../Insidepage' 
import economictimes from '../../../assets/Newspaper/economic.jpg'

function EconomictimesKolkata() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
          price: " 715 Per Sq Cm",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
          price: "2,86,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Half Page",
          about:
            "Half Page Newspaper Ads will cover half of the page and can be displayed on any page of the newspaper. Half Page Ads can be placed either horizontally or vertically across the page and have a total area of approx. 823 sq. cm of ad space. Compared to Quater Page Ads, Half Page Ads will have more ad space, in which advertisers can customize the content and make them eye-catching to the audience.",
          price: "5,89,875 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads cover an entire page of the newspaper. Full Page Ads can be placed anywhere on the newspaper, other than the front page because the front page always carries the latest news content. Full Page Ads will provide advertisers with good brand visibility as it takes up a large area in the newspaper, i.e. approx. 1726sq. cm.",
          price: " 12,26,940 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are extra pages added before the front page of the newspaper. Jacket Front Side Ads are displayed on the front side of the extra page and will include advertisements that will cover an area of approx. 1579.2 sq. cm space, excluding the Masthead/Title Head",
            price: "19,47,660 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Back Side",
            about:
              "Jacket Back Side Ads will be displayed on the back side of the extra page that is added to the newspaper's front page. Jacket Back Side Ads cover the entire page with a total area of approx. 1726 sq cm. As the availability of Jacket Back Side Ad only is comparatively rare, advertisers prefer to take Jacket Both Side Ads.",
            price: "19,47,660 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Both Side",
            about:
              "Jacket Both Sides Ads will be displayed on the extra page that is added to the front of the newspaper. Advertisers can choose to display their advertisement on both sides of the extra page. Jacket Both Sides will provide maximum visibility and will help increase brand recall.",
            price: "38,95,320 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Economic Times, Kolkata"}
            image={economictimes}
            title={"About Advertising in Economic Times, Kolkata : "}
            description={
              "Catering to the cultural capital and commercial centre of India, Economic Times is a trusted brand when it comes to business and finance-related news in the city. Advertising to this edition will be able to gain exposure to influential decision makers and align itself with the reputation of the paper by engaging the readers in the city with captivating content."
            }
            users={"22.7K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default EconomictimesKolkata