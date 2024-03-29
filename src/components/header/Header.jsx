import React from 'react'
import './header.css'
import ME from '../../assets/kao-pic.jpeg'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header section id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kao Saelor</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header