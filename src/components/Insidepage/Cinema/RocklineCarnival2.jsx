import React from 'react'
import Insidepage from '../Insidepage'
import cinema from '../../../assets/Cinema/Cinema-300-x-128.jpg'

function RocklineCarnival2() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Slide Ad - On Screen",
          about:
            "Slide ads allow advertising through image creatives with or without audio. These ads can be shown before the movie starts, during the interval, or both. The duration of slide ads is in 10-second increments.",
          price: "397 Per Second",
        },
        {
          cardImage:
            "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Video Ad - On Screen",
          about:
            "Video Ads allow advertising through video creatives. These ads can be played either before the movie starts, during the interval, or both. The duration of video ads is in 10-second increments.",
          price: "397 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={
              "Advertising in Carnival Cinemas Rock Line Mall, Screen - 4, T. Dasarahalli"
            }
            image={cinema}
            title={
              "About Advertising in Carnival Cinemas Rock Line Mall, Screen - 4, T. Dasarahalli : "
            }
            description={
              "Carnival Cinemas Rock Line Mall, Screen - 4, T. Dasarahalli Ad is an engaging way for brands to reach out to customers during the trailers while entering the movie theatre, finding their seats, and settling in. Cinema ads deliver high-impact advertising option that offers a mass reach by catering to potential customers who spend a lot of dwell time in a theatre."
            }
            users={"358 No. of Seats"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default RocklineCarnival2