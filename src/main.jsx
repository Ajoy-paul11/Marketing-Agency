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

// { In Future Implementations Scope}

// import Hyperlocal from "./components/service/Hyperlocal.jsx";
// import Deals from "./components/service/Deals.jsx";
// import Adhventha from "./components/client/Adhventha.jsx";
// import Amruth from "./components/client/Amruth.jsx";
// import Apollo from "./components/client/Apollo.jsx";
// import Featherlite from "./components/client/Featherlite.jsx";
// import GarudaMall from "./components/client/GarudaMall.jsx";
// import Nethradhama from "./components/client/Nethradhama.jsx";
// import Narayana from "./components/client/Narayana.jsx";
// import Nps from "./components/client/Nps.jsx";
// import Raymond from "./components/client/Raymond.jsx";
// import Neuberg from "./components/client/Neuberg.jsx";
// import Hitachi from "./components/client/Hitachi.jsx";
// import Transcend from "./components/client/Transcend.jsx";

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
