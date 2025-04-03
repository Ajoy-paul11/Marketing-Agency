import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function AutoBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://images.unsplash.com/photo-1655920021325-e625b11b439a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          item: "Auto Hood",
          about:
            "Advertisements will be printed out and then mounted on the hood of the auto.",
          price: "600 Per Auto",
        },
        {
            cardImage:
              "https://images.unsplash.com/photo-1655920021325-e625b11b439a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            item: "Auto Back Panel",
            about:
              "Advertisements will be printed out and mounted on the back window of the auto. Auto Back Panel Ads will be made of vinyl stickers.",
            price: "115 Per Auto",
          },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Auto"}
            image={nontraditional}
            title={"About Advertising in Auto : "}
            description={
              "Bangalore Autos are a popular transit option and can travel to specific locations across different areas of the city, which helps brands looking to reach a diverse audience in hyperlocal areas. These ads offers flexibility and can help improve recall by being visible to commuters and passersby. Auto Ads will be visible to a large crowd who are travelling within the city."
            }
            users={"150KM Average"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default AutoBranding