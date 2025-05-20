import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import VanDetail from './pages/VanDetail/VanDetail';
import Layout from './components/Layout';

import HostLayout from './components/HostLayout/HostLayout'
import Dashboard from './pages/Host/Dashboard/Dashboard' 
import Income from './pages/Host/Income/Income' 
import Reviews from './pages/Host/Reviews/Reviews'
import HostVans from './pages/Host/HostVans/HostVans'
import HostVanDetail from './pages/Host/HostVans/HostVanDetail'
import HostVanInfo from './pages/Host/HostVans/HostVanInfo'
import HostVanPricing from './pages/Host/HostVans/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVans/HostVanPhotos'

import ScrollToTop from './components/ScrollToTop';
import AuthRequired from './components/AuthRequired';




function App() {

  return (
    <div className='wrapper'>
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
    </div>
  )
}

export default App
