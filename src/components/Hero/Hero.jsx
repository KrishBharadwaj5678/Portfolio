import React from 'react'
import "./Hero.css"
import Profile from "../../assets/Hero.png"
import Resume from "../../assets/KrishResume.pdf"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <div className='hero' id="home">
          <img src={Profile} className="w-60 h-60 rounded-full" alt="Image"/>
          <h1><span>I'm Krish</span>, full stack developer based in India.</h1>
          <p>I am full stack developer from Uttar Pradesh, India with 2 years of experience in companies like Cloud Quest.</p>
          <div className='hero-action'>
              <AnchorLink className="anchor-link" offset={20} href="#contact">
                <div className="hero-connect">
                    Connect with me
                </div>
              </AnchorLink>
            <div className="hero-resume">
              <a href={Resume} target='_blank'>My resume</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero