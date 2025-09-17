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
      <div className="flex flex-col gap-8 items-center">
        {/* Project Cards */}
        {/*
          {
            title: "Africam Tech",
            description: "AFricam Tech is a B2B e-commerce website to provide a variety of electronic security services and products to retailers. My responsibilities on this project included product listing through the WooCommerce plug-in and webpage design using Elementor and Worpress themes.",
            image: project1Thumb,
            link: "https://africamtech.com/"
          },
          {
            title: "Swoosh Product Delivery Services",
            description: "This sample project is designed for a company that provides nationwide delivery for various products. This page was built on ReactJS with Tailwind CSS styling and animations and graphics from the Lottie React library.",
            image: swooshThumb,
            link: "https://swoosh-kappa.vercel.app/"
          },
          // ...add other projects
        */}
        { [
          {
            title: "Africam Tech",
            description: "AFricam Tech is a B2B e-commerce website to provide a variety of electronic security services and products to retailers. My responsibilities on this project included product listing through the WooCommerce plug-in and webpage design using Elementor and Worpress themes.",
            image: project1Thumb,
            link: "https://africamtech.com/"
          },
          {
            title: "Swoosh Product Delivery Services",
            description: "This sample project is designed for a company that provides nationwide delivery for various products. This page was built on ReactJS with Tailwind CSS styling and animations and graphics from the Lottie React library.",
            image: swooshThumb,
            link: "https://swoosh-kappa.vercel.app/"
          },
          {
            title: "First Love Church",
            description: "This sample project is designed for a company that provides nationwide delivery for various products. This page was built on ReactJS with Tailwind CSS styling and anima",
            image: swooshThumb,
            link: "https://swoosh-kappa.vercel.app/"
          },

          // ...add other projects
        ].map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row bg-gray-400 rounded-lg shadow-2xl overflow-hidden w-full max-w-3xl"
          >
            <div className="md:w-3/3 w-full flex justify-center items-center p-4">
              <img src={project.image} alt={`${project.title} Thumbnail`} className='w-5000 h-80 object-cover rounded-2xl' />
            </div>
            <div className="md:w-2/3 w-full flex flex-col justify-center items-start p-4 text-left">
              <h2 className='text-xl font-bold text-teal-600'>{project.title}</h2>
              <p className='text-black'>{project.description}</p>
              <a href={project.link} className='text-teal-500 hover:underline mt-2'>View Project</a>
            </div>
          </motion.div>
        )) }
      </div>
    </section>
  )
}

export default Projects