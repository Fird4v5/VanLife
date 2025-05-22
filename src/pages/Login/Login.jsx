import React from 'react'
import styles from './Login.module.css'
import { loginUser } from '../../api'
import { useMutation } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { errorMessages } from './errorMessages'
import { toast } from 'react-toastify'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [isSignup, setIsSignup] = React.useState(false); 
  const [loginFormData, setLoginFormData] = React.useState({
  email: "",
  password: ""
  })
  const [showPassword, setShowPassword] = React.useState(false)


  const togglePasswordVisibility = () => {
    setShowPassword(prevValue => !prevValue)
  }
// INPUT FOCUS
const focusRef = React.useRef(); 
React.useEffect(() => {
  focusRef.current.focus(); 
}, [])



const navigate = useNavigate(); 
const location = useLocation(); 
const redirectPath = location.state?.from?.pathname || "/host"


// YOU MUST LOGIN FIRST MESSAGE 
const hasShownToastRef = React.useRef(false); 

React.useEffect(() => {
  if (location.state?.message && !isSignup && !hasShownToastRef.current) {
    toast.info(location.state.message);
    window.history.replaceState({}, document.title);
    hasShownToastRef.current = true; 
  }
}, [location.state, isSignup])


const mutation = useMutation({
  mutationFn: (data) => loginUser({ ...data, isSignup}),
  onSuccess: (data) => {
    if (isSignup) {
    toast.success("Account created! You can now log in")
    setIsSignup(false);
    } else {
    navigate(redirectPath, { replace: true })
    }
  },
  onError: (error) => {
    const msg = errorMessages(error.message)
    toast.error(msg);
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

    <h1>{isSignup ? "Create an account" : "Sign in to your account"}</h1>


    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email address'
        value={loginFormData.email}
        name='email'
        onChange={handleChange}
        ref={focusRef}
        required
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        value={loginFormData.password}
        name='password'
        onChange={handleChange}
        required
      />
      <button 
      className='orange-btn' 
      disabled={mutation.isLoading}>
        {mutation.isLoading ? 
        (isSignup ? 
        "Signing up..." : "Logging in...") :
        (isSignup ? "Sign Up" : "Log in")}
      </button>
      <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
      {showPassword ? 
      <FaEye/> :
      <FaEyeSlash/> }
      </span>
    </form>

    <p className={styles.loginCTA}>
      {isSignup ? "Already have an account" : "Don't have an account?"}
      <button
        type='button'
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup ? "Log in" : "Sign up"}
      </button>
    </p>
    </main>
  )
}

export default Login