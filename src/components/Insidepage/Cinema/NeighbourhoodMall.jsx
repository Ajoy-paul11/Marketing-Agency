import React from "react";
import Insidepage from "../Insidepage";
import cinema from "../../../assets/Cinema/Cinema-300-x-128.jpg";

function NeighbourhoodMall() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Cinema/cinema-slide-ad.jpg?updatedAt=1745216146301",
      item: "Slide Ad - On Screen",
      about:
        "Slide ads allow advertising through image creatives with or without audio. These ads can be shown before the movie starts, during the interval, or both. The duration of slide ads is in 10-second increments.",
      price: "375 Per Second",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Cinema/cinema-on-screen-ad.jpg?updatedAt=1745216146508",
      item: "Video Ad - On Screen",
      about:
        "Video Ads allow advertising through video creatives. These ads can be played either before the movie starts, during the interval, or both. The duration of video ads is in 10-second increments.",
      price: "375 Per Second",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={
          "Advertising in PVR INOX Forum Neighbourhood Mall, Screen - 3, Whitefield"
        }
        image={cinema}
        title={
          "About Advertising in PVR INOX Forum Neighbourhood Mall, Screen - 3, Whitefield : "
        }
        description={
          "PVR INOX Forum Neighbourhood Mall, Screen - 3, Whitefield Ad is an engaging way for brands to reach out to customers during the trailers while entering the movie theatre, finding their seats, and settling in. Cinema ads deliver high-impact advertising option that offers a mass reach by catering to potential customers who spend a lot of dwell time in a theatre."
        }
        users={"51 No. of Seats"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default NeighbourhoodMall;
