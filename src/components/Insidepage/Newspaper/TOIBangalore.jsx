import React from 'react'
import Insidepage from '../Insidepage'
import toiBangalore from '../../../assets/Newspaper/toi.jpg'

function TOIBangalore() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/newspaper-custom-ad.jpg?updatedAt=1744961691209",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements featured in newspapers according to the advertiser’s specific requirements. These ads are flexible in size, tailored to fit the advertiser’s budget, and can appear on the front page, third page, back page, or any other page. The minimum size for a Custom Sized Ad is approximately 240 sq. cm on the front page and around 20 sq. cm on all other pages.",
          price: "3,690 Per Sq Cm",
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744961691212",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display advertisements that occupy one-fourth (1/4) of a newspaper page. These ads typically cover an area of approximately 400 sq. cm.",
          price: "14,76,000 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.jpg?updatedAt=1744961691204",
          item: "Half Page",
          about:
            "Half Page Newspaper Ads occupy 50% of a newspaper page and can be placed on any page. These ads can be positioned either horizontally or vertically and typically cover an area of approximately 823 sq. cm. Compared to Quarter Page Ads, Half Page Ads offer more space, allowing advertisers greater flexibility to customize content and create visually appealing designs that capture the audience's attention.",
          price: "30,44,250 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-full-page.jpg?updatedAt=1744961691282",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
          price: "63,32,040 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744961691190",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
            price: " 99,78,540 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-fullpage.jpg?updatedAt=1744961691193",
            item: "Jacket Back Side",
            about:
              "Jacket Back Side Ads appear on the reverse side of the extra page added before the newspaper’s front page. These ads cover the entire page, occupying approximately 1,726 sq. cm of space. Since standalone Jacket Back Side Ads are relatively rare, advertisers often opt for Jacket Both Side Ads instead.",
            price: " 99,78,540 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/Newspaper%20Jacket%20both%20side%20865%20x%20500.jpg?updatedAt=1745241893970",
            item: "Jacket Both Side",
            about:
              "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
            price: "1,99,57,080 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/Newspaper%20Vertical%20Bookmark%20Ad%20865%20x%20500.jpg?updatedAt=1745241894067",
            item: "Vertical Bookmark Ads",
            about: 
                "The Times of India offers innovative Half Page Vertical Bookmark Ads that combine a prominent half-page space with an additional vertical strip, ensuring high visibility on any page of the newspaper. With a total area of approximately 1,021.8 sq. cm, these vertical strip ads provide advertisers with greater customization options. Compared to standard Half Page Ads, they offer more ad space, allowing for more engaging and visually appealing content.",
            price: "10,41,561 Per Insert"
        },
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Newspaper/news-innovative-ad.jpg?updatedAt=1744961691287",
            item: "Innovative Ads",
            about:
                "This is one of the most creative ways to showcase a brand message or advertisement to the target audience. The ad presents a uniquely crafted story designed to leave a lasting impression on readers. Pricing for these ads may vary based on their size and the level of innovation involved. For an estimated cost, please contact us.",
            price: "On Request"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Times Of India, Bangalore"}
            image={toiBangalore}
            title={"About Advertising in Times Of India, Bangalore : "}
            description={
              "Times Of India, Bangalore, English with a circulation of around 366465 is one of the most popular English newspaper. Times Of India, Bangalore, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
            }
            users={"366.5K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TOIBangalore