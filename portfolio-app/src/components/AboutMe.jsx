import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section id='aboutme' className='flex bg-dark justify-center md:mx-10 sm:mx-2.5'>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-black text-md text-center py-2.5 px-2.5 sm:w-3/3 md:w-2/3 font-semibold tracking-tight"
      >
            My journey in web development has been fueled by a love for coding and a desire to build innovative solutions that enhance user experiences.
            With skills in the React framework and experience with Tailwind and Bootstrap styling and WordPress website development, I strive to create responsive and dynamic web applications that are both functional and visually appealing.
            I am always eager to learn new technologies and improve my skills, and I am excited to contribute to projects that make a difference.
            <br />
            <br />
            <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="rounded-md cursor-pointer bg-teal-400 text-2xl py-1.5 px-7.5 text-white hover:text-black hover:bg-gradient-to-b from-teal-400 to-purple-800 transition-colors duration-500"
        >
          My CV
        </motion.button>
            </motion.p>
            <br />
          
    </section>
  )
}

export default AboutMe