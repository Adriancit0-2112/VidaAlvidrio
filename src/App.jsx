import '@/App.css'
import Gallery from '@/page/Garelly'
import Footer from '@/footer/Footer'
import { SocialIcon } from 'react-social-icons'

function App () {
  return (
    <>
      <header id='header-context'>
        <nav>
          <img src='/imgs/house-window-icon-free-vector.jpg' width='50px' className='img-in' />
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

      <section id='section-p'>
        <div className='container'>
          <div className='txt-aling'>
            <h2>EXPERTOS EN CANCELES, VIDRIOS Y VENTANAS.
              COMPRA, VENTA INSTALACION Y DISEÑO.
            </h2>
          </div>
          <div className='parrafoUno'>
            <p className='parrafo'>Decoracion y seguridad al maximo,
              con los mejores productos
              y servicios al cliente
            </p>
          </div>
        </div>
        <div className='box-derecha'>
          <img src='/imgs/WhatsApp Image 2022-10-28 at 21.39.00 (6).jpeg' className='img-section--1' alt='' />
        </div>
        <div className='box-izquierda'>
          <img src='/imgs/pgn.img.03.jpeg' alt='' className='img-section--2' />
        </div>
        <div className='textoTres'>
          <h3 className='textoDos'>Amplia variedad de Servicios</h3>
          <p className='parrafoDos-l'>Ofrecemos diferentes opciones y diseños para que
            puedas elegir la mejor de acuerdo a tus necesidades y
            gustos.
          </p>
        </div>
      </section>
      <section id='seccion-2'>
        <div>
          <h4 className='textoCuatro'>Servicio de instalacion de alta Calidad</h4>
          <p className='parrafoCuatro'>Nos aseguramos de que la instalación de nuestros
            productos sea impecable, para que tengas la seguridad
            de que durarán mucho tiempo.
          </p>
        </div>
        <div>
          <img src='/imgs/pgn.img.04.jpeg' alt='' className='img-section--3' />
        </div>
        <div>
          <img src='/imgs/pgn.img.06.jpeg' alt='' className='img-section--4' />
        </div>
        <div className='h5'>
          <h5 className='textoCinco'>Asesoría personlizada.</h5>
          <p className='parrafoCinco'>Damos recomendaciones y sugerencias para que tomes la mejor decisión
            al momento de eligir tus productos y ajustarnos a tus necesidades
          </p>
        </div>
      </section>
      <Gallery />
      <Footer />
    </>
  )
}

export default App
