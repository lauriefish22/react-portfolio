import React, { useState } from 'react';
import NavTabs from './Navigation';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import About from './Pages/About';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');



    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        else if (currentPage === 'Project') {
            return <Project />;
        }
        else if (currentPage === 'Contact') {
            return <Contact />;
        } else { return <Resume />; }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />


            {renderPage()}
        </div>
    );
}
