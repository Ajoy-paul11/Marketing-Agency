import React from 'react'
import Insidepage from '../Insidepage'
import billboard from "../../../assets/Outdoor/Outdoor-300-x-128.jpg"

function OutdoorBillBoard() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1651371099884-52e408126ac2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Billboard",
          about:
            " Billboard Advertising in any location is a cost-effective outdoor advertising tool that increases brand impact and engages the target audience using creative ads to promote products or services.",
          price: "Location Based",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising Billboard in any location "}
            image={billboard}
            title={"About Billboard Advertising in any location : "}
            description={
              "Billboard Ads are an innovative out-of-home advertising option that displays eye-catching creatives, offering hyperlocal city-wide visibility. Billboard Ads in Bengaluru, is a cost-effective outdoor advertising tool that increases brand impact and engages the target audience using creative ads to promote products or services."
            }
            users={"Location Based"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default OutdoorBillBoard