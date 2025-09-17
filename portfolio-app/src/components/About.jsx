import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/uu.jpg'

const About = () => {
  return (
    <section id='home' className="w-full ps-5.5">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-8 w-full h-auto text-center my-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl tracking-tight font-bold flex flex-col transform text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-800 transition-opacity duration-500 fade-in"
          >
            Hi There
            <br />
            I'm Uriel Tetteh
            <motion.span
              className="text-3xl mt-4 text-black tracking-wide align-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              a passionate web developer with a keen interest in creating dynamic and responsive web applications.
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.div 
          className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-md h-md object-cover rounded-full"
            src={profilePic}
            alt="Profile"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About