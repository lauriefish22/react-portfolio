import React from 'react';
import forget from '../images/forget.png';
import neigh from '../images/neigh.png';
import color from '../images/color.png';
import books from '../images/books.png';



import "../Cards.scss";

export default function Cards() {
    return (


        <div class="container">
            <div class="cards">
                <div class="card card-one">
                    <a href='https://dont-forget-app.herokuapp.com'>
                        <img src={forget} alt='forget'></img>
                        <h2 class="card-title">Don't Forget</h2>
                        <p class="date">April 25, 2023</p>
                        <p class="description">An easy way to keep track of important dates and info about your friends and family.</p></a>
                </div>

                <div class="card card-two">
                    <a href='https://neighborrow.herokuapp.com/'>
                        <img src={neigh} alt='neigh'></img>
                        <h2 class="card-title">NeighBorrow</h2>
                        <p class="date">June 12, 2023</p>
                        <p class="description">A website where individuals can share tools, equipment and more with their neighbors. </p></a>
                </div>

                <div class="card card-three" id='forget'>
                    <a href='https://lauriefish22.github.io/Colorful-Careers/'>
                        <img src={color} alt='color'></img>
                        <h2 class="card-title">Colorful Careers</h2>
                        <p class="date">April 27, 2023</p>
                        <p class="description">Find a new career by choosing your favorite color!</p></a>
                </div>

                <div class="card card-four">
                    <a href='https://booksearchlf.herokuapp.com'>
                        <img src={books} alt='books'></img>
                        <h2 class="card-title">Book Search</h2>
                        <p class="date">May 20, 2021</p>
                        <p class="description">Easy book search to find your favorites.</p></a>
                </div>
            </div>
        </div>

    )
}