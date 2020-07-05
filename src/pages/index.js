import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Location from '../../resources/icons/we-come-to-you.svg'
import Product from '../../resources/icons/quality-cleaning-products.svg'
import Mask from '../../resources/icons/we-wear-facemasks.svg'
import '../css/hero.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      {/* Hero */}

      <BackgroundImage
        className='BG-1'
        fadeIn={false}
        loading='eager'
        fluid={data.hero.childImageSharp.fluid}
      >
        <div className='flex flex-col items-center justify-start w-full h-full text-center text-gray-100 lg:justify-center black-overlay-1'>
          <h1 className='mt-48 mb-6 lg:mt-0'>
            <span className='uppercase md:text-lg'>Quality Car Detailing</span>
            <br />
            <span className='text-4xl font-semibold capitalize md:text-6xl'>
              Without the Hassle
            </span>
          </h1>
          <p className='mb-12 text-xl'>
            We come to where you are to provide a car detailing{' '}
            <br className='hidden md:block' /> service that will have your
            vehicle looking like brand new.
          </p>
          <button className='p-3 text-2xl font-semibold uppercase bg-transparent border-2 border-gray-100 border-solid rounded-lg focus:outline-none hover:bg-gray-100 hover:text-gray-900 hover'>
            Book Now
          </button>
        </div>
      </BackgroundImage>

      {/* About */}

      <section
        id='about'
        className='w-full py-16 text-center text-gray-100 bg-gray-900'
      >
        <div className='max-w-2xl mx-auto'>
          <h2 className='mb-12 text-2xl font-semibold uppercase md:text-4xl'>
            About Us
          </h2>
          <p className='mx-4'>
            At Braga`s we believe in providing the best quality service with the
            highest quality products way above industry strandards to fulfil our
            clients` needs. By travelling to our clients, we cut out the stress
            and effort associated with going to a car wash and leaving your baby
            in someone else`s care. <br />
            <br /> Whether you`re at home busy spending time with family or at
            work busy with an important meeting. We come to where you need us to
            help take care of your automobile car detailing needs.
          </p>
        </div>
      </section>

      {/* Benefits */}

      <section className='flex flex-col items-center justify-center w-full py-16 text-center md:py-32'>
        <h2 className='mb-12 text-2xl font-semibold uppercase md:text-4xl'>
          Benefits of Choosing Us
        </h2>
        <div className='flex flex-col items-center justify-center w-full md:flex-row'>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 mb-12 border-2 border-gray-900 border-solid rounded-lg md:mb-0 md:mx-8 '>
            <img
              className='w-12 h-12 mb-6'
              src={Location}
              alt='Travel to your location'
            />
            <h3 className='mb-3 font-semibold uppercase'>Your Location</h3>
            <p>We travel to your location to detail your vehicle</p>
          </div>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 mb-12 border-2 border-gray-900 border-solid rounded-lg md:mb-0 md:mx-8 '>
            <img
              className='w-12 h-12 mb-6'
              src={Product}
              alt='Use high quality cleaning products'
            />
            <h3 className='mb-3 font-semibold uppercase'>Quality Products</h3>
            <p>Our cleaning products are the best on the market</p>
          </div>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 border-2 border-gray-900 border-solid rounded-lg md:mx-8'>
            <img
              className='w-12 h-12 mb-6'
              src={Mask}
              alt='Where facemasks to prevent Covid-19'
            />
            <h3 className='mb-3 font-semibold uppercase'>Wear Facemasks</h3>
            <p>We wear facemasks to help prevent Covid-19</p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section
        id='services'
        className='w-full text-center text-gray-100 bg-gray-900'
      >
        <div className='w-full h-auto'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full md:flex-row'>
              <div className='w-full md:w-1/2'>
                <Img
                  fluid={data.exterior.childImageSharp.fluid}
                  alt='Exterior cleaning service'
                />
              </div>
              <div className='w-full py-16 md:w-1/2'>
                <h3 className='mb-3 text-xl font-semibold uppercase'>
                  Exterior Services
                </h3>
                <p className='mx-4 md:mx-24'>
                  Complete exterior detailing including washing your vehicle,
                  claying the paint, removal of bugs/tar and preparing your car
                  for cleaning & polishing finish. During this operation all
                  exterior rubber trim and tires will be dressed to like new
                  condition.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row'>
              <div className='w-full md:order-2 md:w-1/2'>
                <Img
                  fluid={data.interior.childImageSharp.fluid}
                  alt='Exterior cleaning service'
                />
              </div>
              <div className='w-full py-16 md:order-1 md:w-1/2'>
                <h3 className='mb-3 text-xl font-semibold uppercase'>
                  Interior Services
                </h3>
                <p className='mx-4 md:mx-24'>
                  The interior of your vehicle will be purged of all loose
                  material carpets while seats and miscellaneous upholstery will
                  be spot treated, shampooed & cleaned.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row'>
              <div className='w-full md:w-1/2'>
                <Img
                  fluid={data.engine.childImageSharp.fluid}
                  alt='Exterior cleaning service'
                />
              </div>
              <div className='w-full py-16 md:w-1/2'>
                <h3 className='mb-3 text-xl font-semibold uppercase'>
                  Engine Cleaing
                </h3>
                <p className='mx-4 md:mx-24'>
                  Engines will be cleaned using the finest products to remove
                  grease and grim from surfaces. A speacial non-silicone
                  dressing will be applied to ensure bright clean surfaces for
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email */}

      <section id='newsletter' className='w-full py-16 text-center bg-gray-300'>
        <div className='flex flex-col items-center justify-center max-w-2xl mx-auto'>
          <h2 className='mb-6 text-2xl font-semibold uppercase md:text-4xl'>
            Newsletter
          </h2>
          <p className='mx-4 mb-12'>
            Stay up to date and don`t miss out on our latest car care tips,
            promotions & news by subscribing to our monthly newsletter.
          </p>
          <div>
            <form action=''>
              <div className='flex items-center justify-center w-64 h-10 md:w-96'>
                <input
                  className='inline-block w-40 h-full p-3 capitalize rounded-l-full md:w-64 focus:outline-none'
                  type='email'
                  placeholder='Enter Your Email'
                />
                <button
                  className='inline-block w-32 h-full p-3 text-xs font-semibold text-gray-100 uppercase bg-orange-500 rounded-r-full md:w-32 hover:bg-orange-300 hover focus:outline-none'
                  type='submit'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "bragas-detailing-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    exterior: file(relativePath: { eq: "exterior-service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    interior: file(relativePath: { eq: "interior-service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    engine: file(relativePath: { eq: "engine-cleaning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
