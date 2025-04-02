import React from 'react'
import Insidepage from '../Insidepage';
import tv9 from "../../../assets/TV/tv-9.jpg"

function TV9KannadaTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
          price: "385 Per Second",
        },
        {
            cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "L Band",
          about:
            "L Band is one of the most preferred advertising medium in television advertising. L Shape ads helps to grab the attention of the viewers as it inevitably dominates the visual space on the screen",
          price: "4,598 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in TV9 Kannada"}
            image={tv9}
            title={"About Advertising in TV9 Kannada : "}
            description={
              "Mirroring the world in front of its viewers, TV9 Kannada is delivering news in a simple, crisp, and bold manner. It has a huge influence on its viewers as it tries to shape their thoughts through its focused, factual, and human-reflected stories. Advertising with them will bring in higher engagement for your brand."
            }
            users={"48.9M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TV9KannadaTV