import React from 'react'
import styles from './Login.module.css'
import { loginUser } from '../../api'
import { useMutation } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

const [loginFormData, setLoginFormData] = React.useState({
  email: "",
  password: ""
})

const navigate = useNavigate(); 
const location = useLocation(); 

const redirectPath = location.state?.from?.pathname || "/host"

const mutation = useMutation({
  mutationFn: loginUser,
  onSuccess: (data) => {
    console.log(data);
    navigate(redirectPath, {replace: true})
  },
  onError: (error) => {
    console.error(error)
  }
});


const handleSubmit = (e) => {
  e.preventDefault();
  mutation.mutate(loginFormData)
}

const handleChange = (e) => {
  const { name, value } = e.target; 
  setLoginFormData(prevData => ({
    ...prevData, 
    [name]: value 
  }))
}


  return (
    <main className={styles.loginPage}>

    { 
      location.state?.message && 
      <h3 className={styles.loginError}>{location.state.message}</h3>
    }

    <h1>Sign in to your account</h1>

    {mutation.isError && (
      <h3 className={styles.loginError}>
        {mutation.error.message}
      </h3>
    )}

    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email address'
        value={loginFormData.email}
        name='email'
        onChange={handleChange}/>
      <input
        type='password'
        placeholder='Password'
        value={loginFormData.password}
        name='password'
        onChange={handleChange}/>
      <button 
      className='orange-btn' 
      disabled={mutation.isLoading}>
        {mutation.isLoading ? "Logging in..." : "Log in"}
      </button>
    </form>
    </main>
  )
}

export default Login