import React from 'react'
import './HostLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const HostLayout = () => {

const navLinkStyle = ({isActive}) => isActive ? "nav-link active" : "nav-link"; 

  return (
    <>
    <nav className='nav'>
        <ul className='nav-list'>
            <li><NavLink to={"."} end className={navLinkStyle}>Dashboard</NavLink></li>
            <li><NavLink to={"income"} className={navLinkStyle}>Income</NavLink></li>
            <li><NavLink to={"vans"} className={navLinkStyle}>Vans</NavLink></li>
            <li><NavLink to={"reviews"} className={navLinkStyle}>Reviews</NavLink></li>
        </ul>
    </nav>
    <React.Suspense fallback={<Spinner className="loading"/>}>
      <Outlet/>
    </React.Suspense>
    </>
  )
}

export default HostLayout