import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import DigiService from "./components/service/DigitalService.jsx";
import MagazineService from "./components/service/MagazineService.jsx";
import RadioService from "./components/service/RadioService.jsx";
import NewspaperService from "./components/service/NewspaperService.jsx";
import OutdoorService from "./components/service/OutdoorService.jsx";
import TelevisionService from "./components/service/TelevisionService.jsx";
import Airline from "./components/service/Airline.jsx";
import Cinema from "./components/service/Cinema.jsx";
import Influencer from "./components/service/Influencer.jsx";
import NonTraditional from "./components/service/NonTraditional.jsx";
import AboutPage from "./components/AboutPage.jsx";
import MetaAds from "./components/Insidepage/MetaAds.jsx";
import GoogleAds from "./components/Insidepage/GoogleAds.jsx";
import SpotifyAds from "./components/Insidepage/SpotifyAds.jsx";
import HotstarAds from "./components/Insidepage/HotstarAds.jsx";
import RedFMAds from "./components/Insidepage/RedFMAds.jsx";
import MirchiAds from "./components/Insidepage/MirchiAds.jsx";
import BigFMAds from "./components/Insidepage/BigFMAds.jsx";
import RadioCityAds from "./components/Insidepage/RadioCityAds.jsx";
import RadioFeverAds from "./components/Insidepage/RadioFeverAds.jsx";
import RadioOneAds from "./components/Insidepage/RadioOneAds.jsx";
import RedFMDelhi from "./components/Insidepage/RedFMDelhi.jsx";
import MirchiDelhi from "./components/Insidepage/MirchiDelhi.jsx";
import RedFMMumbai from "./components/Insidepage/RedFMMumbai.jsx";
import MirchiMumbai from "./components/Insidepage/MirchiMumbai.jsx";
import RedFMHydrabad from "./components/Insidepage/RedFMHydrabad.jsx";
import RadioCityDelhi from "./components/Insidepage/RadioCityDelhi.jsx";
import MirchiHyderbad from "./components/Insidepage/MirchiHyderbad.jsx";
import RadioCityHyderabad from "./components/Insidepage/RadioCityHyderabad.jsx";
import RadioFeverDelhi from "./components/Insidepage/RadioFeverDelhi.jsx";
import RedFMPune from "./components/Insidepage/RedFMPune.jsx";
import BigFMHyderabad from "./components/Insidepage/BigFMHyderabad.jsx";
import MirchiPune from "./components/Insidepage/MirchiPune.jsx";
import BigFMMumbai from "./components/Insidepage/BigFMMumbai.jsx";
import RadioFeverHyderabad from "./components/Insidepage/RadioFeverHyderabad.jsx";
import RadioCityPune from "./components/Insidepage/RadioCityPune.jsx";
import RadioOneMumbai from "./components/Insidepage/RadioOneMumbai.jsx";
import MirchiKolkata from "./components/Insidepage/MirchiKolkata.jsx";
import MirchiChennai from "./components/Insidepage/MirchiChennai.jsx";
import RadioCityMumbai from "./components/Insidepage/RadioCityMumbai.jsx";
import BigFMChennai from "./components/Insidepage/BigFMChennai.jsx";
import MirchiAhmedabad from "./components/Insidepage/MirchiAhmedabad.jsx";
import RadioFeverPune from "./components/Insidepage/RadioFeverPune.jsx";
import RedFMKolkata from "./components/Insidepage/RedFMKolkata.jsx";
import BigFMKolkata from "./components/Insidepage/BigFMKolkata.jsx";
import RedFMIndore from "./components/Insidepage/RedFMIndore.jsx";
import RedFMAhamedabad from "./components/Insidepage/RedFMAhamedabad.jsx";
import RedFMKochi from "./components/Insidepage/RedFMKochi.jsx";
import RadioCityAhamedabad from "./components/Insidepage/RadioCityAhamedabad.jsx";
import RadioCityChennai from "./components/Insidepage/RadioCityChennai.jsx";
import RadioOneDelhi from "./components/Insidepage/RadioOneDelhi.jsx";
import RadioFeverKolkata from "./components/Insidepage/RadioFeverKolkata.jsx";
import RedFMGuwahati from "./components/Insidepage/RedFMGuwahati.jsx";
import RedFMLucknow from "./components/Insidepage/RedFMLucknow.jsx";
import EconomictimesBengalure from "./components/Insidepage/Newspaper/EconomictimesBengalure.jsx";
import TOIMumbai from "./components/Insidepage/Newspaper/TOIMumbai.jsx";
import TOIDelhi from "./components/Insidepage/Newspaper/TOIDelhi.jsx";
import TOIBangalore from "./components/Insidepage/Newspaper/TOIBangalore.jsx";
import HindustantimesDelhi from "./components/Insidepage/Newspaper/HindustantimesDelhi.jsx";
import TOIHyderabad from "./components/Insidepage/Newspaper/TOIHyderabad.jsx";
import HinduBangalore from "./components/Insidepage/Newspaper/HinduBangalore.jsx";
import HindustantimesMumbai from "./components/Insidepage/Newspaper/HindustantimesMumbai.jsx";
import NavbharatDelhi from "./components/Insidepage/Newspaper/NavbharatDelhi.jsx";
import EconomictimesMumbai from "./components/Insidepage/Newspaper/EconomictimesMumbai.jsx";
import EconomictimesDelhi from "./components/Insidepage/Newspaper/EconomictimesDelhi.jsx";
import MiddayMumbai from "./components/Insidepage/Newspaper/MiddayMumbai.jsx";
import TOINoida from "./components/Insidepage/Newspaper/TOINoida.jsx";
import HinduDelhi from "./components/Insidepage/Newspaper/HinduDelhi.jsx";
import TOIPune from "./components/Insidepage/Newspaper/TOIPune.jsx";
import HinduChennai from "./components/Insidepage/Newspaper/HinduChennai.jsx";
import PrajavaniBangalore from "./components/Insidepage/Newspaper/PrajavaniBangalore.jsx";
import NavbharatMumbai from "./components/Insidepage/Newspaper/NavbharatMumbai.jsx";
import TOIKolkata from "./components/Insidepage/Newspaper/TOIKolkata.jsx";
import TOIChennai from "./components/Insidepage/Newspaper/TOIChennai.jsx";
import TOIAhmedabad from "./components/Insidepage/Newspaper/TOIAhmedabad.jsx";
import EconomictimesChennai from "./components/Insidepage/Newspaper/EconomictimesChennai.jsx";
import EconomictimesKolkata from "./components/Insidepage/Newspaper/EconomictimesKolkata.jsx";
import EconomictimesHyderabad from "./components/Insidepage/Newspaper/EconomictimesHyderabad.jsx";
import EconomictimesPune from "./components/Insidepage/Newspaper/EconomictimesPune.jsx";
import EconomictimesKochi from "./components/Insidepage/Newspaper/EconomictimesKochi.jsx";
import HinduMumbai from "./components/Insidepage/Newspaper/HinduMumbai.jsx";
import HinduHyderabad from "./components/Insidepage/Newspaper/HinduHyderabad.jsx";
import HinduCoimbatore from "./components/Insidepage/Newspaper/HinduCoimbatore.jsx";
import HinduMangaluru from "./components/Insidepage/Newspaper/HinduMangaluru.jsx";
import HinduMadurai from "./components/Insidepage/Newspaper/HinduMadurai.jsx";
import VijayakarnatakaBangalore from "./components/Insidepage/Newspaper/VijayakarnatakaBangalore.jsx";
import UdayavaniBangalore from "./components/Insidepage/Newspaper/UdayavaniBangalore.jsx";
import KannadaprabhaBangalore from "./components/Insidepage/Newspaper/KannadaprabhaBangalore.jsx";
import IndiaToday from "./components/Insidepage/Magazine/IndiaToday.jsx";
import ForbesIndia from "./components/Insidepage/Magazine/ForbesIndia.jsx";
import BusinessToday from "./components/Insidepage/Magazine/BusinessToday.jsx";
import FortuneIndia from "./components/Insidepage/Magazine/FortuneIndia.jsx";
import FeminaMagazine from "./components/Insidepage/Magazine/FeminaMagazine.jsx";
import VogueMagazine from "./components/Insidepage/Magazine/VogueMagazine.jsx";
import TravelLeisure from "./components/Insidepage/Magazine/TravelLeisure.jsx";
import Grihshoba from "./components/Insidepage/Magazine/Grihshoba.jsx";
import OutlookMagazine from "./components/Insidepage/Magazine/outlookMagazine.jsx";
import SudhaMagazine from "./components/Insidepage/Magazine/SudhaMagazine.jsx";
import Taranga from "./components/Insidepage/Magazine/Taranga.jsx";
import SonyTV from "./components/Insidepage/Television/SonyTV.jsx";
import StarplusTV from "./components/Insidepage/Television/StarplusTV.jsx";
import SunTV from "./components/Insidepage/Television/SunTV.jsx";
import ColorsTV from "./components/Insidepage/Television/ColorsTV.jsx";
import AajTakTV from "./components/Insidepage/Television/AajTakTV.jsx";
import TV9KannadaTV from "./components/Insidepage/Television/TV9KannadaTV.jsx";
import ZeeKannadaTV from "./components/Insidepage/Television/ZeeKannadaTV.jsx";
import NewsFirstTV from "./components/Insidepage/Television/NewsFirstTV.jsx";
import PublicTV from "./components/Insidepage/Television/PublicTV.jsx";
import PowerTV from "./components/Insidepage/Television/PowerTV.jsx";
import OutdoorBillBoard from "./components/Insidepage/Outdoor/OutdoorBillBoard.jsx";
import HoardingBoard from "./components/Insidepage/Outdoor/HoardingBoard.jsx";
import BusShelter from "./components/Insidepage/Outdoor/BusShelter.jsx";
import Busbranding from "./components/Insidepage/NonTraditional/Busbranding.jsx";
import Metrobranding from "./components/Insidepage/NonTraditional/Metrobranding.jsx";
import AutoBranding from "./components/Insidepage/NonTraditional/AutoBranding.jsx";
import NonACBusBranding from "./components/Insidepage/NonTraditional/NonACBusBranding.jsx";
import CabBranding from "./components/Insidepage/NonTraditional/CabBranding.jsx";
import ApartmentBranding from "./components/Insidepage/NonTraditional/ApartmentBranding.jsx";
import KoramangalaInox from "./components/Insidepage/Cinema/KoramangalaInox.jsx";
import AshoknagarInox from "./components/Insidepage/Cinema/AshoknagarInox.jsx";
import Krishnarajapura from "./components/Insidepage/Cinema/Krishnarajapura.jsx";
import KrishnarajapuraCinpolis from "./components/Insidepage/Cinema/KrishnarajapuraCinpolis.jsx";
import MaruthiSevanagar from "./components/Insidepage/Cinema/MaruthiSevanagar.jsx";
import NagavaraInox from "./components/Insidepage/Cinema/NagavaraInox.jsx";
import NeighbourhoodMall from "./components/Insidepage/Cinema/NeighbourhoodMall.jsx";
import GarudaMall from "./components/Insidepage/Cinema/GarudaMall.jsx";
import YeswantpurInox from "./components/Insidepage/Cinema/YeswantpurInox.jsx";
import PhoenixMallInox from "./components/Insidepage/Cinema/PhoenixMallInox.jsx";
import OrienMallInox from "./components/Insidepage/Cinema/OrienMallInox.jsx";
import Koramangala7Inox from "./components/Insidepage/Cinema/Koramangala7Inox.jsx";
import CinepolisHulimavi from "./components/Insidepage/Cinema/CinepolisHulimavi.jsx";
import Koramangala6Inox from "./components/Insidepage/Cinema/Koramangala6Inox.jsx";
import CineploisHulimavi2 from "./components/Insidepage/Cinema/CineploisHulimavi2.jsx";
import MahadevapuraInox from "./components/Insidepage/Cinema/MahadevapuraInox.jsx";
import SoulSpaceInox from "./components/Insidepage/Cinema/SoulSpaceInox.jsx";
import MantriSquareInox from "./components/Insidepage/Cinema/MantriSquareInox.jsx";
import RajajinagarInox2 from "./components/Insidepage/Cinema/RajajinagarInox2.jsx";
import Lido1Inox from "./components/Insidepage/Cinema/Lido1Inox.jsx";
import Lido2Inox from "./components/Insidepage/Cinema/Lido2Inox.jsx";
import CentralInox from "./components/Insidepage/Cinema/CentralInox.jsx";
import ElementsInox from "./components/Insidepage/Cinema/ElementsInox.jsx";
import RocklineCarnival from "./components/Insidepage/Cinema/RocklineCarnival.jsx";
import VaishnaviInox from "./components/Insidepage/Cinema/VaishnaviInox.jsx";
import GalleriaMallInox from "./components/Insidepage/Cinema/GalleriaMallInox.jsx";
import RocklineCarnival2 from "./components/Insidepage/Cinema/RocklineCarnival2.jsx";
import Garudamall2 from "./components/Insidepage/Cinema/Garudamall2.jsx";
import SeoAds from "./components/Insidepage/SeoAds.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/digital-service",
        element: <DigiService />
      },
      {
        path: "/magazine-service",
        element: <MagazineService />
      },
      {
        path: "/radio-service",
        element: <RadioService />
      },
      {
        path: "/newspaper-service",
        element: <NewspaperService />
      },
      {
        path: "/television-service",
        element: <TelevisionService />
      },
      {
        path:"/outdoor-service",
        element:<OutdoorService/>
      },
      {
        path: "/airline-service",
        element: <Airline />
      },
      {
        path: "/cinema-service",
        element: <Cinema />
      },
      {
        path: "/influencer-service",
        element: <Influencer />
      },
      {
        path: "/nontraditional-service",
        element: <NonTraditional />
      },
      {
        path: "/meta-pricing",
        element: <MetaAds />
      },
      {
        path: "/google-pricing",
        element: <GoogleAds />
      },
      {
        path: "spotify-pricing",
        element: <SpotifyAds />
      },
      {
        path: "hotstar-pricing",
        element: <HotstarAds />
      },
      {
        path:"/redfm-bengaluru",
        element: <RedFMAds />
      },
      {
        path:"/radiomirchi-bengaluru",
        element: <MirchiAds />
      },
      {
        path: "/redfm-delhi",
        element: <RedFMDelhi />
      },
      {
        path: "/radiomirchi-delhi",
        element: <MirchiDelhi />
      },
      {
        path: "/redfm-mumbai",
        element: <RedFMMumbai />
      },
      {
        path: "/radiomirchi-mumbai",
        element: <MirchiMumbai />
      },
      {
        path: "/redfm-hyderabad",
        element: <RedFMHydrabad />
      },
      {
        path: "/bigfm-bengaluru",
        element: <BigFMAds />
      },
      {
        path: "/radiocity-bengaluru",
        element: <RadioCityAds />
      },
      {
        path: "/radiocity-delhi",
        element: <RadioCityDelhi />
      },
      {
        path: "/radiomirchi-hyderabad", 
        element: <MirchiHyderbad />
      },
      {
        path: "/radiocity-hyderabad",
        element: <RadioCityHyderabad />
      },
      {
        path: "/radiofever-bengaluru",
        element: <RadioFeverAds />
      },
      {
        path: "/radiofever-delhi",
        element: <RadioFeverDelhi />
      },
      {
        path: "/radioone-bengaluru",
        element: <RadioOneAds />
      },
      {
        path: "/redfm-pune",
        element: <RedFMPune />
      },
      {
        path: "/bigfm-hyderabad",
        element: <BigFMHyderabad />
      },
      {
        path: "/radiomirchi-pune",
        element: <MirchiPune />
      },
      {
        path: "/bigfm-mumbai",
        element: <BigFMMumbai />
      },
      {
        path: "/radiofever-hyderabad",
        element: <RadioFeverHyderabad />
      },
      {
        path: "/radiocity-pune",
        element: <RadioCityPune />
      },
      {
        path: "/radioone-mumbai",
        element: <RadioOneMumbai />
      },
      {
        path: "/radiomirchi-kolkata",
        element: <MirchiKolkata />
      },
      {
        path: "/radiomirchi-chennai",
        element: <MirchiChennai />
      },
      {
        path: "/radiocity-mumbai",
        element: <RadioCityMumbai />
      },
      {
        path: "/bigfm-chennai",
        element: <BigFMChennai />
      },
      {
        path: "/radiomirchi-ahmedabad",
        element: <MirchiAhmedabad />
      },
      {
        path: "/radiofever-pune",
        element: <RadioFeverPune />
      },
      {
        path: "/redfm-kolkata",
        element: <RedFMKolkata />
      },
      {
        path: "/bigfm-kolkata",
        element: <BigFMKolkata />
      },
      {
        path: "/redfm-indore",
        element: <RedFMIndore />
      },
      {
        path: "/redfm-ahmedabad",
        element: <RedFMAhamedabad />
      },
      {
        path: "/redfm-kochi",
        element: <RedFMKochi />
      },
      {
        path: "/radiocity-coimbatore",
        element: <RadioCityAhamedabad />
      },
      {
        path: "/radiocity-chennai",
        element: <RadioCityChennai />
      },
      {
        path: "/radiocity-ahamedabad",
        element: <RadioCityAhamedabad />
      },
      {
        path: "/radioone-mumbai",
        element: <RadioOneMumbai />
      },
      {
        path: "/radioone-delhi",
        element: <RadioOneDelhi />
      },
      {
        path: "/radiofever-kolkata",
        element: <RadioFeverKolkata />
      },
      {
        path: "/redfm-guwahati",
        element: <RedFMGuwahati />
      },
      {
        path: "/redfm-lucknow",
        element: <RedFMLucknow />
      },
      {
        path: "/economictimes-bengalore",
        element: <EconomictimesBengalure />
      },
      {
        path: "/timesofindia-mumbai",
        element: <TOIMumbai />
      },
      {
        path: "/timesofindia-delhi",
        element: <TOIDelhi />
      },
      {
        path: "/timesofindia-bangalore",
        element: <TOIBangalore />
      },
      {
        path: "/hindustantimes-delhi",
        element: <HindustantimesDelhi />
      },
      {
        path: "/timesofindia-hyderabad",
        element: <TOIHyderabad />
      },
      {
        path: "/thehindu-bangalore",
        element: <HinduBangalore />
      },
      {
        path: "/hindustantimes-mumbai",
        element: <HindustantimesMumbai />
      },
      {
        path: "/navbharat-delhi",
        element: <NavbharatDelhi />
      },
      {
        path: "/economictimes-mumbai",
        element: <EconomictimesMumbai />
      },
      {
        path: "/economictimes-delhi",
        element: <EconomictimesDelhi />
      },
      {
        path: "/midday-mumbai",
        element: <MiddayMumbai />
      },
      {
        path: "/timesofindia-noida",
        element: <TOINoida />
      },
      {
        path: "/thehindu-delhi",
        element: <HinduDelhi />
      },
      {
        path: "/timesofindia-pune",
        element: <TOIPune />
      },
      {
        path: "/thehindu-chennai",
        element: <HinduChennai />
      },
      {
        path: "/prajavani-bangalore",
        element: <PrajavaniBangalore />
      },
      {
        path: "/navbharat-mumbai",
        element: <NavbharatMumbai />
      },
      {
        path: "/timesofindia-kolkata",
        element: <TOIKolkata />
      },
      {
        path: "/timesofindia-chennai",
        element: <TOIChennai />
      },
      {
        path: "/timesofindia-ahmedabad",
        element: <TOIAhmedabad />
      },
      {
        path: "/economictimes-chennai",
        element: <EconomictimesChennai />
      },
      {
        path: "/economictimes-kolkata",
        element: <EconomictimesKolkata />
      },
      {
        path: "/economictimes-hyderabad",
        element: <EconomictimesHyderabad />
      },
      {
        path: "/economictimes-pune",
        element: <EconomictimesPune />
      },
      {
        path: "/economictimes-kochi",
        element: <EconomictimesKochi />
      },
      {
        path: "/thehindu-mumbai",
        element: <HinduMumbai />
      },
      {
        path: "/thehindu-hyderabad",
        element: <HinduHyderabad />
      },
      {
        path: "/thehindu-coimbatore",
        element: <HinduCoimbatore />
      },
      {
        path: "/thehindu-mangaluru",
        element: <HinduMangaluru />
      },
      {
        path: "/thehindu-madurai",
        element: <HinduMadurai />
      },
      {
        path: "/vijayakarnataka-bangalore",
        element: <VijayakarnatakaBangalore />
      },
      {
        path: "/udayavani-bangalore",
        element: <UdayavaniBangalore />
      },
      {
        path: "/kannadaprabha-bangalore",
        element: <KannadaprabhaBangalore />
      },
      {
        path: "/indiatoday-pricing",
        element: <IndiaToday />
      },
      {
        path: "/forbes-pricing",
        element: <ForbesIndia />
      },
      {
        path: "/businesstoday-pricing",
        element: <BusinessToday />
      },
      {
        path: "/fortuneindia-pricing",
        element: <FortuneIndia />
      },
      {
        path: "/femina-pricing",
        element: <FeminaMagazine />
      },
      {
        path: "/vogue-pricing",
        element: <VogueMagazine />
      },
      {
        path: "/travelleisure-pricing",
        element: <TravelLeisure />
      },
      {
        path: "/grihshobha-pricing",
        element: <Grihshoba />
      },
      {
        path: "/outlook-pricing",
        element: <OutlookMagazine />
      },
      {
        path: "/sudha-pricing",
        element: <SudhaMagazine />
      },
      {
        path: "/taranga-pricing",
        element: <Taranga />
      },
      {
        path: "/sonytv-pricing",
        element: <SonyTV />
      },
      {
        path: "/starplus-pricing",
        element: <StarplusTV />
      },
      {
        path: "/suntv-pricing",
        element: <SunTV />
      },
      {
        path: "/colorstv-pricing",
        element: <ColorsTV />
      },
      {
        path: "/sonysab-pricing",
        element: <SonyTV />
      },
      {
        path: "/aajtak-pricing",
        element: <AajTakTV />
      },
      {
        path: "/tv9kannada-pricing",
        element: <TV9KannadaTV />
      },
      {
        path: "/zeekannada-pricing",
        element: <ZeeKannadaTV />
      },
      {
        path: "/newsfirst-pricing",
        element: <NewsFirstTV />
      },
      {
        path: "/publictv-pricing",
        element: <PublicTV />
      },
      {
        path: "/powertv-pricing",
        element: <PowerTV />
      },
      {
        path: "/outdoorbillboard-pricing",
        element: <OutdoorBillBoard />
      },
      {
        path: "/hoarding-pricing",
        element: <HoardingBoard />
      },
      {
        path: "/busshelter-pricing",
        element: <BusShelter />
      },
      {
        path: "/acbus-pricing",
        element: <Busbranding />
      },
      {
        path: "/metrobranding-pricing",
        element: <Metrobranding />
      },
      {
        path: "/auto-pricing",
        element: <AutoBranding />
      },
      {
        path: "/nonacbus-pricing",
        element: <NonACBusBranding />
      },
      {
        path: "/cab-pricing",
        element: <CabBranding />
      },
      {
        path: "/apartment-pricing",
        element: <ApartmentBranding />
      },
      {
        path: "/inoxkoramangala-pricing",
        element: <KoramangalaInox />
      },
      {
        path: "/inoxashoknagar-pricing",
        element: <AshoknagarInox />
      },
      {
        path: "/inoxkrishnarajapura-pricing",
        element: <Krishnarajapura />
      },
      {
        path: "/cinepoliskrishnarajapura-pricing",
        element: <KrishnarajapuraCinpolis />
      },
      {
        path: "/cinepolismaruthi-pricing",
        element: <MaruthiSevanagar />
      },
      {
        path: "/inoxnagavara-pricing",
        element: <NagavaraInox />
      },
      {
        path: "/inoxneighbourhoodmall-pricing",
        element: <NeighbourhoodMall />
      },
      {
        path: "/inoxgarudamall-pricing",
        element: <GarudaMall />
      },
      {
        path: "/inoxvaishnavi-pricing",
        element: <YeswantpurInox />
      },
      {
        path: "//inoxphoenix4-pricing",
        element: <PhoenixMallInox />
      },
      {
        path:"/inoxrajajinagar-pricing",
        element: <OrienMallInox />
      },
      {
        path: "/inoxkoramangala7-pricing",
        element: <Koramangala7Inox />
      },
      {
        path: "/hulimavucinepolis6-pricing",
        element: <CinepolisHulimavi />
      },
      {
        path: "/inoxkoramangala6-pricing",
        element: <Koramangala6Inox />
      },
      {
        path: "/hulimavucinepolis2-pricing",
        element: <CineploisHulimavi2 />
      },
      {
        path: '/mahadevapura-pricing',
        element: <MahadevapuraInox />
      },
      {
        path: "/inoxsoulspace-pricing",
        element: <SoulSpaceInox />
      },
      {
        path: "/inoxmantrisquare-pricing",
        element: <MantriSquareInox />
      },
      {
        path: "/inoxrajajinagar2-pricing",
        element: <RajajinagarInox2 />
      },
      {
        path: "/inoxlido1-pricing",
        element: <Lido1Inox />
      },
      {
        path: "/inoxlido3-pricing",
        element: <Lido2Inox />
      },
      {
        path: "/inoxcentral-pricing",
        element: <CentralInox />
      },
      {
        path: "/inoxelements-pricing",
        element: <ElementsInox />
      },
      {
        path: "/rockline-pricing",
        element: <RocklineCarnival />
      },
      {
        path: "/inoxvaishnavi2-pricing",
        element: <VaishnaviInox />
      },
      {
        path: "/inoxgalleriamall-pricing",
        element: <GalleriaMallInox />
      },
      {
        path: "/rockline2-pricing",
        element: <RocklineCarnival2 />
      },
      {
        path: "/garudamall3-pricing",
        element: <Garudamall2 />
      },
      {
        path: "/seo-pricing",
        element: <SeoAds />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
