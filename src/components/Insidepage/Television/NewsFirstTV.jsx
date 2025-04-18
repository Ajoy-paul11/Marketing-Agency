import React from 'react'
import Insidepage from '../Insidepage';
import newsFirst from "../../../assets/TV/newsfirst.jpg"

function NewsFirstTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
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