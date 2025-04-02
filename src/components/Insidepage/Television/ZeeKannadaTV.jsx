import React from 'react'
import Insidepage from '../Insidepage';
import zeeKannada from "../../../assets/TV/zeekannada.jpg"

function ZeeKannadaTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds and increases by a factor of 5.",
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