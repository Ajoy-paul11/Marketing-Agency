import React from "react";
import Insidepage from "../Insidepage";
import hinduMangaluru from "../../../assets/Newspaper/hindu.jpg";
import ScrollToTop from "../../ScrollToTop";

function HinduMangaluru() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/newspaper-custom-ad.jpg?updatedAt=1744961691209",
      item: "Custom Sized Ads",
      about:
        "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
      price: " 150 Per Sq Cm",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744961691212",
      item: "Quarter Page",
      about:
        "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
      price: "60,000 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744961691190",
      item: "Jacket Front Side",
      about:
        "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
      price: "3,21,750 Per Insert",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in The Hindu, Mangaluru"}
        image={hinduMangaluru}
        title={"About Advertising in The Hindu, Mangaluru : "}
        description={
          "The Hindu, Mangaluru, English with a circulation of around 12634 is one of the most popular English newspaper. The Hindu, Mangaluru, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
        }
        users={"12.6K Circulation"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default HinduMangaluru;
