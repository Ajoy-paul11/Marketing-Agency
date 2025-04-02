import React from 'react'
import Insidepage from '../Insidepage';
import sonysab from "../../../assets/TV/sonysab.png"

function SabTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
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