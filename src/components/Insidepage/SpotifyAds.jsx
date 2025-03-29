import React from "react";
import Insidepage from "./Insidepage";
import spotify from "../../assets/DigitalMedia/spotify-300-x-125.jpg";

function SpotifyAds() {
  const cardInfos = [
    {
      cardImage:
        "https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Audio",
      about:
        "The Audio Banner ad format shows banner ads alongside audio content, but you cannot control where the ad appears or the devices it’s displayed on. In contrast, Audio Everywhere shows banner ads across multiple devices while the audio plays.",
      price: "0.083 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/4114807/pexels-photo-4114807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Video",
      about:
        "On Spotify, video ads are available in two main formats: Video Ads (Video Takeovers), which are full-screen ads displayed on the mobile app during ad breaks between songs, and Sponsored Session Videos, where users watch your brand’s video in exchange for 30 minutes of uninterrupted listening.",
      price: "0.165 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Banner",
      about:
        "The Banner ad format includes image ads. In this media option, you can choose Overlay Banner Ads, a full-screen image ad that appears when a user reopens the app, acting as a welcome banner.",
      price: "0.054 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/4114807/pexels-photo-4114807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "RoadBlock",
      about:
        "Roadblock Ads are high-impact ads that block all other ads on the platform for 24 hours. There are five types of Roadblock options: Multiformat Headliner, Audio Headliner,Mobile Page Takeover,and Overlay Banner Headliner.",
      price: "10,04,300 Per Day",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Spotify Advertising Cost"}
        image={spotify}
        title={"About Spotify Advertising Cost : "}
        description={
          "Spotify Ads help reach more people and target consumers using online channels at every sales funnel stage. Spotify Ads are an innovative way to showcase products/services for brand awareness and boost visibility by engaging customers to drive repeat sales. With 68175000 monthly active users, Spotify Ads target a large-scale audience using precision retargeting."
        }
        users={"68.2M Users"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default SpotifyAds;
