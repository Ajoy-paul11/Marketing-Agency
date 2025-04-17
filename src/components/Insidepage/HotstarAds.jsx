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
        "Video Ads are shown as both pre-roll and mid-roll ads across the app and website. Pre-roll Video Ads are promotional clips that play before the chosen content begins.",
      price: "0.091 Per Impression",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Banner",
      about:
        "Hotstar banner ads come in three formats: Frames, Stubs, and Display. Frames ads appear around video content, offering maximum visibility, while Stubs ads are shown between content previews, encouraging user engagement.",
      price: "0.054 Per Impression",
    },

    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Connected TV",
      about:
        "Connected TV Advertising, commonly known as CTV Advertising, enables brands to reach their target audience by placing ads on Smart TVs and televisions connected through OTT devices like Amazon Fire TV Stick, Chromecast with Google TV, and Apple TV.",
      price: " 0.091 Per Impressions",
    },
    {
      cardImage:
        "https://images.unsplash.com/photo-1726935037951-d5a5a73b3243?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      item: "Masthead Banner",
      about:
        "Masthead Banners appear at the top of the platform’s homepage and remain visible for a full 24 hours. These banners can be displayed on both the app and the website.",
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
