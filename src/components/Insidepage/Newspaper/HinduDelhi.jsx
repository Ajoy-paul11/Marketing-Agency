import React from "react";
import Insidepage from "../Insidepage";
import hinduDelhi from "../../../assets/Newspaper/hindu.jpg";
import ScrollToTop from "../../ScrollToTop";

function HinduDelhi() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/newspaper-custom-ad.jpg?updatedAt=1744961691209",
      item: "Custom Sized Ads",
      about:
        "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
      price: "765 Per Sq Cm",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744961691212",
      item: "Quarter Page",
      about:
        "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
      price: "3,06,000 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.jpg?updatedAt=1744961691204",
      item: "Half Page",
      about:
        "Half Page Newspaper Ads will cover half of the page and can be displayed on any page of the newspaper. Half Page Ads can be placed either horizontally or vertically across the page and have a total area of approx. 823 sq. cm of ad space. Compared to Quater Page Ads, Half Page Ads will have more ad space, in which advertisers can customize the content and make them eye-catching to the audience.",
      price: "6,31,125 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-full-page.jpg?updatedAt=1744961691282",
      item: "Full Page",
      about:
        "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
      price: "12,87,495 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744961691190",
      item: "Jacket Front Side",
      about:
        "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
      price: "12,87,4951 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-fullpage.jpg?updatedAt=1744961691193",
      item: "Jacket Back Side",
      about:
        "Jacket Back Side Ads will be displayed on the back side of the extra page that is added to the newspaper's front page. Jacket Back Side Ads cover the entire page with a total area of approx. 1726 sq cm. As the availability of Jacket Back Side Ad only is comparatively rare, advertisers prefer to take Jacket Both Side Ads.",
      price: "12,87,495 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/Newspaper%20Jacket%20both%20side%20865%20x%20500.jpg?updatedAt=1745241893970",
      item: "Jacket Both Side",
      about:
        "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
      price: "32,18,738 Per Insert",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in The Hindu, Delhi"}
        image={hinduDelhi}
        title={"About Advertising in The Hindu, Delhi : "}
        description={
          "The Hindu, Delhi, English with a circulation of around 102740 is one of the most popular English newspaper. The Hindu, Delhi, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
        }
        users={"102.7K Circulation"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default HinduDelhi;
