import React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import CarouselFade from './Components/CarouselFade';
import Formulaire from "./Components/Formulaire"
import NosCuisines from "./Components/NosCuisines";


function App() {
  return (
    <>
      <NavBar />
      <CarouselFade />
      <Formulaire />
      <NosCuisines />
    </>
  );
}

export default App;
