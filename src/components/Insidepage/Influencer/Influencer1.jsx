import React from 'react'
import Insidepage from "../Insidepage";
import Influencer from "../../../assets/Influencer/Influencer-300-x-128.jpg";

function Influencer1() {
    const cardInfos = [
        {
          cardImage:
            "https://cdn.prod.website-files.com/60df2a66dbf65be7b8bc5f54/66bfa52ac1b6f3f33cf32a13_65394b5076bb4be6f8e576f8_65394a3b9c00e0fd29f5ba09_3-How%2520long%2520can%2520instagram%2520reels%2520be.webp",
          item: "Instagram Reels",
          about:
            "Instagram Reels is a content format that allows you to create and share short engaging videos.",
          price: "Based on Influencer",
        },
        {
          cardImage:
            "https://plugins-media.makeupar.com/smb/blog/post/2024-06-21/f6a33eb9-5627-4918-bb11-c28bb132a48c.jpg",
          item: "Story",
          about:
            "Influencer will post a story on their social media handle accomanied by necessary caption, brand tags and hashtags.",
          price: "Based on Influencer",
        },
        {
            cardImage:
              "https://plugins-media.makeupar.com/smb/blog/post/2022-04-27/9839f784-3452-4e59-acc1-b929e3a4582f.jpg",
            item: "Video",
            about:
              "Influencer will post a video on their Youtube Channel talking about your brand. The video will be accompanied by necessary captions, links and hashtags.",
            price: "Based on Influencer",
        },
        {
            cardImage:
              "https://img.freepik.com/premium-photo/artistic-collage-featuring-modern-headphones-retro-microphone-blue-background_94558-9614.jpg?semt=ais_hybrid&w=840",
            item: "Podcast",
            about:
              "This package offers influncer to promote the brand into various content formats, including an engaging audio podcast, captivating video podcast, eye-catching IG Reel, insightful Twitter thread, and professional LinkedIn thread.",
            price: "Based on Influencer",
        },
        {
            cardImage:
              "https://assets.mediamodifier.com/mockups/5eb298d9344e64249900dbbc/instagram-post-mockup-maker.jpg",
            item: "Post",
            about:
              "Influencer will post image and add ons as per selection along with a suitable caption, hashtags and tag the brand.",
            price: "Based on Influencer",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={
              "Influencer Marketing with any Social Media Influencer"
            }
            image={Influencer}
            title={
              "About Influencer Marketing with any Soical Media Influencer : "
            }
            description={
              " Social Media influencer who does social media marketing. They are the people who have a large following on social media platforms like Instagram, Facebook, Twitter, and YouTube. They can help brands reach their target audience by promoting products or services through sponsored posts, stories, and videos. Influencer marketing is a powerful way to increase brand awareness and drive sales."
            }
            users={"Based on Influencer"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default Influencer1