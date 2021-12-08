import React from 'react'
import '../App.css'
import './Style.css/WelcomePage.css'
import Links from './Links'
import Resume from './Resume'
function WelcomePage() {
    return (
 
           
         <div class="flex flex-col space-x-20 md:flex-row ">

                <div class="px-12 mt-20">
                    <h1 class="text-4xl">Hi All, I am Vineet Mishra
                        <span className="wave">👋</span>
                    </h1>
                    <br />
                    <h4 class="text-2xl text-gray-500 ">A passionate Full Stack Software Developer 🚀 <br /> having an experience of building Web
                        and Mobile applications <br /> with JavaScript / Reactjs / Nodejs /   React Native and
                        <br /> some other cool libraries and frameworks.</h4>

                    <br />
                    <Resume/>
                    <br />
                <Links/>

                </div>

                <div class="flex flex-col justify-evenly py-16">
                    <img className="Intro-img" src="https://media.lrng.org/67/69/43bffac0fa432f190bd54a992af13d2b5d8d-558x430.gif" alt="" />
                </div>
            </div>
    )
}

export default WelcomePage
