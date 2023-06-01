import React from 'react';
import '../Navigation.css';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (


        <ul className="navbar navbar-expand" id='words'>
            <li className='nav-item'>

                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    Home</a>
            </li>
            <li className='nav-item'>
                <a href="#project" onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    Project</a>
            </li>
            <li className='nav-item'>
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact</a>
            </li>
            <li className='nav-item'>
                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume</a>
            </li>
        </ul>


    )
}

