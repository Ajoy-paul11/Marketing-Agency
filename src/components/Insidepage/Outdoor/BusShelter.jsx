import React from 'react'
import Insidepage from '../Insidepage'
import busShelter from "../../../assets/Outdoor/bus-shelter.jpg"

function BusShelter() {
  const cardInfos = [
    {
      cardImage:
        "https://images.unsplash.com/photo-1683562524697-f6d6902f2bac?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Bus Shelter",
      about:
        "Bus Shelter Advertisements are promotional campaigns to boost a hyperlocal audience's visibility. This advertising provides 24/7 brand exposure across urban, suburban, and high-traffic areas, reaching commuters, pedestrians, and motorists effectively.",
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