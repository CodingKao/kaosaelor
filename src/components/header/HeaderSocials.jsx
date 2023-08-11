import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="mailto:saelor.kao@gmail.com" target="_blank_"><MdOutlineEmail/></a>
        <a href="https://www.linkedin.com/in/kao-saelor/" target="_blank_"><BsLinkedin/></a>
        <a href="https://github.com/CodingKao" target="_blank_"><BsGithub /></a>

    </div>
  )
}

export default HeaderSocials