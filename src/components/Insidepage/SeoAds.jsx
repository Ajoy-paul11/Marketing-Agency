import React from 'react'
import Insidepage from './Insidepage'
import seo from '../../assets/DigitalMedia/seo.png'

function SeoAds() {
    const cardInfos = [
        {
          cardImage:
            `${seo}`,
          item: "SEO Ad",
          about:
            "SEO advertising is a way to promote a website by optimizing it for search engines. It involves using keywords, creating quality content, and building backlinks to improve the website's visibility in search results. The goal is to attract more organic traffic and increase brand awareness.",
          price: "Depends on the keyword",
        }
      ];
      return (
        <section className=" w-full mt-[72px]">
          <Insidepage
            headerText={"SEO Advertising Cost"}
            image="https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg?t=st=1745242687~exp=1745246287~hmac=bb5403dc8d90e40a55c23f40952bebf027bd62012177f842a6656c9a62b3c763&w=300"
            title={"About SEO Advertising Cost : "}
            description={
              "SEO advertising is a digital marketing strategy that focuses on optimizing a website's visibility in search engine results pages (SERPs) to drive organic traffic. It involves various techniques, including keyword research, on-page optimization, content creation, and link building. "
            }
            users={"N/A"}
            cardInfos={cardInfos}
          />
        </section>
      );
}

export default SeoAds