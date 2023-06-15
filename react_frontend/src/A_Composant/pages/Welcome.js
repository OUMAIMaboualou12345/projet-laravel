import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg6.jpeg'

export default function Welcome() {
    return (
      <div >
          <header style={ HeaderStyle }>
            <h1 className="main-title text-center text-info"> Pharmacy Management <br/> System</h1>
            {/* <p className="main-para text-center">sales management</p> */}
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="log_btn"><span>Login </span></button>
                </Link>
            </div>
           </header>
      </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}