import React from 'react'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">

          <p>I am a passionate full-stack developer with expertise in creating seamless, user-focused web applications from start to finish. Proficient in frontend technologies like React, Vue.js, and TypeScript, as well as backend frameworks such as Node.js, Django, and Express, I specialize in building responsive, scalable, and dynamic solutions tailored to client needs. With experience in integrating APIs, managing databases (PostgreSQL, MongoDB, MySQL), and deploying projects on cloud platforms like AWS and Vercel, I bring both creativity and technical precision to every project. Whether collaborating with teams or working independently, my mission is to deliver impactful solutions that meet business goals while exceeding user expectations.</p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>

        </div>
      </div>
    </section>
  )
}

export default About