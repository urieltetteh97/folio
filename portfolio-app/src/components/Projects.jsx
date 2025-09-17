import React from 'react'
import { motion } from 'motion/react'
import project1Thumb from '../assets/AfricamTechThumnb.png'
import swooshThumb from '../assets/swoosh.png'

const Projects = () => {
  return (
    
    
    <section id='projects' className=" bg-dark text-center justify-center md:py-6.5 sm:py-12.5"> 
      <h1 className='font-semibold md:text-5xl sm:text-4xl py-7.5 bg-clip-text text-transparent bg-gradient-to-l from-teal-600 to-purple-600'> Projects</h1>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col md:flex-row bg-gray-400 rounded-lg shadow-2xl
        overflow-hidden w-full max-w-3xl">
          <div className="md:w-3/3 w-full flex justify-center items-center p-4">
            <img src={project1Thumb} alt="Project1 Thumbnail" className='w-5000 h-80 object-cover rounded-2xl ' />
          </div>
          <div className="md:w-2/3 w-full flex flex-col justify-center items-start p-4 text-left">
            <h2 className='text-xl font-bold text-teal-600'>Africam Tech</h2>
            <p className='text-black'>AFricam Tech is a B2B e-commerce website to provide a variety of electronic security services and products to retailers
               . My responsibilities on this project included product listing through the WooCommerce plug-in and webpage design using Elementor and Worpress themes.</p>
            <a href="https://africamtech.com/" className='text-teal-500 hover:underline mt-2'>View Project</a>
          
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-gray-400 rounded-lg shadow-2xl 
        overflow-hidden w-full max-w-3xl">
          <div className="md:w-3/3 w-full flex justify-center items-center p-4">
            <img src={swooshThumb} alt="Project2 Thumbnail" className='w-5000 h-80 object-cover rounded-2xl ' />
          </div>
          <div className="md:w-2/3 w-full flex flex-col justify-center items-start p-4 text-left">
            <h2 className='text-xl font-bold text-teal-600'>Swoosh Product Delivery Services</h2>
            <p className='text-black'>This sample project is designed for a company that provides nationwide delivery for various products. This page was built on ReactJS with Tailwind CSS styling and animations and graphics from the Lottie React library. </p>
            <a href="https://swoosh-kappa.vercel.app/" className='text-teal-500 hover:underline mt-2'>View Project</a>
          
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-gray-400 rounded-lg shadow-lg 
        overflow-hidden w-full max-w-3xl">
          <div className="md:w-3/3 w-full flex justify-center items-center p-4">
            <img src={project1Thumb} alt="Project1 Thumbnail" className='w-5000 h-80 object-cover rounded-2xl ' />
          </div>
          <div className="md:w-2/3 w-full flex flex-col justify-center items-start p-4 text-left">
            <h2 className='text-xl font-bold text-teal-600'>First Love Church</h2>
            <p className='text-black'>A brief description of Project 1 goes here. It highlights the main features and technologies used.</p>
            <a href="https://flwebsite2.vercel.app/" className='text-teal-500 hover:underline mt-2'>View Project</a>
          
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Projects