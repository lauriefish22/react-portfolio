import React from 'react';


function Header({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs' id='navbar'>
            <li className='nav-item'>

                <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home</a>
            </li>
            <li className='nav-item'>
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me</a>
            </li>
        </ul>
    )
}

export default Header;