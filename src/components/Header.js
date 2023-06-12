import React from 'react';
import '../Header.css';


export default function Header() {
    return (
        <div>
            <div id="gradient"></div>
            <div id="card">
                <img src='https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='cat' />
                <h2>Laurie Fish</h2>
                <p>Full Stack Developer</p>
                <p>HTML, CSS, JavaScript, React, MySQL, MongoDB, GraphQL</p>
                <p></p>
                <span className="left bottom">iamlauriefish@gmail.com</span>
                <span className="right bottom"></span>
            </div>
        </div>
    )
}