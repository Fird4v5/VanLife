import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    
  return (
    <header>
    <nav className='nav'>
        <img src={logo} alt="#Vanlife logo"/>
        <ul className='nav-list'>
            <li className='nav-item'><Link to={"/"}>Home</Link></li>
            <li className='nav-item'><Link to={"/about"}>About</Link></li>
            <li className='nav-item'><Link to={"/vans"}>Vans</Link></li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar