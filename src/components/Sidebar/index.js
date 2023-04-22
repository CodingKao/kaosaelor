import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav> 
        <ul>
            <li>
                <a href="https://github.com/CodingKao" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                </a>  
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kao-saelor/">
                <FontAwesomeIcon icon={faLinkedin} color="4d4d44" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar

