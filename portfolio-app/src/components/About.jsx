import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/uu.jpg'

const About = () => {
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='home' className="w-full ps-5.5">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-8 w-full h-auto text-center my-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:text-left text-center">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="text-5xl tracking-tight font-bold flex flex-col transform text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-800 transition-opacity duration-500 fade-in"
          >
            Hi There
            <br />
            I'm Uriel Tetteh
            <motion.span
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.9 }}
              className="text-3xl mt-4 text-black tracking-wide align-start"
            >
              a passionate web developer with a keen interest in creating dynamic and responsive web applications.
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.div 
          className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <motion.img 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
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