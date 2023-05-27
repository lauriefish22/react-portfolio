import React from 'react';






const navBarStyles = {
    navStyle: {
        background: 'blue',
        justifyContent: 'flex-end',
        display: 'flex'
    }

};

function Navbar() {
    return (
        <nav style={navBarStyles.navStyle}
            className='navbar'>
            <a href='/'>NAVBAR</a>
        </nav>
    );
}

export default Navbar;