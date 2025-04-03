import React from 'react'
import Style from './Style.module.css'
import Logo from '../img/douglas.png'
import Html from '../img/html.png'
import Css from '../img/css.png'
import Js from '../img/js.png'
import Reactt from '../img/react.png'
import Python from '../img/python.png'
import Video from '../img/video3.mp4'


const Page1 = () => {
  return (
    <div className={Style.container}>
        <div className={Style.BackgroundVideo}>
            <video src={Video} muted loop autoPlay></video>
        </div>
        <nav className={Style.NavMenu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
        <section>
          <div>
            <h1>Hi, My name's Douglas!</h1>
            <h3>I'm an Developer FullStack!</h3>
          </div>
          <img src={Logo} alt="Logo" />
        </section>
        <div className={Style.Skills}>
          <img src={Html} alt="Html" />
          <img src={Css} alt="Html" />
          <img src={Js} alt="Html" />
          <img src={Reactt} alt="Html" />
          <img src={Python} alt="Html" />
        </div>
        
    </div>
  )
}

export default Page1