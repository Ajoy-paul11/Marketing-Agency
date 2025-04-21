import React from 'react'
import Insidepage from '../Insidepage'
import billboard from "../../../assets/Outdoor/Outdoor-300-x-128.jpg"

function OutdoorBillBoard() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Outdoor/outdoor-billboard-ads.jpg?updatedAt=1744958654874",
          item: "Billboard",
          about:
            "Billboard Advertising, regardless of location, is an affordable outdoor advertising option that enhances brand visibility and engages the target audience through creative ads promoting products or services.",
          price: "Location Based",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising Billboard in any part of the City "}
            image={billboard}
            title={"About Billboard Advertising in any part of the City : "}
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