import React from 'react';

import '/style.css';


export default function Form() {
    return (
        <div className="wrapper">
            <form className="form">
                <div className="pageTitle title">Contact Me! </div>

                <input type="text" className="name formEntry" placeholder="Name" />
                <input type="text" className="email formEntry" placeholder="Email" />
                <textarea className="message formEntry" placeholder="Message"></textarea>

                <br></br>
                <button className="submit formEntry">Submit</button>
            </form>
        </div>
    );
}
