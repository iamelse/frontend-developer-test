import React from 'react'
import About from '../../components/About/About'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Portofolio from '../../components/Portofolio/Portofolio'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Portofolio/>
    </div>
  )
}

export default Home