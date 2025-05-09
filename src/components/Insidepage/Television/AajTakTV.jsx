import React from 'react'
import Insidepage from '../Insidepage';
import aajtak from "../../../assets/TV/aajtak.jpg"

function AajTakTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "1,606 Per Second",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-Lsize-ad.jpg?updatedAt=1744958996926",
          item: "L Band",
          about:
            "L Band is a highly popular advertising format in television. L-Shaped ads are effective in capturing viewers' attention, as they naturally dominate the screen's visual space.",
          price: "20,700 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Aaj Tak"}
            image={aajtak}
            title={"About Advertising in Aaj Tak : "}
            description={
              "The channel of every household, Aaj Tak is considered one of the first choice news channels by the viewer for getting accurate information regarding any event. It covers the latest news in Politics, Entertainment, Bollywood, Business, and Sports. Advertising with them powers up your brand by boosting brand visibility and creating awareness."
            }
            users={"178.3M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default AajTakTV