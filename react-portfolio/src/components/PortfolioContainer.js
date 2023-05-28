import React, { useState } from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import NavTabs from "./Navtabs";

import Contact from './Pages/Contact.js'
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import About from './Pages/About';

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
