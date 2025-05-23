import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import VanDetail from './pages/VanDetail/VanDetail';
import Layout from './components/Layout';

import HostLayout from './components/HostLayout/HostLayout'
const Dashboard = React.lazy(() => import('./pages/Host/Dashboard/Dashboard'))
const Income = React.lazy(() => import('./pages/Host/Income/Income'))
const Reviews = React.lazy(() => import('./pages/Host/Reviews/Reviews'))
const HostVans = React.lazy(() => import('./pages/Host/HostVans/HostVans'))
const HostVanDetail = React.lazy(() => import('./pages/Host/HostVans/HostVanDetail'))
const HostVanInfo = React.lazy(() => import('./pages/Host/HostVans/HostVanInfo'))
const HostVanPricing = React.lazy(() => import('./pages/Host/HostVans/HostVanPricing'))
const HostVanPhotos = React.lazy(() => import('./pages/Host/HostVans/HostVanPhotos'))


import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner/Spinner';
import AuthRequired from './components/AuthRequired';




function App() {

  return (
    <div className='wrapper'>
    <BrowserRouter>
      <ScrollToTop />
      <React.Suspense fallback={<Spinner className='loading'/>}>
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='vans' element={<Vans/>}/>
        <Route path='vans/:id' element={<VanDetail/>}/>
        <Route path='login' element={<Login />} />

        {/* HOST LAYOUT below */}

          <Route element={<AuthRequired/>}>
          <Route path='host' element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<Income/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='vans' element={<HostVans/>}/>

          <Route path='vans/:id' element={<HostVanDetail/>}>
            <Route index element={<HostVanInfo/>}/>
            <Route path='pricing' element={<HostVanPricing/>}/>
            <Route path='photos' element={<HostVanPhotos/>}/>
          </Route>
  
          </Route> 
          </Route>
          
        {/* HOST LAYOUT above */}

        

        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      </React.Suspense>
      <ToastContainer 
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'/>
    </BrowserRouter>
    </div>
  )
}

export default App
