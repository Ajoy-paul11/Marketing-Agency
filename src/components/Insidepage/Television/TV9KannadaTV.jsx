import React from 'react'
import Insidepage from '../Insidepage';
import tv9 from "../../../assets/TV/tv-9.jpg"

function TV9KannadaTV() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-video-ad.jpg?updatedAt=1744958996876",
          item: "Video Ad",
          about:
            "Video ads are broadcast during ad breaks. The minimum length for a video ad is 10 seconds, with the duration increasing in 5-second increments.",
          price: "385 Per Second",
        },
        {
            cardImage:
            "https://ik.imagekit.io/ajoy/Television/tv-Lsize-ad.jpg?updatedAt=1744958996926",
          item: "L Band",
          about:
            "L Band is a highly popular advertising format in television. L-Shaped ads are effective in capturing viewers' attention, as they naturally dominate the screen's visual space.",
          price: "4,598 Per LBand", 
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in TV9 Kannada"}
            image={tv9}
            title={"About Advertising in TV9 Kannada : "}
            description={
              "Mirroring the world in front of its viewers, TV9 Kannada is delivering news in a simple, crisp, and bold manner. It has a huge influence on its viewers as it tries to shape their thoughts through its focused, factual, and human-reflected stories. Advertising with them will bring in higher engagement for your brand."
            }
            users={"48.9M"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default TV9KannadaTV