import React from "react";
import Insidepage from "./Insidepage";
import spotify from "../../assets/DigitalMedia/spotify-300-x-125.jpg";

function SpotifyAds() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/spotify-audio-ad.jpg?updatedAt=1744884580433",
      item: "Audio",
      about:
        "The Audio Banner ad format displays banner ads alongside audio content, but the placement and devices on which the ad appears are not customizable. In comparison, Audio Everywhere shows banner ads across multiple devices while the audio is playing.",
      price: "0.083 Per Impression",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/spotify-video-ad.jpg?updatedAt=1744885221821",
      item: "Video",
      about:
        "On Spotify, video ads are offered in two primary formats: Video Ads (Video Takeovers), which are full-screen ads shown on the mobile app during ad breaks between songs, and Sponsored Session Videos, where users watch your brand’s video in exchange for 30 minutes of ad-free listening.",
      price: "0.165 Per Impression",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/spotify-banner-ad.jpg?updatedAt=1744884580371",
      item: "Banner",
      about:
        "The Banner ad format features image ads. With this option, you can select Overlay Banner Ads, which are full-screen image ads that appear when a user reopens the app, serving as a welcome message.",
      price: "0.054 Per Impression",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/spotify-roadblock.jpg?updatedAt=1744884580410",
      item: "RoadBlock",
      about:
        "Roadblock Ads are powerful ads that prevent any other ads from appearing on the platform for 24 hours. There are five types of Roadblock options: Multiformat Headliner, Audio Headliner, Mobile Page Takeover, and Overlay Banner Headliner.",
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
