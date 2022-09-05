import React from 'react'
import About from '../../components/About/About'
import Client from '../../components/Client/Client'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Portofolio from '../../components/Portofolio/Portofolio'
import Team from '../../components/Team/Team'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Portofolio/>
        <Client/>
        <About/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home