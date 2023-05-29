import React from 'react';
import './App.css';


export default function Form() {
    <div className="wrapper">
        <form className="form">
            <div className="pageTitle title">Sign Up </div>
            <div className="secondaryTitle title">Please fill this form to sign up.</div>
            <input type="text" className="name formEntry" placeholder="Name" />
            <input type="text" className="email formEntry" placeholder="Email" />
            <textarea className="message formEntry" placeholder="Message"></textarea>

            <br></br>
            <button className="submit formEntry" onclick="thanks()">Submit</button>
        </form>
    </div>
}
