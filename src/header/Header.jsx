import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Logo from './../../imgs/Slogan.jpg'

const Header = () => {
  return (
    <header id='header-context'>
      <nav>
        <img src={Logo} width='50px' className='img-in' />
      </nav>
      <div>
        <h1 className='h1'>VidaAlvidrio</h1>
        <p className='slogan'>Estructura, Diseño y Elegancia</p>
      </div>
      <a
        href='https://wa.me/525517512462'
        target='_blank'
        className='wps'
        rel='noreferrer'
      >
        <SocialIcon network='whatsapp' />
      </a>
      <a
        href='https://www.facebook.com/people/Vidaal-Vidrio/pfbid02MrnPp3qnarw7N8a6PZnLLTnojXuSWs9H5RqXFCWjr2epEcqU1km78sVNapjvgQ2vl/?mibextid=ZbWKwL'
        target='_blank' className='facebook'
        rel='noreferrer'
      >
        <SocialIcon network='facebook' />
      </a>
    </header>
  )
}

export default Header
