import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar-icon.png"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

const Navbar = () => {

  const navLinkStyle = ({isActive}) => isActive ? "nav-link active" : "nav-link"; 
    
  return (
    <header>
    <nav className='nav'>
        <Link to={"/"}><img src={logo} alt="#Vanlife logo"/></Link>
        <ul className='nav-list'>
            <li><NavLink to={"about"} className={navLinkStyle}>About</NavLink></li>
            <li><NavLink to={"vans"} className={navLinkStyle}>Vans</NavLink></li>
            <li><NavLink to={"host"} className={navLinkStyle}>Host</NavLink></li>
            <li>
              <NavLink to={"login"} className={`nav-link login`}>
                  <img src={avatar} alt="login navigation icon"/>
              </NavLink>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar