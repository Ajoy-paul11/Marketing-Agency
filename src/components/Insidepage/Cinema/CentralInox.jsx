import React from 'react'
import Insidepage from "../Insidepage";
import cinema from "../../../assets/Cinema/Cinema-300-x-128.jpg";

function CentralInox() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Slide Ad - On Screen",
          about:
            "In Slide ads one can advertise via an image creative with or without audio. Slide ads can be played either before the movie begins, during the movie interval or both. The duration of slide ads are in multiples of 10 seconds.",
          price: "728 Per Second",
        },
        {
          cardImage:
            "https://images.unsplash.com/photo-1517486518908-97a5f91b325f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Video Ad - On Screen",
          about:
            "In Video Ads, one can advertise via a video creative. Video ads can be played either before the movie begins, during the movie interval or both. The duration of video ads are in multiples of 10 seconds.",
          price: "728 Per Second",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={
              "Advertising in PVR INOX Central Mall, Screen - 2, J.P. Nagar"
            }
            image={cinema}
            title={
              "About Advertising in PVR INOX Central Mall, Screen - 2, J.P. Nagar : "
            }
            description={
              "PVR INOX Central Mall, Screen - 2, J. P. Nagar Ad is an engaging way for brands to reach out to customers during the trailers while entering the movie theatre, finding their seats, and settling in. Cinema ads deliver high-impact advertising option that offers a mass reach by catering to potential customers who spend a lot of dwell time in a theatre."
            }
            users={"251 No. of Seats"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default CentralInox