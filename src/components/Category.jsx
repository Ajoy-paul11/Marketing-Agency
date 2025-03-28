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
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Category() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentCategory, setCurrentCategory] = React.useState('')

    React.useEffect(() => {
        if(location.pathname === '/digital-service') {
            setCurrentCategory('digital')
        }else if(location.pathname === '/radio-service') {
            setCurrentCategory('radio')
        }else if(location.pathname === '/magazine-service') {
            setCurrentCategory('magazine')
        }else if(location.pathname === '/newspaper-service') {
            setCurrentCategory('newspaper')
        }else if(location.pathname === '/television-service') {
            setCurrentCategory('tv')
        }else if(location.pathname === '/outdoor-service') {
            setCurrentCategory('outdoor')
        }else if(location.pathname === '/nontraditional-service') {
            setCurrentCategory('non-traditional')
        }else if(location.pathname === '/airline-service') {
            setCurrentCategory('airline')
        }else if(location.pathname === '/cinema-service') {
            setCurrentCategory('cinema')
        }else if(location.pathname === '/influencer-service') {
            setCurrentCategory('influencer')
        }else {
            setCurrentCategory('')
        }
    }, [location])
  return (
    <section className=' w-full hidden lg:block'>
        <div className='container mx-auto flex flex-wrap justify-center items-center gap-7 xl:gap-12 py-4 '>
            <div className={`inline-flex gap-1 lg:text-xs xl:text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'digital' ? ' border-b-2 border-[#000080]' : ''}` }  onClick={
                () => (
                    navigate("/digital-service")
                )}>
                <img src={digital} alt="Digital" className=' w-4 xl:w-6'/>
                <p>Digital</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'radio' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/radio-service")
                )
            }>
                <img src={radio} alt="Radio" className=' w-4 xl:w-6'/>
                <p>Radio</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'magazine' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/magazine-service")
                )
            }>
                <img src={magazine} alt="Magazine" className=' w-4 xl:w-6'/>
                <p>Magazine</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'newspaper' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/newspaper-service")
                )
            }>
                <img src={newspaper} alt="Newspaper" className=' w-4 xl:w-6'/>
                <p>Newspaper</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'tv' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/television-service")
                )
            }>
                <img src={tv} alt="TV" className=' w-4 xl:w-6'/>
                <p>TV</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'outdoor' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/outdoor-service")
                )
            }>
                <img src={outdoor} alt="Outdoor" className=' w-4 xl:w-6'/>
                <p>Outdoor</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'non-traditional' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/nontraditional-service")
                )
            }>
                <img src={nonTraditional} alt="Non-traditional" className=' w-4 xl:w-6'/>
                <p>Non-traditional</p>
            </div>    
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'airline' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/airline-service")
                )
            }>
                <img src={airline} alt="Airline" className=' w-4 xl:w-6'/>
                <p>Airline</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'cinema' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/cinema-service")
                )
            }>
                <img src={cinema} alt="Cinema" className=' w-4 xl:w-6'/>
                <p>Cinema</p>
            </div>
            <div className={` inline-flex gap-1 lg:text-sm text-sm items-center cursor-pointer pb-1 hover:scale-105  duration-300 ${currentCategory === 'influencer' ? ' border-b-2 border-[#000080]' : ''}` } onClick={
                () => (
                    navigate("/influencer-service")
                )
            }>
                <img src={influencer} alt="Influencer" className=' w-4 xl:w-6'/>
                <p>Influencer</p>
            </div>
        </div>

    </section>
  )
}

export default Category