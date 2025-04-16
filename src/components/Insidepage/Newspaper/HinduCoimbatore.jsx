import React from "react";
import Insidepage from "../Insidepage";
import hinduCoimbatore from "../../../assets/Newspaper/hindu.jpg";
import ScrollToTop from "../../ScrollToTop";

function HinduCoimbatore() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/newspaper-cusom-ad2.jpg?updatedAt=1744783526936",
      item: "Custom Sized Ads",
      about:
        "Custom Sized Ads are display advertisements featured in newspapers according to the advertiser’s specific requirements. These ads are flexible in size, tailored to fit the advertiser’s budget, and can appear on the front page, third page, back page, or any other page. The minimum size for a Custom Sized Ad is approximately 240 sq. cm on the front page and around 20 sq. cm on all other pages.",
      price: "1,055 Per Sq Cm",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-quarter-page.jpg?updatedAt=1744782773705",
      item: "Quarter Page",
      about:
        "Quarter Page Newspaper Ads are display advertisements that occupy one-fourth (1/4) of a newspaper page. These ads typically cover an area of approximately 400 sq. cm.",
      price: "4,22,000 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-half-page.webp?updatedAt=1744782772431",
      item: "Half Page",
      about:
        "Half Page Newspaper Ads occupy 50% of a newspaper page and can be placed on any page. These ads can be positioned either horizontally or vertically and typically cover an area of approximately 823 sq. cm. Compared to Quarter Page Ads, Half Page Ads offer more space, allowing advertisers greater flexibility to customize content and create visually appealing designs that capture the audience's attention.",
      price: "8,70,375 Per Insert",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Full Page",
      about:
        "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
      price: "17,75,565 Per Insert",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Jacket Front Side",
      about:
        "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
      price: "22,19,456 Per Insert",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Jacket Back Side",
      about:
        "Jacket Back Side Ads appear on the reverse side of the extra page added before the newspaper’s front page. These ads cover the entire page, occupying approximately 1,726 sq. cm of space. Since standalone Jacket Back Side Ads are relatively rare, advertisers often opt for Jacket Both Side Ads instead.",
      price: "22,19,4561 Per Insert",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Newspaper/news-jacket-backpage.jpg?updatedAt=1744782772696",
      item: "Jacket Both Side",
      about:
        "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
      price: "44,38,913 Per Insert",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <ScrollToTop />
      <Insidepage
        headerText={"Advertising in The Hindu, Coimbatore"}
        image={hinduCoimbatore}
        title={"About Advertising in The Hindu, Coimbatore : "}
        description={
          "One of India’s most popular English newspapers launched with the tagline of Yesterday, Today, and Tomorrow, providing news every time, The Hindu, Coimbatore has always been ahead in providing information to all its readers in the Manchester of South India. It has successfully made the news reach every house through them."
        }
        users={"77.3K Circulation"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default HinduCoimbatore;
