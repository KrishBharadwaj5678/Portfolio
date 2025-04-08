import React from 'react'
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg"

const MyWorkHeader = () => {
  return (
    <>
      <div className='mywork' id="work">
        <div className='mywork-title'>
          <h1>My Works</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
    </>
  )
}

export default MyWorkHeader;