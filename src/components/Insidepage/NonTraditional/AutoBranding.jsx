import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function AutoBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://ik.imagekit.io/ajoy/NonTraditional/auto-hood-ad.jpg?updatedAt=1744883905635",
          item: "Auto Hood",
          about:
            "Advertisements will be printed and installed on the front hood of the auto.",
          price: "600 Per Auto",
        },
        {
            cardImage:
              "https://ik.imagekit.io/ajoy/NonTraditional/auto-backpanel.jpg?updatedAt=1744883905618",
            item: "Auto Back Panel",
            about:
              "Advertisements will be printed and applied to the back window of the auto using vinyl stickers.",
            price: "115 Per Auto",
          },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Auto"}
            image="https://ik.imagekit.io/ajoy/NonTraditional/auto-branding-300-x-128.jpg?updatedAt=1745236468047"
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