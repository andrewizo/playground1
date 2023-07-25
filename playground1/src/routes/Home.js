import React from "react";
import NavbarComponent from "../components/NavbarComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";

const Home = () => {
    return(
        <div id = "root">
            <NavbarComponent />
            <CarouselComponent />
        </div>
    )
}

export default Home;