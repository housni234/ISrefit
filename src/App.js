import React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import CarouselFade from './Components/CarouselFade';
import Formulaire from "./Components/Formulaire"
import NosCuisines from "./Components/NosCuisines";
import QuiSommes from "./Components/QuiSommes";


function App() {
  return (
    <>
      <NavBar />
      <CarouselFade />
      <Formulaire />
      <NosCuisines />
      <QuiSommes />
    </>
  );
}

export default App;
