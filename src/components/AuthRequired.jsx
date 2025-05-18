import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const AuthRequired = () => {

    const authenticated = true; 

    const location = useLocation(); 

  return authenticated ? 
        <Outlet/> : 
        <Navigate 
        to="login" 
        state={{ message: "You must log in first", from: location}}
        replace/>
}

export default AuthRequired