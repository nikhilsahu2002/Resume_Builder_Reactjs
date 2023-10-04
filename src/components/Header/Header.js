import React from 'react'
import "./Header.css"
import resume from "../../Assets/resume.svg"
const Header = () => {
  return (
    <div className="container">
        <div className="left">

        <p className="heading">A <span>Reusme</span> That StandOut! </p>
        <p className="heading">make Your Owen Resume <span>It's Free</span></p>
        </div>
        <div className="right">
            <img src={resume} alt="" />
        </div>
    </div>
  )
}

export default Header
