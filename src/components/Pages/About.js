import React from 'react';
import '../../About.css'



export default function About() {
    return (

        <div className="container-fluid px-2 px-md-4 py-5 mx-auto" id="test">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-9 col-xl-8">
                    <div className="card card-main border-0 text-center">
                        <h5 className="font-weight-bold mb-4" id='me'>All about me</h5>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <p>All about me</p>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="card border-0 card-0">
                                        <div className="card profile py-3 px-4">
                                            <div className="text-center">
                                                <img src="https://i.imgur.com/gazoShk.jpg" className="img-fluid profile-pic" alt="cat" />
                                            </div>
                                            <h6 className="mb-0 mt-2">Laurie Fish</h6>
                                            <small>Backend Developer</small>
                                        </div>

                                        <p className="content mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20" alt="cat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}