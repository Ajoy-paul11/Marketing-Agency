import React from 'react'
import Insidepage from '../Insidepage'
import hinduMangaluru from '../../../assets/Newspaper/hindu.jpg'

function HinduMangaluru() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Custom Sized Ads",
          about:
            "Custom Sized Ads are display advertisements that are showcased in newspapers as per the advertiser's requirement. These ads are customizable based on the advertiser's budget and are displayed on the front page, third page, back page, and any pages. Custom Sized Ads have a minimum size of approx. 240sq.cm on the front page and approx. 20sq. cm on all other pages.",
          price: " 150 Per Sq Cm",
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Quarter Page",
          about:
            "Quarter Page Newspaper Ads are display ads that will cover a quarter (1/4) of the newspaper. Quarter Page Ads will take up approx. 400sq. cm for ad space.",
          price: "60,000 Per Insert"
        },
        {
          cardImage:
            "https://images.pexels.com/photos/9832700/pexels-photo-9832700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            item: "Jacket Front Side",
            about:
              "Jacket Page Ads are extra pages added before the front page of the newspaper. Jacket Front Side Ads are displayed on the front side of the extra page and will include advertisements that will cover an area of approx. 1579.2 sq. cm space, excluding the Masthead/Title Head",
            price: "3,21,750 Per Insert"
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
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

export default HinduMangaluru