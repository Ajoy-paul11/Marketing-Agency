import React from "react";
import Insidepage from "../Insidepage";
import cinema from "../../../assets/Cinema/Cinema-300-x-128.jpg";

function YeswantpurInox() {
  const cardInfos = [
    {
      cardImage:
        "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Slide Ad - On Screen",
      about:
        "In Slide ads one can advertise via an image creative with or without audio. Slide ads can be played either before the movie begins, during the movie interval or both. The duration of slide ads are in multiples of 10 seconds.",
      price: "690 Per Second",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Video Ad - On Screen",
      about:
        "In Video Ads, one can advertise via a video creative. Video ads can be played either before the movie begins, during the movie interval or both. The duration of video ads are in multiples of 10 seconds.",
      price: "690 Per Second",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={
          "Advertising in PVR INOX Vaishnavi Sapphire Mall, Screen - 5, Yeswanthpur"
        }
        image={cinema}
        title={
          "About Advertising in PVR INOX Vaishnavi Sapphire Mall, Screen - 5, Yeswanthpur : "
        }
        description={
          "You will get the rate for advertising in Vaishnavi Sapphire Mall, Yeshwanthpur Bazar, Bengaluru in the Media Options and Pricing section of the website. The mentioned rates are for per second of playing the ad. So e.g. if the cost to advertise in Vaishnavi Sapphire Mall, Yeshwanthpur Bazar, Bengaluru is mentioned as Rs 300/sec and your ad is 10 sec long, the cost for playing your ad once on Vaishnavi Sapphire Mall, Yeshwanthpur Bazar, Bengaluru come to Rs 300 X 10 = Rs 3,000."
        }
        users={"179 No. of Seats"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default YeswantpurInox;
