import React from 'react'
import Insidepage from '../Insidepage';
import zeeKannada from "../../../assets/TV/zeekannada.jpg"

function ZeeKannadaTV() {
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
            headerText={"Advertising in Zee Kannada"}
            image={zeeKannada}
            title={"About Advertising in Zee Kannada : "}
            description={
              "An integral part of every Kannadigas life, Zee Kannada is widely appreciated by the viewers. It involves different genres of programs like daily soaps, cookery, travel shows, films, etc. Advertising with them allows your brand to get the maximum visibility as it already has a wide base of loyal audiences."
            }
            users={"46M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default ZeeKannadaTV