import React from 'react'
import Insidepage from '../Insidepage';
import sonytv from "../../../assets/TV/sony.jpg"

function SonyTV() {
    const cardInfos = [
        {
          cardImage:
            "https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "18,876 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Sony Entertainment Television"}
            image={sonytv}
            title={"About Advertising in Sony Entertainment Television : "}
            description={
              "A dynamic channel that responds to the diverse needs of its viewers, Sony Tv offers a complete spectrum of genres from thrillers to dramas, events to comedies, game shows to dance shows, and much more. The channel has a huge impact on the viewers. Advertising with them boosts visibility among its viewers."
            }
            users={"116.1M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default SonyTV