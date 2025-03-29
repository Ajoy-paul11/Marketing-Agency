import React from "react";
import Insidepage from "./Insidepage";
import google from "../../assets/DigitalMedia/google-Ad-300-x-125.jpg";

function GoogleAds() {
  const cardInfos = [
    {
      cardImage:
        "https://images.pexels.com/photos/15406292/pexels-photo-15406292/free-photo-of-google-on-smartphone-touchscreen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Search Ad",
      about:
        "Search ads appear next to Google search results when people look for products and services.",
      price: " 20 Per Click",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Store Visit Campaign",
      about:
        "Store Visit Campaigns are advertisements displayed as Video and Banner ads to users, targeting a local audience. Each Ad will have a button that will redirect the users to the map with directions to the same store.",
      price: "0.12 Per Impression",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Dynamic Search Ad",
      about:
        "Dynamic Search Ads use your website content to target your ads. Dynamic Search Ad headlines and landing pages are generated using content from your website, which keeps your ads relevant all the time.",
      price: " 20 Per Click",
    },
    {
      cardImage:
        "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      item: "Smart Campaign",
      about:
        "Smart Campaigns automatically show ads to locals in your area to drive website visits, online sales, and offline store visits.",
      price: " 20 Per Click",
    },
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={"Google Search Advertising Cost"}
        image={google}
        title={"About Google Search Advertising Cost : "}
        description={
          "Google AdvertisingIn today’s fast-paced digital world, businesses are increasingly relying on online advertising to reach customers at the right time and place. Among the various advertising platforms available, Google Advertising stands out as one of the most powerful and cost-effective tools for promoting your business. With over 3.5 billion searches conducted on Google each day, the platform offers an incredible opportunity to connect with users actively searching for products or services like yours."
        }
        users={"200M Users"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default GoogleAds;
