import React from 'react';
import '../../about.scss';
// import Pic from '../../images/Pic.jpeg';

export default function About() {
    return (
        <div>
            <div id="login-container">
                <div class="profile-img">
                    {/* <img src={Pic} alt='pic'></img> */}
                </div>
                <h1>
                    Laurie
                </h1>
                <div class="description">
                    Laurie is a front end web developer in Portland, OR. Check out her projects in the links below.
                </div>
                <div class="social">
                    <a href='https://github.com/lauriefish22'>GitHub</a>

                    <a href='https://www.linkedin.com/in/laurie-fish-53811320/'>LinkedIn</a>
                </div>
                <button>Hire Me</button>
                <footer>
                    {/* <div class="likes">
                        <p><i class='fa fa-heart'></i></p>
                        <p>1.5K</p>
                    </div>
                    <div class="projects">
                        <p>Projects</p>
                        <p>154</p>
                    </div> */}
                </footer>
            </div>
        </div>
    )
}

// export default function About() {
//     return (
//         <div>
//             <div id="gradient"></div>
//             <div id="card">
//                 <img src='https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='cat' />
//                 <h2>Ondřej Page Bárta</h2>
//                 <p>Student of IT in Czech republic.</p>
//                 <p>Interested in Web technologies like HTML5, CSS3, JavaScript, PHP, MySQL, etc.</p>
//                 <p>Love Codepen.io and respect Chris Coyier. ;)</p>
//                 <span className="left bottom">tel: 731 366 ***</span>
//                 <span className="right bottom">address: Czech Republic</span>
//             </div>
//         </div>

//     )
// }