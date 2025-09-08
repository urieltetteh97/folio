import React from 'react'
import { motion } from 'motion/react'
import profilePic from '../assets/uu.jpg'

const About = () => {
  return (
    <section id='home' className="w-full ps-5.5">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-8 w-full h-auto text-center my-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:text-left text-center">
          <motion.h1
           initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
          className="text-5xl tracking-tight font-bold flex flex-col transform text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 transition-opacity duration-500 fade-in">
            Hi There
            <br />
            I'm Uriel Tetteh
            <motion.span
              className="text-3xl  mt-4 text-gray-300 tracking-wide align-start"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
            a passionate web developer with a keen interest in creating dynamic and responsive web applications.
            </motion.span>
          </motion.h1>
        </div>
        
        <div className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0">
          <motion.img 
          initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
          className="w-md h-md object-cover rounded-full" src={profilePic} alt="Profile" />
        </div>
      </motion.div>
    </section>
  )
}

export default About