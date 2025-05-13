import React from 'react'
import './HostLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {

const navLinkStyle = ({isActive}) => isActive ? "nav-link active" : "nav-link"; 

  return (
    <>
    <nav className='nav'>
        <ul className='nav-list'>
            <li><NavLink to={"/host"} end className={navLinkStyle}>Dashboard</NavLink></li>
            <li><NavLink to={"/host/income"} className={navLinkStyle}>Income</NavLink></li>
            <li><NavLink to={"/host/vans"} className={navLinkStyle}>Vans</NavLink></li>
            <li><NavLink to={"/host/reviews"} className={navLinkStyle}>Reviews</NavLink></li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout