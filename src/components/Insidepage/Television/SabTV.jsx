import React from 'react'
import Insidepage from '../Insidepage';
import sonysab from "../../../assets/TV/sonysab.png"

function SabTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "15,972 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in SONY SAB"}
            image={sonysab}
            title={"About Advertising in SONY SAB : "}
            description={
              "Launched with the purpose of unlocking happiness in every heart, Sony Sab believes in spreading hope and happiness with its content to its viewers. It is the best in serving Hindi comedy, drama, romance, silent comedy, supernatural, science fiction, and stand-up comedy. Advertising with them boosts visibility among its viewers."
            }
            users={"115.5M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default SabTV