import React from 'react'
import Insidepage from '../Insidepage';
import aajtak from "../../../assets/TV/aajtak.jpg"

function AajTakTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
          price: "1,606 Per Second",
        },
        {
            cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "L Band",
          about:
            "L Band is one of the most preferred advertising medium in television advertising. L Shape ads helps to grab the attention of the viewers as it inevitably dominates the visual space on the screen",
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