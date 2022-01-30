import React from 'react';
import './style/aboutme.scss';
import { Link } from 'react-router-dom';
import { formatMessage } from '@formatjs/intl';


const AboutMe = ()=>{
    return(
        <div id="aboutme"className='AboutMe'>
            <h2>About Me</h2>
            <div className='Inline-about'>
            <div className='Descripton'>
                <p> Studied Department of Computer Science and Engineering</p>
                <p>Right now i am working as a fullstack web developer</p>
                <p>I speak 3 languases: English, Albanian, and Germany</p>
                <p> Worked in a number of projects</p>
            </div>
            <div className='img-me'>

            </div>
            </div>

        </div>
    )
}
export default AboutMe;