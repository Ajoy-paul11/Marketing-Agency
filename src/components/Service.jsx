import React, { useEffect } from "react";
import content from "../assets/gif/activity-feed.gif";
import media from "../assets/gif/web-developer.gif";
import socialMarketing from "../assets/gif/social-marketing.gif";
import traditional from "../assets/gif/analysis.gif";
import { CardWithLink } from "./ServiceCard.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function Service() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <div className=" w-full max-h-fit">
      <h2
        data-aos="fade-down"
        className=" text-3xl font-semibold text-primary font-secondary text-center mb-2"
      >
        Services
      </h2>
      <div
        data-aos="fade-down"
        className="  flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 p-8 "
      >
        <div>
          <CardWithLink
            img={traditional}
            title={"Traditional Marketing"}
            description={
              "We Give our customers the best form of marketing that uses offline media to reach an audience."
            }
            modalTitle={"Strategy"}
            modalDescription={
              "With data capabilities of a media agency coupled with the cultural analysis of a creative-driven research firm, we bring companies closer to their customers."
            }
          />
        </div>
        <div>
          <CardWithLink
            img={media}
            title={"Media Buying"}
            description={
              "Our goal is to identify and purchase ad space on channels that are relevant to the target audience at the optimal time, for the least amount of money."
            }
            modalTitle={"Media Buying"}
            modalDescription={
              "We use innovative and new trading approaches to ensure our clients benefit from the best rates in the market. We pioneer new trading and partnership approaches with media owners, as well as create cross-platform opportunities for our clients."
            }
          />
        </div>
        <div>
          <CardWithLink
            img={socialMarketing}
            title={"Digital Marketing"}
            description={
              "We help you build and manage digital media campaigns as per the objective required to meet your customers."
            }
            modalTitle={"Data"}
            modalDescription={
              "Data offers us the ability to make intelligent decisions that can positively impact a client's business growth. With our proven expertise in traditional/ digital media buying and planning, we’ll make you reach the right audience and optimize your spending each and every time."
            }
          />
        </div>
        <div>
          <CardWithLink
            img={content}
            title={"Content"}
            description={
              "We create content in the form of Text, Video, Images, etc. to reach out & communicate to the Target Audience."
            }
            modalTitle={"Media Planning"}
            modalDescription={
              "We’re a full-service content laboratory for the 21st century. In-house studios furnished with modern equipment makes our end-to-end process streamlined and nimble."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
