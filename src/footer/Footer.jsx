import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '@/App.css'

const Footer = () => {
  return (
    <>
      <footer>
        <h1 className='finalTxt'>
          Obtén seguridad, estilo y elegancia con VidaAlvidrio
        </h1>
        <div className='logos-rs'>
          <a
            href='https://wa.me/525517512462'
            target='_blank'
            className='wps-2'
            rel='noreferrer'
          >
            <SocialIcon network='whatsapp' />
          </a>
          <a
            href='https://www.facebook.com/people/Vidaal-Vidrio/pfbid02MrnPp3qnarw7N8a6PZnLLTnojXuSWs9H5RqXFCWjr2epEcqU1km78sVNapjvgQ2vl/?mibextid=ZbWKwL'
            target='_blank' className='facebook-logo--f'
            rel='noreferrer'
          >
            <SocialIcon network='facebook' />
          </a>
          <a href='https://twitter.com/VidaAlvidrio?t=MtyB2Q9SKiuC_zF-Y1URag&s=09' target='_blank' rel='noreferrer'><SocialIcon network='twitter' className='twt' /></a>
          <a href='https://instagram.com/vidaalvidrio?igshid=NTc4MTIwNjQ2YQ==' target='_blank' rel='noreferrer' className='ig'><SocialIcon network='instagram' /></a>
          <a href='https://www.tiktok.com/@vidaalvidrio?_t=8dPiIoKfFZO&_r=1' target='_blank' className='ttk' rel='noreferrer'><SocialIcon network='tiktok' /></a>
          <a href='https://mail.google.com/mail/?view=cm&to=ferchis4590@gmail.com' target='_blank' className='email-com' rel='noreferrer'><SocialIcon network='email' /></a>

        </div>
        <p className='pppF'>Contactanos por medio de email o redes sociales!!</p>
      </footer>
    </>
  )
}

export default Footer
