import React from 'react'
import './portfolio.css'
import DateNight from '../../assets/date-night.png'
import PortfolioWebsite from '../../assets/portfolio-website.png'
import Admindash from '../../assets/Admindash.png'
import aisummarize from '../../assets/ai-summarize.jpg'
import IMG4 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/portfolio6.jpg'

// LIST OF PROJECTS
const data = [
  {
    id: 1,
    image: aisummarize,
    title: 'AI Article Summarize',
    code: 'https://github.com/CodingKao/ai-summarize',
    demo: 'https://ai-summarize-kao.netlify.app/',
    summary: 'The AI Summarize App harnesses OpenAI GPT-4\'s power to revolutionize article consumption. Simply copy and paste an article link, and the app generates concise and accurate summaries, saving you time and effort.',
    tech: 'JavaScript, React, React-icons, Vitejs, RapidAPI, Tailwind and Netlify.'
  },
  {
    id: 2,
    image: Admindash,
    title: 'Admin Dashboard',
    code: 'https://github.com/CodingKao/admindash',
    demo: 'https://github.com/CodingKao/admindash',
    summary: 'The Admin Dashboard App uses React and Syncfusion tools for theming, tables, charts, calendar, and Kanban integration. It has three pages, four apps, and seven dynamic charts for efficient data-driven decision-making.',
    tech: 'JavaScript, React, React-icons, Tailwind, Syncfusion, and Netlify.'
  },
  {
    id: 3,
    image: DateNight,
    title: 'Date Night Planner',
    code: 'https://github.com/Date-Planner',
    demo: 'https://github.com/Date-Planner',
    summary: 'An app that allows users to plan their next date night with staying-in or going-out options. With a sleek and intuitive mobile theme, Date Night Planner ensures a user-friendly experience for effortless date night planning',
    tech: 'JavaScript, HTML, CSS, Node.js, React, react-icons, ExpressJS, Mongoose, MongoDB, and Auth0 and Netlify.'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project4',
    code: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah',
    tech: 'html'
  },
  {
    id:5,
    image: IMG5,
    title: 'Project 5',
    code: 'https://github.com/CodingKao',
    demo: 'https://github.com/CodingKao',
    summary: 'blah blah blah blah',
    tech: 'html'
  },
  {
    id: 6,
    image: PortfolioWebsite,
    title: 'Personal portfolio website',
    code: 'https://github.com/CodingKao/kaosaelor',
    demo: 'https://kaosaelor.netlify.app/',
    summary: 'Created a portfolio website that highlighted my projects and skills. It effectively showcased my achievements to potential clients and employers. ',
    tech: 'JavaScript, React, HTML, CSS, EmailJS, and react-icons, and Netlify'
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
                <div className="portfolio__item-image">
                  <img src={image} alt={title} style={{ width: '530px', height: '500px' }}/>
                </div>
                <h3>{title}</h3>
                <p><b>Summary:</b> {summary}</p><br></br>
                <p><b>Technologies Used:</b><em> {tech}</em> </p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Code</a>
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