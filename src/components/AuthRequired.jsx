import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext';

const AuthRequired = () => {

  const { user, authLoading } = useAuth(); 
  const location = useLocation(); 

  if (authLoading) {
    return <h3 className='loading'>Loading...</h3>
  }

  

  return user ? (
    <Outlet />
  ) : (
    <Navigate 
      to="/login"
      state={{ message: "You must login in first", from: location }}
      replace
    />
  )
}

export default AuthRequired