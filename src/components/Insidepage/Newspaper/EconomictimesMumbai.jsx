import React from "react";
import Insidepage from "../Insidepage";
import economictimes from "../../../assets/Newspaper/economic.jpg";
import ScrollToTop from "../../ScrollToTop";

function EconomictimesMumbai() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/newspaper-cusom-ad2.jpg?updatedAt=1744783526936",
      item: "Custom Sized Ads",
      about:
        "Custom Sized Ads are display advertisements featured in newspapers according to the advertiser’s specific requirements. These ads are flexible in size, tailored to fit the advertiser’s budget, and can appear on the front page, third page, back page, or any other page. The minimum size for a Custom Sized Ad is approximately 240 sq. cm on the front page and around 20 sq. cm on all other pages.",
      price: "2,695 Per Sq Cm",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744782773705",
      item: "Quarter Page",
      about:
        "Quarter Page Newspaper Ads are display advertisements that occupy one-fourth (1/4) of a newspaper page. These ads typically cover an area of approximately 400 sq. cm.",
      price: "10,78,000 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.webp?updatedAt=1744782772431",
      item: "Half Page",
      about:
        "Half Page Newspaper Ads occupy 50% of a newspaper page and can be placed on any page. These ads can be positioned either horizontally or vertically and typically cover an area of approximately 823 sq. cm. Compared to Quarter Page Ads, Half Page Ads offer more space, allowing advertisers greater flexibility to customize content and create visually appealing designs that capture the audience's attention.",
      price: "22,23,375 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-full-page.webp?updatedAt=1744782773696",
      item: "Full Page",
      about:
        "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
      price: "46,24,620 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-frontpage.jpg?updatedAt=1744782772607",
      item: "Jacket Front Side",
      about:
        "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
      price: "69,49,800 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-backpage.jpg?updatedAt=1744782772696",
      item: "Jacket Back Side",
      about:
        "Jacket Back Side Ads will be displayed on the back side of the extra page that is added to the newspaper's front page. Jacket Back Side Ads cover the entire page with a total area of approx. 1726 sq cm. As the availability of Jacket Back Side Ad only is comparatively rare, advertisers prefer to take Jacket Both Side Ads.",
      price: "69,49,800 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-fullpage.jpg?updatedAt=1744782772478",
      item: "Jacket Both Side",
      about:
        "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
      price: "1,38,99,600 Per Insert",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in Economic Times, Mumbai"}
        image={economictimes}
        title={"About Advertising in Economic Times, Mumbai : "}
        description={
          "Catering specifically to the financial and commercial hub of India, Economic Times Mumbai is widely sought after in the city. Having a diverse industry landscape, the city’s edition of the Economic Times is a great way to improve visibility among readers. With a highly engaged audience involved in finance and business."
        }
        users={"195K Circulation"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default EconomictimesMumbai;
