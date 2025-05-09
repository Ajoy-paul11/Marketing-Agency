import React from 'react'
import Insidepage from '../Insidepage';
import starplus from "../../../assets/TV/starplus.jpg"

function StarplusTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "20,328 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in STAR Plus"}
            image={starplus}
            title={"About Advertising in STAR Plus"}
            description={
              "The motto of maintaining the same relationship but with new thinking has made Star Plus a fan-favorite channel. From daily soaps to religious shows, Star Plus has always kept its audience glued to its contents. Every show reflected a human story which makes it more engaging. Advertising here strategically creates a lasting impact on audiences."
            }
            users={"115.1M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default StarplusTV