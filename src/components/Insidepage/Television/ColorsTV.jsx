import React from 'react'
import Insidepage from '../Insidepage';
import colors from "../../../assets/TV/colors.jpg"

function ColorsTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
          price: "18,876 Per Second",
        },
        {
            cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "L Band",
          about:
            "L Band is one of the most preferred advertising medium in television advertising. L Shape ads helps to grab the attention of the viewers as it inevitably dominates the visual space on the screen",
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