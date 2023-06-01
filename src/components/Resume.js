import React from 'react';
import '../Resume.css';

export default function ResumeContent() {
    return (
        <div className='all'>
            <><div id="header"></div><div className="left2"></div><div className="stuff">
                <br />
                <h1>Resume</h1>
                <h2>Emily</h2>
                <hr />
                <br />
                <p className="head">Interests</p>
                <ul>
                    <li>Drawing</li>
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Programming</li>
                    <li>Computer Science</li>
                </ul>
                <p className="head">Skills</p>
                <ul>
                    <li>Web Design with HTML & CSS</li>
                </ul>
                <p className="head">Education</p>
                <ul>
                    <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
                        <li>Wilton High School</li>
                    </a>
                    {/* Link */}
                    <a href="https://www.silvermineart.org/">
                        <li>Silvermine School of Arts</li>
                    </a>
                    <li>Codeacademy</li>
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
