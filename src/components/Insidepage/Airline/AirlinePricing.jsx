import React from "react";
import Insidepage from "../Insidepage";
import airlineService from "../../../assets/Airline/Airline-service-300-x-128.jpg";

function AirlinePricing() {
  const cardInfos = [
    {
      cardImage:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/347941457/MC/BU/XD/30372708/airport-boarding-pass-advertising.jpg",
      item: "E-Boarding Pass & E-Ticket",
      about:
        "Advertisements will be displayed on the E-Boarding Passes and Tickets of Indigo Airlines. Brand creatives will be showcased under the ticket as banner ads, which will be clickable ads redirecting users to the Brand Homepage. Advertisements can also be displayed in the confirmation email of the boarding pass, below the passenger details.",
      price: "Based on Airline",
    },
    {
      cardImage:
        "https://xianblog.wordpress.com/wp-content/uploads/2018/01/religiad.jpg",
      item: "Boarding Pass",
      about:
        "Advertisements will be printed on the back side of the Indigo Airlines Boarding Pass.",
      price: "Based on Airline",
    },
    {
        cardImage:
          "https://5.imimg.com/data5/SELLER/Default/2023/9/347932447/UN/NX/RZ/30372708/airline-product-sampling.jpg",
        item: "Inflight Sampling",
        about:
          "Inflight Sampling includes product samples(cookies, snacks, sachets) and vouchers which will be distributed to the people inside the aircraft.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTBjYjBhNTQwLTRlNzgtMTFlZi04MGUwLTg5MTBmNjk1YjZkZS5qcGc=",
        item: "Inflight Announcement",
        about:
          "Promote your brand through Indigo Airlines’ in-flight PA system, which is used to communicate with passengers and the cabin crew. Your message will reach a large audience across 2,000–2,500 domestic flights every day. Whether through customized or pre-recorded announcements, your brand's message will be heard by passengers just before takeoff, ensuring maximum attention.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.atinooh.com/wp-content/uploads/2024/08/1711515691180.jpeg",
        item: "Seat Back Branding",
        about:
          "Seat Back Branding is displayed on the meal tray installed behind the seats. Branding will be done in approx 170-180 seats available.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.aviationspaces.com/img/airline/bulkhead.png",
        item: "Cabin Bulk Head",
        about:
          "This advertising option is currently unavailable for this platform. The latest information about this media option will be updated. For more information.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.atinooh.com/inner/light-images/overhead/over2.jpg",
        item: "Skyline Panel",
        about:
          "Advertisements will be displayed inside the aircraft on top of the window and will be visible throughout the flight time.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://ssm.vn/wp-content/uploads/2020/03/quang-cao-may-bay-6.jpg",
        item: "Aircraft Exterior Branding",
        about:
          "Advertisements are displayed as a wrap covering the entire aircraft of SpiceJet Airlines. Aircraft Wrap will provide extensive 360-degree press coverage.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScC0Xf7D8MJPcWyggsa5-cdxORCFcSB3DLpEA8b6yEkV7QD0yM",
        item: "Inflight Food & Beverage Menu Card",
        about:
          "Advertisements will be displayed on the SpiceJet Inflight Food & Beverage Menu Card, which will be distributed before breakfast/lunch/dinner is rolled out.",
        price: "Based on Airline",
    },
    
  ];
  return (
    <section className=" w-full mt-[72px]">
      <Insidepage
        headerText={
          "Advertising in Airlines Domestic India"
        }
        image={airlineService}
        title={
          "About Advertising in Airlines Domestic India : "
        }
        description={
          " Airlines has a strong presence in domestic travel industry. Airlines Ads will build credibility and visibility among the brands through repetitive advertising which will make potential consumers remember the brand."
        }
        users={"10M Monthly Passengers"}
        cardInfos={cardInfos}
      />
    </section>
  );
}

export default AirlinePricing;
