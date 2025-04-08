import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import AboutKrish from "../../assets/About.jpg"

const About = () => {
  return (
    <> 
      <div className='about' id="about">

        {/* About Section */} 
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className='about-sections'>
          <div className="about-left">
            <img src={AboutKrish} className='w-12/13 rounded-md' />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>I am a experienced Full Stack Developer with over a decade of professional expertise in the field. I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
              <p>My passion for full stack development is not only refelcted in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>

            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
              <div className="about-skill"><p>Python</p><hr style={{width: "65%"}} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{width: "80%"}} /></div>
              <div className="about-skill"><p>Express JS</p><hr style={{width: "70%"}} /></div>
              <div className="about-skill"><p>MongoDB</p><hr style={{width: "80%"}} /></div>
              <div className="about-skill"><p>Node JS</p><hr style={{width: "90%"}} /></div>
            </div>
          </div>
        </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className='border-1 border-stone-500 h-28 rounded-full'/>
        <div className="about-achievement">
          <h1>110+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr className='border-1 border-stone-500 h-28 rounded-full'/>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      </div>
    </>
  )
}

export default About