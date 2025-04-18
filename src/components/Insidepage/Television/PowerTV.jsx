import React from 'react'
import Insidepage from '../Insidepage';
import powerTV from "../../../assets/TV/powertv.jpg"

function PowerTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "29 Per Second",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-Lsize-ad.jpg?updatedAt=1744958996926",
          item: "L Band",
          about:
            "L Band is a highly popular advertising format in television. L-Shaped ads are effective in capturing viewers' attention, as they naturally dominate the screen's visual space.",
          price: "290 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Power TV"}
            image={powerTV}
            title={"About Advertising in Power TV : "}
            description={
              "The channel that is filled with exuberant energy Power TV is a one-stop news destination. It revolves around empowering the public with unfiltered information, ensuring that every story holds the power to make a difference. Advertising with them for endorsement ensures maximum visibility for your brand and helps build credibility for your brand."
            }
            users={"31.4M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default PowerTV