import React from 'react'
import { motion } from 'framer-motion'
import project1Thumb from '../assets/AfricamTechThumnb.png'
import swooshThumb from '../assets/swoosh.png'

const Projects = () => {
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='projects' className="bg-dark text-center justify-center md:py-6.5 sm:py-12.5">
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className='font-semibold md:text-5xl sm:text-4xl py-7.5 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-purple-600'
      >
        Projects
      </motion.h1>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-7">
          {/* Image Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img 
              src={project1Thumb} 
              alt="Africam Tech" 
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4"
          >
            <h2 className="text-2xl text-teal-700 font-bold">
              Africam Tech Website
            </h2>
            <p className="text-black/80">
              AFricam Tech is a B2B e-commerce website to provide a variety of electronic security services and products to retailers. My responsibilities on this project included product listing through the WooCommerce plug-in and webpage design using Elementor and Worpress themes.
            </p>
          </motion.div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-7">
          {/* Image Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img 
              src={swooshThumb} 
              alt="Swoosh Delivery" 
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4"
          >
            <h2 className="text-2xl text-teal-700 font-bold">
              Swoosh Delivery Services
            </h2>
            <p className="text-black/80">
              This sample project is designed for a company that provides nationwide delivery for various products. This page was built on ReactJS with Tailwind CSS styling and animations and graphics from the Lottie React library.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects