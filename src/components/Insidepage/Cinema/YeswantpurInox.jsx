import React from "react";
import Insidepage from "../Insidepage";
import cinema from "../../../assets/Cinema/Cinema-300-x-128.jpg";

function YeswantpurInox() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Cinema/cinema-slide-ad.jpg?updatedAt=1745216146301",
      item: "Slide Ad - On Screen",
      about:
        "Slide ads allow advertising through image creatives with or without audio. These ads can be shown before the movie starts, during the interval, or both. The duration of slide ads is in 10-second increments.",
      price: "690 Per Second",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Cinema/cinema-on-screen-ad.jpg?updatedAt=1745216146508",
      item: "Video Ad - On Screen",
      about:
        "Video Ads allow advertising through video creatives. These ads can be played either before the movie starts, during the interval, or both. The duration of video ads is in 10-second increments.",
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
