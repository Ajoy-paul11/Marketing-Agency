import React from "react";
import Insidepage from "../Insidepage";
import cinema from "../../../assets/Cinema/Cinema-300-x-128.jpg";

function PhoenixMallInox() {
  const cardInfos = [
    {
      cardImage:
        "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Slide Ad - On Screen",
      about:
        "Slide ads allow advertising through image creatives with or without audio. These ads can be shown before the movie starts, during the interval, or both. The duration of slide ads is in 10-second increments.",
      price: "1,275 Per Second",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Video Ad - On Screen",
      about:
        "Video Ads allow advertising through video creatives. These ads can be played either before the movie starts, during the interval, or both. The duration of video ads is in 10-second increments.",
      price: "1,275 Per Second",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={
          "Advertising in PVR INOX Phoenix Market City Mall, Screen - 4, Krishnarajapura"
        }
        image={cinema}
        title={
          "About Advertising in PVR INOX Phoenix Market City Mall, Screen - 4, Krishnarajapura : "
        }
        description={
          "You will get the rate for advertising in Phoenix Marketcity Mall, Whitefield Road, Hoodi, Bengaluru in the Media Options and Pricing section of the website. The mentioned rates are for per second of airtime. So e.g. if the cost to advertise in Phoenix Marketcity Mall, Whitefield Road, Hoodi, Bengaluru is mentioned as Rs 300/sec and your ad is 10 sec long, the cost for playing your ad once on Phoenix Marketcity Mall, Whitefield Road, Hoodi, Bengaluru come to Rs 300 X 10 = Rs 3,000."
        }
        users={"128 No. of Seats"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default PhoenixMallInox;
