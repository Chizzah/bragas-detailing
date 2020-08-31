import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'
import Facebook from '../../resources/icons/facebook.svg'
import Instagram from '../../resources/icons/instagram.svg'
import Whatsapp from '../../resources/icons/whatsapp.svg'
import Mail from '../../resources/icons/mail.svg'
import Phone from '../../resources/icons/phone.svg'

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <Header />

      <main>{children}</main>

      <footer className='z-50 py-8 text-gray-100 bg-gray-800'>
        <nav className='flex flex-col items-center justify-center w-full max-w-full p-4 mx-auto text-sm text-center md:flex-row md:justify-between md:p-8'>
          <div className='flex items-center justify-start mb-8 md:mb-0 md:order-3'>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <img className='w-6 h-6 mr-6' src={Facebook} alt='facebook icon' />
            <img
              className='w-6 h-6 mr-6'
              src={Instagram}
              alt='instagram icon'
            />
            <img className='w-6 h-6 mr-6' src={Whatsapp} alt='whatsapp icon' />
            <img className='w-6 h-6 mr-6' src={Mail} alt='mail icon' />
            <img className='w-6 h-6' src={Phone} alt='phone icon' />
          </div>
          <p className='mb-4 md:mb-0 md:order-2'>
            Copyright ©Braga`s Car Care Detailing, 2020. All rights reserved.
          </p>
          <p className='md:order-1'>
            JAMstack Website by {''}
            <a
              className='font-bold no-underline hover:text-green-500'
              href='https://chaddwebdesign.co.za'
              target='_blank'
              rel='noopener noreferrer'
            >
              Chadd Web Design
            </a>
          </p>
        </nav>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
