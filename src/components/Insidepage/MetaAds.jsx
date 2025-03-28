import React from 'react'
import Insidepage from './Insidepage'
import digital from "../../assets/DigitalMedia/meta-300-x-125.jpg"

function MetaAds() {
  return (
    <section className=' w-full mt-[72px]'>
        <Insidepage 
        headerText={"Meta Advertising Cost"}
        image={digital}
        title={"About Facebook Advertising Cost : "}
        description={"Facebook Ads effectively reach a broad audience and engage consumers through various online channels across every stage of the sales funnel. They offer an innovative platform to promote products or services, enhance brand awareness, and increase visibility. By capturing customer interest and encouraging repeat sales, Facebook Ads maximize engagement. With 399,349,693 monthly active users, they provide access to a large-scale audience through precise retargeting."}
        users={"399.3M Users"}/>
    </section>
  )
}

export default MetaAds