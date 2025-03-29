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
        "Banner ads on Facebook appear in different areas of the platform, such as a user’s feed or sidebar. These ads typically include an image, a headline, and a short description.",
      price: " 0.027 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/13883855/pexels-photo-13883855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Video",
      about:
        "Facebook video ads work by showing short video clips to users as they scroll through their feeds, watch Stories, or browse other parts of the platform, to promote product, service.",
      price: "0.073 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Lead Generation Banner",
      about:
        "Facebook lead generation ads offer two types of call-to-action (CTA) options to help businesses connect with potential customers. The first one, Meta Form and the second one, Click-to-Website Link.",
      price: "484 Per Lead",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Package",
      about:
        "This package includes pre and post-campaign online planner consultations, campaign setup, ad technical checks, and execution of a Facebook/Instagram lead gen campaign using Meta’s inbuilt form.",
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
