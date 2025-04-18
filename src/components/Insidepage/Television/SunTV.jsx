import React from 'react'
import Insidepage from '../Insidepage';
import suntv from "../../../assets/TV/suntv.jpg"

function SunTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "3,056 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Sun TV"}
            image={suntv}
            title={"About Advertising in Sun TV : "}
            description={
              "The channel which started with the vision of celebrating relationships, Sun Tv since its launch is coloring life with the color of entertainment. The part of one of Asia’s largest Tv networks, the channel has always been the top priority of every viewer. Advertising with them ensures maximum visibility for your brand."
            }
            users={"79.1M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default SunTV