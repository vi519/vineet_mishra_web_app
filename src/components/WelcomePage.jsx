import React from 'react'
import '../App.css'
import './Style.css/WelcomePage.css'
import Links from './Links'
import Resume from './Resume'

function WelcomePage() {
    return (
 
           
         <div class="flex flex-col  md:flex-row ">
      

                <div class="px-12 mt-20">
                    <h1 class="text-4xl">Hi All, I am Vineet Mishra
                        <span className="wave">👋</span>
                    </h1>
                    <br />
                    <h4 class="text-2xl text-gray-500">A passionate Full Stack Software Developer 🚀 <br /> having an experience of building Web
                        and Mobile applications <br /> with JavaScript / Reactjs / Nodejs /   React Native and
                        <br /> some other cool libraries and frameworks.</h4>

                    <br />
                    <Resume/>
                    <br />
                <Links/>

                </div>

                <div class="flex flex-col justify-center mx-8 ">
                    <img className="Intro-img" src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif" alt="" />
                </div>
            </div>
    )
}

export default WelcomePage
