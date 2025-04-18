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
        "Advertisements will appear on the E-Boarding Passes and Tickets of Indigo Airlines. Brand creatives will be displayed as banner ads beneath the ticket, which are clickable and will redirect users to the Brand's homepage. Additionally, ads can be included in the confirmation email of the boarding pass, positioned below the passenger details.",
      price: "Based on Airline",
    },
    {
      cardImage:
        "https://xianblog.wordpress.com/wp-content/uploads/2018/01/religiad.jpg",
      item: "Boarding Pass",
      about:
        "Advertisements will be printed on the reverse side of the airline boarding pass.",
      price: "Based on Airline",
    },
    {
        cardImage:
          "https://5.imimg.com/data5/SELLER/Default/2023/9/347932447/UN/NX/RZ/30372708/airline-product-sampling.jpg",
        item: "Inflight Sampling",
        about:
          "Inflight Sampling involves distributing product samples (such as cookies, snacks, and sachets) along with vouchers to passengers onboard the aircraft.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTBjYjBhNTQwLTRlNzgtMTFlZi04MGUwLTg5MTBmNjk1YjZkZS5qcGc=",
        item: "Inflight Announcement",
        about:
          "Promote your brand using Indigo Airlines’ in-flight PA system, designed for communication with passengers and cabin crew. Your message can reach a vast audience across 2,000–2,500 domestic flights daily. Through either customized or pre-recorded announcements, your brand will be heard by passengers just before takeoff, capturing maximum attention.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.atinooh.com/wp-content/uploads/2024/08/1711515691180.jpeg",
        item: "Seat Back Branding",
        about:
          "Seat Back Branding is placed on the meal trays attached to the back of passenger seats. The branding will be featured on approximately 170–180 seats.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.aviationspaces.com/img/airline/bulkhead.png",
        item: "Cabin Bulk Head",
        about:
          "This advertising option is currently not available on this platform. Updates regarding this media option will be provided soon. For further details, please stay tuned.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://www.atinooh.com/inner/light-images/overhead/over2.jpg",
        item: "Skyline Panel",
        about:
          "Advertisements will be placed above the windows inside the aircraft and will remain visible throughout the duration of the flight.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://ssm.vn/wp-content/uploads/2020/03/quang-cao-may-bay-6.jpg",
        item: "Aircraft Exterior Branding",
        about:
          "Advertisements are showcased as a full wrap covering the entire SpiceJet aircraft. This Aircraft Wrap ensures wide-reaching 360-degree media coverage.",
        price: "Based on Airline",
    },
    {
        cardImage:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScC0Xf7D8MJPcWyggsa5-cdxORCFcSB3DLpEA8b6yEkV7QD0yM",
        item: "Inflight Food & Beverage Menu Card",
        about:
          "Advertisements will appear on the SpiceJet Inflight Food & Beverage Menu Card, which is handed out prior to the service of breakfast, lunch, or dinner.",
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
