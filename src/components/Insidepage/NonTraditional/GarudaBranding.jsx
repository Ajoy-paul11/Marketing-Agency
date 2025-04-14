import React from 'react'
import Insidepage from '../Insidepage'
import nontraditional from "../../../assets/NonTradional/nonTraditional.jpg"

function GarudaBranding() {
    const cardInfos = [
        {
          cardImage:
            "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/10/Garuda_Mall-i.jpg",
          item: "Facade",
          about:
            "Advertisement will be displayed on the facade placed at the exterior side of the mall.",
          price: "2,20,000 Per Unit Per Month",
        },
        {
          cardImage:
            "https://content.jdmagicbox.com/v2/comp/bangalore/n1/080pxx80.xx80.240811222746.v2n1/catalogue/novaview-led-screen-pvt-ltd-kattegenahalli-bangalore-led-screen-dealers-7hyenysvrm.jpg",
          item: "Back Lit Board",
          about:
            "Advertisement can be displayed on the Back Lit Boards placed in various locations inside the mall.",
          price: "1,37,500 Per Unit Per Month",
        },
        {
          cardImage:
            "https://files.lbb.in/media/2020/01/5e131c2a4687a955b19efaf6_1578310698040.jpg",
          item: "Digital Screen",
          about:
            "Ad will be displayed on the digital screen. A 20 seconds ad will be played for 200 times per day.",
          price: "5,500 Per Screen Per Day",
        },
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"Advertising in Garuda Mall, Bangalore"}
            image={nontraditional}
            title={" About Advertising in Garuda Mall, Bangalore : "}
            description={
              "Garuda Mall, Bangalore is a well-connected hub for entertainment, shopping, and socializing with a large crowd visiting. Garuda Mall, Bangalore Ads improve visibility and recall among potential customers in a hyperlocal area delivering high impact. Mall Ads engage affluent audiences in minimal time and leverage this opportunity to build awareness among a large-scale audience."
            }
            users={"30K Footfall Weekly"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default GarudaBranding