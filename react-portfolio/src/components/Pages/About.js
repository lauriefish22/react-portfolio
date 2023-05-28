import React from 'react';



export default function About() {
    return (
        <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-9 col-xl-8">
                    <div className="card card-main border-0 text-center">
                        <h5 className="font-weight-bold mb-4">What our clients are saying<br></br>about us.</h5>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <p>All about me</p>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="card border-0 card-0">
                                        <div className="card profile py-3 px-4">
                                            <div className="text-center">
                                                <img src="https://i.imgur.com/gazoShk.jpg" className="img-fluid profile-pic" alt="cat" />
                                            </div>
                                            <h6 className="mb-0 mt-2">Marielle Haag</h6>
                                            <small>Backend Developer</small>
                                        </div>
                                        <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20" alt="cat" />
                                        <p className="content mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20" alt="cat" />
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div className="card border-0 card-0">
                                        <div className="card profile py-3 px-4">
                                            <div className="text-center">
                                                <img src="https://i.imgur.com/oW8Wpwi.jpg" className="img-fluid profile-pic" alt="cat" />
                                            </div>
                                            <h6 className="mb-0 mt-2">Ximena Vegara</h6>
                                            <small>UI/UX Designer</small>
                                        </div>
                                        <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20" alt="cat" />
                                        <p className="content mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                                        <img className="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20" alt="cat" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card border-0 card-0">
                                        <div className="card profile py-3 px-4">
                                            <div className="text-center">
                                                <img src="https://i.imgur.com/ndQx2Rg.jpg" className="img-fluid profile-pic" alt="cat" />
                                            </div>
                                            <h6 className="mb-0 mt-2">John Paul</h6>
                                            <small>UI/UX Designer</small>
                                        </div>
                                        <img className="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20" alt="cat" />
                                        <p className="content mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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