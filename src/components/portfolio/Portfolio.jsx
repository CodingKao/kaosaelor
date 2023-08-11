import React from 'react'
import './portfolio.css'
import DateNight from '../../assets/date-night.png'
import PortfolioWebsite from '../../assets/portfolio-website.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// LIST OF PROJECTS
const data = [
  {
    id: 1,
    image: DateNight,
    title: 'Date Night Planner',
    github: 'https://github.com/Date-Planner',
    demo: 'https://github.com/Date-Planner',
    summary: 'An app that allows users to plan their next date night with staying-in or going-out options. ',
    tech: 'JavaScript, HTML, CSS, Node.js, React, react-icons, ExpressJS, Mongoose, MongoDB, and Auth0.'
  },
  {
    id: 2,
    image: PortfolioWebsite,
    title: 'Personal portfolio website',
    github: 'https://github.com/CodingKao/kaosaelor',
    demo: 'https://github.com/CodingKao/kaosaelor',
    summary: 'Created a portfolio website that highlighted my projects and skills. It effectively showcased my achievements to potential clients and employers. ',
    tech: 'JavaScript, React, HTML, CSS, EmailJS, and react-icons'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah',
    tech: 'html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project4',
    github: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah',
    tech: 'html'
  },
  {
    id:5,
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah blah',
    tech: 'html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project 6',
    github: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah',
    tech: 'html'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, summary, tech}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio_-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p><b>Summary:</b> {summary}</p>
                <p><b>Technologies Used:</b><em>{tech}</em> </p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }  
      </div>
    </section>
  )
}

export default Portfolio