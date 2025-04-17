import React from "react";
import Insidepage from "./Insidepage";
import meta from "../../assets/DigitalMedia/meta-300-x-125.jpg";

function MetaAds() {
  const cardInfos = [
    {
      cardImage:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Banner",
      about:
        "Facebook banner ads are displayed in various sections of the platform, including the user’s feed and sidebar. They usually feature an image, a headline, and a brief description.",
      price: " 0.027 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/13883855/pexels-photo-13883855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Video",
      about:
        "Facebook video ads display short video clips to users as they scroll through their feeds, view Stories, or explore other areas of the platform, promoting a product or service.",
      price: "0.073 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Lead Generation Banner",
      about:
        "Facebook lead generation ads provide two call-to-action (CTA) options to help businesses engage with potential customers: the Meta Form and the Click-to-Website Link.",
      price: "484 Per Lead",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Package",
      about:
        "This package covers pre and post-campaign online planning consultations, campaign setup, technical ad checks, and the execution of a Facebook/Instagram lead generation campaign using Meta’s built-in form.",
      price: " 484 Per Lead",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Meta Advertising Cost"}
        image={meta}
        title={"About Facebook Advertising Cost : "}
        description={
          "Facebook Ads effectively reach a broad audience and engage consumers through various online channels across every stage of the sales funnel. They offer an innovative platform to promote products or services, enhance brand awareness, and increase visibility. By capturing customer interest and encouraging repeat sales, Facebook Ads maximize engagement. With 399,349,693 monthly active users, they provide access to a large-scale audience through precise retargeting."
        }
        users={"399.3M Users"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default MetaAds;
