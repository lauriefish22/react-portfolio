import React, { useState } from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import NavTabs from './Navtabs';

// import './App.css';

import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import About from './Pages/About';
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
