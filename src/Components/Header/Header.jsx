import React from 'react'
import './Header.css'
import {Resume} from './resume' 
import ME from '../../assets/Piryanshu1.png'
import { HeaderSocial } from './HeaderSocial'
export const Header = () => {
  return (
  <header>
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Piryanshu Bisht</h1>
        <h5 className="text-light">
            Full-Stack Developer
        </h5>
        <Resume/>
        <HeaderSocial/>

        <div className="me">
            <img src={ME} alt="" />
        </div>

        <a href="#footer" className="scroll__down">Scroll Down</a>
    </div>
  </header>
  )
}
