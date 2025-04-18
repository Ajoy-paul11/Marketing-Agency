import React from "react";
import Insidepage from "./Insidepage";
import google from "../../assets/DigitalMedia/google-Ad-300-x-125.jpg";

function GoogleAds() {
  const cardInfos = [
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/google-search-ad.jpg?updatedAt=1744959902732",
      item: "Search Ad",
      about:
        "Search ads are displayed alongside Google search results when users search for products or services.",
      price: " 20 Per Click",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/store-visit-ad.jpg?updatedAt=1744959902666",
      item: "Store Visit Campaign",
      about:
        "Store Visit Campaigns use Video and Banner ads to reach a local audience. Each ad includes a button that redirects users to a map with directions to the featured store.",
      price: "0.12 Per Impression",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/dynamic-search-ad.jpg?updatedAt=1744960000174",
      item: "Dynamic Search Ad",
      about:
        "Dynamic Search Ads automatically use content from your website to target your ads. Headlines and landing pages are generated based on your site’s content, ensuring that your ads remain consistently relevant.",
      price: " 20 Per Click",
    },
    {
      cardImage:
        "https://ik.imagekit.io/ajoy/Digital/google-smart-campaign.jpg?updatedAt=1744959902263",
      item: "Smart Campaign",
      about:
        "Smart Campaigns automatically display ads to local audiences in your area, aiming to increase website traffic, online sales, and visits to physical stores.",
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
