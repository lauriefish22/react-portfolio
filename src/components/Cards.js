import React from 'react';
import forget from '../images/forget.png';

// import { Container, Row, Col } from 'reactstrap';

import "../Cards.scss";

export default function Cards() {
    return (


        <div class="container">
            <div class="cards">
                <div class="card card-one">
                    <img src={forget} alt='forget'></img>
                    <h2 class="card-title">Don't Forget</h2>
                    <p class="date">April 25, 2023</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
                </div>

                <div class="card card-two">
                    <h2 class="card-title">Card Two</h2>
                    <p class="date">May 26, 2021</p>
                    <p class="description">If you read carefully, you'll find that this is not your typical lorem ipsum.</p>
                </div>

                <div class="card card-three" id='forget'>

                    <h2 class="card-title">Card Three</h2>
                    <p class="date">May 27, 2021</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
                </div>

                <div class="card card-four">
                    <h2 class="card-title">Don't Forget</h2>
                    <p class="date">May 28, 2021</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
                </div>
            </div>
        </div>

    )
}