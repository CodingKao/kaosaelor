import React from 'react'
import './portfolio.css'
import DateNight from '../../assets/date-night.png'
import HornedBeast from '../../assets//hornedbeast3.png'
import Admindash from '../../assets/Admindash.png'
import aisummarize from '../../assets/ai-summarize.jpg'
import cyclistic from '../../assets/cyclistic-capstone.png'
import storefront from '../../assets/storefont2.png'

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
    image: cyclistic,
    title: 'Cyclistic Analysis',
    code: 'https://github.com/CodingKao/cyclistic_analysis',
    demo: 'https://rpubs.com/Codingkao/cyclistic-analysis',
    summary: 'Conducted a comprehensive data analysis to explore the distinct usage patterns of annual members and casual riders in Cyclistic bike-sharing. Leveraging powerful tools such as R Studio and Excel spreadsheets, I uncovered valuable insights that have the potential to shape future marketing strategies.',
    tech: 'R, R Studio, R Markdown, Rpubs, and Excel spreadsheets'
  },
  {
    id:4,
    image: storefront,
    title: 'Store Front',
    code: 'https://github.com/CodingKao/storefront',
    demo: 'https://playful-licorice-86a9d1.netlify.app/',
    summary: 'Created an intuitive Store Front app using Redux for seamless state management. This user-friendly application categorizes products into three distinct categories, enhancing the shopping experience. With efficient state handling, it ensures a smooth and responsive interface for users to explore and purchase products easily. ',
    tech: 'JavaScript, HTML, CSS, React, Redux, Netlify'
  },
  {
    id: 5,
    image: HornedBeast,
    title: 'Horned Beast',
    code: 'https://github.com/CodingKao/horned-beast',
    demo: 'https://horned-beast-kao.netlify.app',
    summary: 'Created an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.',
    tech: 'JavaScript, React, HTML, CSS, React-bootstrap, Modal, and Netlify'
  },
  {
    id: 6,
    image: DateNight,
    title: 'Date Night Planner',
    code: 'https://github.com/Date-Planner',
    demo: 'https://github.com/Date-Planner',
    summary: 'An app that allows users to plan their next date night with staying-in or going-out options. With a sleek and intuitive mobile theme, Date Night Planner ensures a user-friendly experience for effortless date night planning',
    tech: 'JavaScript, HTML, CSS, Node.js, React, react-icons, ExpressJS, Mongoose, MongoDB, and Auth0 and Netlify.'
  },
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
                  <img src={image} alt={title} style={{ width: '730px', height: '500px' }}/>
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