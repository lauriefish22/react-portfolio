import React from 'react';









function Navbar() {
    return (
        <nav className='navbar'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>


                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <a href='/'>NAVBAR</a>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;