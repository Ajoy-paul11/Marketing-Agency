import React from 'react'
import Insidepage from '../Insidepage';
import powerTV from "../../../assets/TV/powertv.jpg"

function PowerTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
          price: "29 Per Second",
        },
        {
            cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "L Band",
          about:
            "L Band is one of the most preferred advertising medium in television advertising. L Shape ads helps to grab the attention of the viewers as it inevitably dominates the visual space on the screen",
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