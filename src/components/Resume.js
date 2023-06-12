import React from 'react';
import '../Resume.css';
import resume from './../files/resume.pdf'

export default function ResumeContent() {
    return (
        <div className='all'>
            <><div id="header"></div><div className="left2"></div><div className="stuff">
                <br />
                <h1>Resume</h1>
                <h2>Laurie Fish</h2>
                <hr />
                <a id='link'
                    href={resume}
                    download="LaurieFish-Resume"
                    target="_blank"
                    rel="noreferrer"
                > Download: Laurie Fish's Resume</a>
                <br />
                <p className="head">Skills</p>
                <ul>
                    <li> HTML & CSS</li>
                    <li> JAVASCRIPT</li>
                    <li> MONGO DB</li>
                    <li> MYSQL</li>
                    <li> GRAPHQL</li>
                </ul>
                <p className="head">Education</p>
                <ul>

                    <li>UC BERKELEY EXT. FULL STACK Developer</li>

                    {/* Link */}

                    <li>ST.CLOUD STATE UNIVERSITY </li>

                </ul>


                <h1 className="head"> Experience</h1>
                <p> Built, owned, and operated a successful brick-and-mortar fitness organization and brand from the ground-up. Designed initiatives and programming to support clients’ performance objectives and individual goals, constantly adjusting to meet the interest of the consumer. After fifteen years of ownership and management, oversaw transition of business to new ownership allowing me to focus on developing new skills and abilities to meet my personal interest.</p>



            </div><div className="right2"></div><div id="footer">

                </div></>
        </div >
    )
}
