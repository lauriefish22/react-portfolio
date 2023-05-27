import React from "react";
import footer from "./components/Footer";
import header from "./components/Header";
import NavBar from "./components/Navbar";
import project from "./components/Project";

function App() {
    return (
        <div>
            <NavBar />
            <header />
            <project />
            <footer />
        </div>
    );
}

export default App;
