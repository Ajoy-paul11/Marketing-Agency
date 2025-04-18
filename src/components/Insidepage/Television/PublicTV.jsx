import React from 'react'
import Insidepage from '../Insidepage';
import publictv from "../../../assets/TV/publictv.jpg"

function PublicTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "242 Per Second",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-Lsize-ad.jpg?updatedAt=1744958996926",
          item: "L Band",
          about:
            "L Band is a highly popular advertising format in television. L-Shaped ads are effective in capturing viewers' attention, as they naturally dominate the screen's visual space.",
          price: "2,420 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Public TV"}
            image={publictv}
            title={"About Advertising in Public TV : "}
            description={
              "A news channel for the people, Public Tv, launched with a brand core motto that says it is the channel of all its viewer. It delivers breaking news and trending stories from all genres which engages a huge number of viewers. Advertising with them powers up your brand by boosting brand visibility."
            }
            users={"39.2M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default PublicTV