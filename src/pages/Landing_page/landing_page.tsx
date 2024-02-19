import React from 'react'
import './landing_page.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const landing_page = () => {
  return (
    <>
    <div className='div'>
    <Navbar/>
    
    <section className='div1'>
        <div>
          <h1> Tunnel Craft : Votre dev helper</h1>
          <p>Simplifiez l'intégration harmonieuse des application
          tierces  dans <br/> vos propres applications 
          avec notre plateforme experte <br/>  en tunnels.</p>

          <a href='/connection' className='start-btn'>Commencer</a>
        </div>

      </section>
     
        
    </div>

    <Footer/>
  </>

  )
}

export default landing_page