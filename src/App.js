import React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import CarouselFade from './Components/CarouselFade';
import Formulaire from "./Components/Formulaire"
import NosCuisines from "./Components/NosCuisines";
import QuiSommes from "./Components/QuiSommes";
import NosClients from "./Components/NosClients";
import Showroom from "./Components/Showroom";
import Faq from "./Components/Faq";
import SocialMedia from "./Components/SocialMedia";


function App() {
    return (
        <>
            <NavBar />
            <CarouselFade />
            <Formulaire />
            <NosCuisines />
            <QuiSommes />
            <NosClients />
            <Showroom />
            <Faq />
            <SocialMedia />
        </>
    );
}

export default App;
