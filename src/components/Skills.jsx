import React from 'react'
import './Style.css/Skills.css'

function Skills() {
    return (
        <div>
            <div class="text-4xl text-center py-6">My Skills 🤹 </div>
               <div className="container-skills" class="px-4 ">
          <h1 className="skills-head">Skill Set</h1>
          <div className="bar front expert" data-skill="React"></div>
          <div className="bar front expert" data-skill="Javascript"></div>
          <div className="bar front expert" data-skill="React Native"></div>
          <div className="bar front expert" data-skill="Angular"></div>
          <div className="bar front expert" data-skill="NodeJs"></div>
          <div className="bar front advanced" data-skill="CSS3"></div>
          <div className="bar front expert" data-skill="HTML5"></div>
          <div className="bar front expert" data-skill="TailwindCSS"></div>
          <div className="bar front expert" data-skill="Bootstrap"></div>
          <div className="bar back intermediate" data-skill="Java"></div>
        </div>
            
        </div>
    )
}

export default Skills;
