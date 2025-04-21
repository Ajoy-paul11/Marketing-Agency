import React from 'react'
import Insidepage from '../Insidepage'
import toiHyderabad from '../../../assets/Newspaper/toi.jpg'

function TOIHyderabad() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/newspaper-custom-ad.jpg?updatedAt=1744961691209",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements featured in newspapers according to the advertiser’s specific requirements. These ads are flexible in size, tailored to fit the advertiser’s budget, and can appear on the front page, third page, back page, or any other page. The minimum size for a Custom Sized Ad is approximately 240 sq. cm on the front page and around 20 sq. cm on all other pages.",
          price: "1,350 Per Sq Cm",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744961691212",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display advertisements that occupy one-fourth (1/4) of a newspaper page. These ads typically cover an area of approximately 400 sq. cm.",
          price: "5,40,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.jpg?updatedAt=1744961691204",
          item: "Half Page",
          about:
            "Half Page Newspaper Ads occupy 50% of a newspaper page and can be placed on any page. These ads can be positioned either horizontally or vertically and typically cover an area of approximately 823 sq. cm. Compared to Quarter Page Ads, Half Page Ads offer more space, allowing advertisers greater flexibility to customize content and create visually appealing designs that capture the audience's attention.",
          price: "11,13,750 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-full-page.jpg?updatedAt=1744961691282",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
          price: "23,16,600 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744961691190",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
            price: "29,17,200 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-fullpage.jpg?updatedAt=1744961691193",
            item: "Jacket Back Side",
            about:
              "Jacket Back Side Ads appear on the reverse side of the extra page added before the newspaper’s front page. These ads cover the entire page, occupying approximately 1,726 sq. cm of space. Since standalone Jacket Back Side Ads are relatively rare, advertisers often opt for Jacket Both Side Ads instead.",
            price: "29,17,200 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/Newspaper%20Jacket%20both%20side%20865%20x%20500.jpg?updatedAt=1745241893970",
            item: "Jacket Both Side",
            about:
              "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
            price: "58,34,400 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-innovative-ad.jpg?updatedAt=1744961691287",
            item: "Innovative Ads",
            about:
                "It is the most creative way to represent a brand idea or advertisement across its target audience. This ad compiled a story that is uniquely presented to create a long-lasting impression on the readers. Prices for these types of ads may vary depending on the size and innovation put together inside the ad, to get the estimated cost, clients are requested to send the innovative creative to us at help@themediaant.com. For more ideas or sample ads, you can slide into the execution detail section, and find the relevant information under the other related details section.",
            price: "On Request"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Times of India, Hyderabad"}
            image={toiHyderabad}
            title={"About Advertising in Times of India, Hyderabad : "}
            description={
              "Times Of India, Hyderabad, English with a circulation of around 138364 is one of the most popular English newspaper. Times Of India, Hyderabad, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
            }
            users={"138.4K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TOIHyderabad