import React from 'react';
import '../Header.css';


export default function Header() {
    return (
        <div>
            <div id="gradient"></div>
            <div id="card">
                <img src='https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='cat' />
                <h2>Ondřej Page Bárta</h2>
                <p>Student of IT in Czech republic.</p>
                <p>Interested in Web technologies like HTML5, CSS3, JavaScript, PHP, MySQL, etc.</p>
                <p>Love Codepen.io and respect Chris Coyier. ;)</p>
                <span className="left bottom">tel: 731 366 ***</span>
                <span className="right bottom">address: Czech Republic</span>
            </div>
        </div>
    )
}