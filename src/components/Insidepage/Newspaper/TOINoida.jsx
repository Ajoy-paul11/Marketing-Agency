import React from 'react'
import Insidepage from '../Insidepage'
import toiNoida from '../../../assets/Newspaper/toi.jpg'

function TOINoida() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements featured in newspapers according to the advertiser’s specific requirements. These ads are flexible in size, tailored to fit the advertiser’s budget, and can appear on the front page, third page, back page, or any other page. The minimum size for a Custom Sized Ad is approximately 240 sq. cm on the front page and around 20 sq. cm on all other pages.",
          price: "350 Per Sq Cm",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display advertisements that occupy one-fourth (1/4) of a newspaper page. These ads typically cover an area of approximately 400 sq. cm.",
          price: "1,40,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Half Page",
          about:
            "Half Page Newspaper Ads occupy 50% of a newspaper page and can be placed on any page. These ads can be positioned either horizontally or vertically and typically cover an area of approximately 823 sq. cm. Compared to Quarter Page Ads, Half Page Ads offer more space, allowing advertisers greater flexibility to customize content and create visually appealing designs that capture the audience's attention.",
          price: "2,88,750 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Full Page",
          about:
            "Full Page Newspaper Ads occupy an entire page of the newspaper. These ads can be placed on any page except the front page, as it is reserved for the latest news content. With a large ad space of approximately 1,726 sq. cm, Full Page Ads offer advertisers excellent brand visibility.",
          price: "6,00,600 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are additional pages inserted before the newspaper’s front page. The front side of the jacket carries Jacket Front Side Ads, which typically occupy around 1,579.2 sq. cm of space, excluding the Masthead or Title Head.",
            price: "7,72,200 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Back Side",
            about:
              "Jacket Back Side Ads appear on the reverse side of the extra page added before the newspaper’s front page. These ads cover the entire page, occupying approximately 1,726 sq. cm of space. Since standalone Jacket Back Side Ads are relatively rare, advertisers often opt for Jacket Both Side Ads instead.",
            price: "7,72,200 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Both Side",
            about:
              "Jacket Both Sides Ads are featured on the extra page placed at the front of the newspaper, with advertisements displayed on both the front and back sides. This format offers maximum visibility and helps enhance brand recall for advertisers.",
            price: "15,44,400 Per Insert"
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Times Of India, Noida"}
            image={toiNoida}
            title={"About Advertising in Times Of India, Noida : "}
            description={
              "Times Of India, Noida, English with a circulation of around 17049 is one of the most popular English newspaper. Times Of India, Noida, English helps build trustworthiness through association covering different topics. This newspaper helps showcase ads to a wide audience, improving visibility and delivering high impact by prompting potential customers in making purchases."
            }
            users={"366.5K Circulation"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TOINoida