import React from "react";
import Insidepage from "../Insidepage";
import hindustantimesDelhi from "../../../assets/Newspaper/hindustan.jpg";
import ScrollToTop from "../../ScrollToTop";

function HindustantimesDelhi() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/newspaper-custom-ad.jpg?updatedAt=1744961691209",
      item: "Custom Sized Ads",
      about:
        "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
      price: "5,920 Per Sq Cm",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744961691212",
      item: "Quarter Page",
      about:
        "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
      price: "24,27,200 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.jpg?updatedAt=1744961691204",
      item: "Half Page",
      about:
        "Half Page Newspaper Ads will cover half of the page and can be displayed on any page of the newspaper. Half Page Ads can be placed either horizontally or vertically across the page and have a total area of approx. 823 sq. cm of ad space. Compared to Quater Page Ads, Half Page Ads will have more ad space, in which advertisers can customize the content and make them eye-catching to the audience.",
      price: "49,13,600 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-full-page.jpg?updatedAt=1744961691282",
      item: "Full Page",
      about:
        "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
      price: "1,02,17,920 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744961691190",
      item: "Jacket Front Side",
      about:
        "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
      price: "1,72,08,220 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-fullpage.jpg?updatedAt=1744961691193",
      item: "Jacket Back Side",
      about:
        "Jacket Back Side Ads will be displayed on the back side of the extra page that is added to the newspaper's front page. Jacket Back Side Ads cover the entire page with a total area of approx. 1726 sq cm. As the availability of Jacket Back Side Ad only is comparatively rare, advertisers prefer to take Jacket Both Side Ads.",
      price: "1,72,08,220 Per Insert",
    },
    {
      cardImage:
        "",
      item: "Jacket Both Side",
      about:
        "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
      price: "3,44,16,440 Per Insert",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in Hindustan Times, Delhi"}
        image={hindustantimesDelhi}
        title={"About Advertising in Hindustan Times, Delhi : "}
        description={
          "Hindustan Times, Delhi, English with a circulation of around 686418 is one of the most popular English newspaper. Hindustan Times, Delhi, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
        }
        users={"686.4K Circulation"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default HindustantimesDelhi;
