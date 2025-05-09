import React from 'react'
import Insidepage from '../Insidepage';
import colors from "../../../assets/TV/colors.jpg"

function ColorsTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "18,876 Per Second",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-Lsize-ad.jpg?updatedAt=1744958996926",
          item: "L Band",
          about:
            "L Band is a highly popular advertising format in television. L-Shaped ads are effective in capturing viewers' attention, as they naturally dominate the screen's visual space.",
          price: "63,480 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Colors"}
            image={colors}
            title={"About Advertising in Colors : "}
            description={
              "The channel which celebrates the color of every relationship, Colors TV is the go-to name for entertainment. Every show is made to inspire, from serials to reality shows each and every show on this channel is massively famous and has a very high engagement. Advertising with them powers up your brand by boosting brand visibility."
            }
            users={"119.3M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default ColorsTV