import React from 'react';
import Header from './Header';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div>
            <h2>PORTFOLIO</h2>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}
export default NavBar;
