import React from 'react'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">

          <p>Full stack JavaScript developer with finance/accounting background, lifelong learner, and Marine Corps veteran. Committed to crafting innovative financial applications that optimize business processes and drive growth.</p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>

        </div>
      </div>
    </section>
  )
}

export default About