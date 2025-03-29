import React from "react";
import Insidepage from "./Insidepage";
import hotstar from "../../assets/DigitalMedia/hotstar-300-x-125.jpg";

function HotstarAds() {
  const cardInfos = [
    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Video",
      about:
        "Video Ads are displayed as both pre-roll video ads and mid-roll video ads on both the app and website. Pre-roll Video Ads are promotional videos that appear before the selected content is played. ",
      price: "0.091 Per Impression",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Banner",
      about:
        "Banner ads on Hotstar include three formats: Frames ad, Stubs ad, and Display. Frames ad appears around video content, providing high visibility. Stubs ad shows between content previews, driving engagement.",
      price: "0.054 Per Impression",
    },

    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Connected TV",
      about:
        "CTV Advertising or better known as Connected TV Advertising will allow brands to reach the right audience by placing ads on various Smart TVs and TVs connected to various OTT devices such as Amazon Fire TV Stick, Chromecast With Google TV, Apple TV.",
      price: " 0.091 Per Impressions",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Masthead Banner",
      about:
        "Masthead Banners are displayed on the top of the platform's homepage for a total of 24 hours. Masthead Banners can be showcased on both the app and website of the platform",
      price: "38,72,000 Per Day",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Hotstar Advertising Cost"}
        image={hotstar}
        title={"About Hotstar Advertising Cost : "}
        description={
          "Hotstar Ads help reach more people and target consumers using online channels at every sales funnel stage. Hotstar Ads are an innovative way to showcase products/services for brand awareness and boost visibility by engaging customers to drive repeat sales. With 119961732 monthly active users, Hotstar Ads target a large-scale audience using precision retargeting."
        }
        users={"120M Users"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default HotstarAds;
