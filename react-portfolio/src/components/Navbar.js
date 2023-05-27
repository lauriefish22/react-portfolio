import React, { useState } from 'react';



// const navBarStyles = {
//     navStyle: {
//         background: 'red',
//         justifyContent: 'flex-end',
//         display: 'flex'
//     }

// };

function Navbar() {
    return (
        <nav style={navBarStyles.navStyle}
            className='navbar'>
            <a href='/'>NAVBAR</a>
        </nav>
    );
}

export default Navbar;