// Footer.js
import React from 'react';
import './aboutMe.css';
import me from '../../assets/me.png'
const AboutMe = () => {
    return (
        <div id='aboutMeContainer'>

            <h1>
                About Me
            </h1>
            <div id='about'>
                <p>
                    I'm a full stack developer living in İstanbul, Turkey. I have developed and published 2 apps on both App Store and Google Play Store. Even though i developed most of my projects with flutter, i'm familiar with diffirent frameworks. Such as React, React Native, SwiftUI, Jetpack Compose and more.
                </p>
                <img src={me} alt='My Logo' />
            </div>
        </div>
    );
};

export default AboutMe;
