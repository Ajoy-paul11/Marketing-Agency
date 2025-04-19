import React from 'react'
import Insidepage from '../Insidepage'
import outdoor from "../../../assets/Outdoor/Outdoor-288-x-192.jpg"

function Skywalk() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Outdoor/outdoor-billboard-ads.jpg?updatedAt=1744958654874",
          item: "Skywalk",
          about:
            "Billboard Advertising, regardless of location, is an affordable outdoor advertising option that enhances brand visibility and engages the target audience through creative ads promoting products or services.",
          price: "Location Based",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising Billboard in any location "}
            image={outdoor}
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

export default Skywalk