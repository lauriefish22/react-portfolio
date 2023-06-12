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
                <a
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
                <p className="head">Experience</p>
                <ul>
                    <li>Student Technology Intern for Wilton School District</li>
                    <li>Babysitter</li>
                </ul>
                <p className="head">Extracurriculars</p>
                <ul>
                    <li>Recycling Club</li>
                    <li>Gardening Club</li>
                    <li>Book Club</li>
                </ul>
            </div><div className="right2"></div><div id="footer">
                    <h2 id="name">Emily</h2>
                </div></>
        </div>
    )
}
