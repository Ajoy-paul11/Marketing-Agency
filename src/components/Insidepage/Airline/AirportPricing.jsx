import React from 'react'
import Insidepage from "../Insidepage";
import airlineService from "../../../assets/Airline/Airline-service-300-x-128.jpg";


function AirportPricing() {
    const cardInfos = [
        {
          cardImage:
            "https://moodiedavittreport.com/wp-content/uploads/2023/06/Birmingham_Airport_new_screen_0915.jpg",
          item: "Digital Screen",
          about:
            "The ad will be displayed on digital screens & Static installed inside the airport premises. The screens operate daily 24 hrs. 10 Sec video ads will be played on a loop of 1 minute.",
          price: "Based on Airport",
        },
        {
          cardImage:
            "https://www.myhoardings.com/blog/wp-content/uploads/2020/08/Hyderabad-Airport-Ads.jpg",
          item: "Hoarding",
          about:
            "In Bangalore Airport, advertisements will be displayed on Hoardings that are available within the premises of the airport. Hoardings will be displayed on the entry/exit road of the airport.",
          price: "Based on Airport",
        },
        {
            cardImage:
              "https://www.mersongroup.com/wp-content/uploads/2022/01/Time-to-Gate-Signs-min.jpg",
            item: "Wall Signage",
            about:
              "Ads are displayed as banner ads that are mounted on the entire wall. These ads will display brand creatives in various areas inside the airport.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://5.imimg.com/data5/SELLER/Default/2023/6/320186076/BX/JJ/BD/126936174/1-500x500.jpg",
            item: "Scroller",
            about:
              "Airport Scroller Ads will be displayed as static ads on screens that are available across the airport. In these scrollers, advertisements will rotate depending on the brand slots.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://www.square-group.com/content/images/Projects/light-box.jpg?height=600    ",
            item: "Lightbox",
            about:
              "Lightbox Advertising is an interactive display ad that will showcase brand promotion on backlit screens. These lightbox ads are customizable ads available in different dimensions across the airport in arrival and departure areas and more.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://elyts.in/Knowledge-Centre/image/cache/catalog/BIAL-Airport%204/bangalore-airport-totem-89-advertising-agency-hierarchy-elyts-branding-and-advertising-company-630x420.jpg",
            item: "Totem",
            about:
              "Totem Advertising is a cylindrical-shaped display ad showcasing brand promotion as double-sided advertising, which can be used effectively. Totem Ads can be customized and are available in different dimensions across the airport.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://i.pinimg.com/736x/d3/6d/b5/d36db5414d07b55efc7cbf3a41f606bc.jpg",
            item: "Hanging Banner",
            about:
              "Ad will be placed on the Hanging Banner at International Departure Area. There are 2 hanging banners available for brands to choose from.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://5.imimg.com/data5/PL/EO/MY-26857157/led-video-wall-500x500.jpg",
            item: "Video Wall",
            about:
              "Video Advertisements of a duration of 10-seconds will be showcased on the video wall screens on a loop of 1-minute. These ads are displayed in various locations within the airport.",
            price: "Based on Airport",
        },
        {
            cardImage:
              "https://assets.mediamodifier.com/mockups/66fa3893c3e844dde3ea31a3/airport-lounge-billboard-and-ad-display-mockup_thumb.jpg",
            item: "Lounge",
            about:
              "Advertisements will be displayed in the lounge area of Bangalore Airport. These ads can be displayed on various media options such as Digital Curved Motion Tracking Screens, Virtual Reality Screens, Tent Cards, Conference Booth With Sponsored Content, etc.",
            price: "Based on Airport",
        },
        
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={
              "Advertising in Airport India"
            }
            image={airlineService}
            title={
              "About Advertising in Airport India : "
            }
            description={
              "Airport Advertising offers high-volume traffic by targeting captive passengers like tourists, business travellers etc, who spend considerable time in the airport. Airport Ads promote brand visibility through unique advertising options that engage potential customers and deliver high impact to an affluent audience by adding brand value and improving credibility."
            }
            users={"10M Monthly Passengers"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default AirportPricing