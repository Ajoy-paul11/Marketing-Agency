import React from 'react'
import Insidepage from '../Insidepage';
import newsFirst from "../../../assets/TV/newsfirst.jpg"

function NewsFirstTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
          price: "198 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in News 1st Kannada"}
            image={newsFirst}
            title={"About Advertising in News 1st Kannada : "}
            description={
              "News 1st Kannada Advertising is one of the most common and effective forms of marketing that offers a large reach during a short span of time. Television Advertising has a high impact on viewers and attracts loyal viewers. TV Advertising conveys the brand message with sight, sound, and motion, providing brand products or services with instant trustworthiness."
            }
            users={"39.4M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default NewsFirstTV