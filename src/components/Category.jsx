import React from 'react'
import digital from "../assets/Genre/digital.png"
import radio from "../assets/Genre/radio.png"
import magazine from "../assets/Genre/magazine.png"
import newspaper from "../assets/Genre/newspaper.png"
import tv from "../assets/Genre/tv.png"
import outdoor from "../assets/Genre/billboard.png"
import nonTraditional from "../assets/Genre/non-traditional.png"
import airline from "../assets/Genre/airplane.png"
import cinema from "../assets/Genre/cinema.png"
import influencer from "../assets/Genre/influencer.png"


function Category() {
  return (
    <section className=' w-full hidden lg:block'>
        <div className='container mx-auto flex flex-wrap justify-center items-center gap-7 xl:gap-12 py-4 '>
            <div className=' inline-flex gap-1 lg:text-xs xl:text-sm items-center'>
                <img src={digital} alt="Digital" className=' w-4 xl:w-6'/>
                <p>Digital</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={radio} alt="Radio" className=' w-4 xl:w-6'/>
                <p>Radio</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={magazine} alt="Magazine" className=' w-4 xl:w-6'/>
                <p>Magazine</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={newspaper} alt="Newspaper" className=' w-4 xl:w-6'/>
                <p>Newspaper</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={tv} alt="TV" className=' w-4 xl:w-6'/>
                <p>TV</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={outdoor} alt="Outdoor" className=' w-4 xl:w-6'/>
                <p>Outdoor</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={nonTraditional} alt="Non-traditional" className=' w-4 xl:w-6'/>
                <p>Non-traditional</p>
            </div>    
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={airline} alt="Airline" className=' w-4 xl:w-6'/>
                <p>Airline</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={cinema} alt="Cinema" className=' w-4 xl:w-6'/>
                <p>Cinema</p>
            </div>
            <div className=' inline-flex gap-1 lg:text-sm text-sm items-center'>
                <img src={influencer} alt="Influencer" className=' w-4 xl:w-6'/>
                <p>Influencer</p>
            </div>
        </div>

    </section>
  )
}

export default Category