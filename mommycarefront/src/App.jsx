import { useState } from 'react'

import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Home from './Componets/Home/Home'
import Middle from './Componets/Midlle/Middle'
import Daycare from './Componets/Daycare/Daycare'
import Testimonials from './Componets/Testimonials/Testimonials'
import Faq from './Componets/FAQ/Faq'
import Sub from './Componets/Subscribers/Sub'
import Footer from './Componets/Footer/Footer'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Middle/>
        <Daycare/>
        <Testimonials/>
        <Faq/>
        <Sub/>
        <Footer/>

      </div>
    </>
  )
}

export default App
