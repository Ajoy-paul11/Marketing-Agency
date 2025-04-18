import React from 'react'
import Insidepage from '../Insidepage'
import busShelter from "../../../assets/Outdoor/bus-shelter.jpg"

function BusShelter() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Outdoor/outdoor-bus-shelter.jpg?updatedAt=1744958655031",
      item: "Bus Shelter",
      about:
        "Bus Shelter Advertisements are designed to enhance brand visibility among a hyperlocal audience. These ads offer 24/7 exposure across urban, suburban, and high-traffic areas, effectively reaching commuters, pedestrians, and motorists.",
      price: "Location Based",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Advertising Bus Shelter in any location"}
        image={busShelter}
        title={"About Bus Shelter Advertising in any location : "}
        description={
          "Bus Shelter Ads in any location will build brand awareness and recall among potential customers. These are out-of-home advertising tools targeting people who are waiting for their buses to arrive, commuting on the road, or just passing by. "
        }
        users={"Location Based"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default BusShelter