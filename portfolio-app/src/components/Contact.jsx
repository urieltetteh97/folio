import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='w-auto h-25 rounded-lg flex bg-dark py-1.5 justify-center items-center bg-gray-800 sm:mx-10 md:mx-20 mb-2.5'>
        <h1 className="w-50 text-white font-bold text-start py-2.5 px-2.5 mx-1.5">Let's connect.</h1>
        <div className="flex text-end gap-x-2.5">
          <a href="https://www.linkedin.com/in/uriel-tetteh-4846b1121/" target="_blank" rel="noopener noreferrer">
            <button className="w-1.5/3 cursor-pointer rounded-lg bg-gradient-to-bl from-red-500 to-orange-400 text-white font-bold py-2 px-3.5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-orange-200 hover:to-red-800 hover:scale-105">
              LinkedIn
            </button>
          </a>
          <a href="https://www.behance.net/your-profile" target="_blank" rel="noopener noreferrer">
            <button className="w-1.5/3 cursor-pointer rounded-lg bg-gradient-to-bl from-red-500 to-orange-400 text-white font-bold py-2 px-3.5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-orange-200 hover:to-red-800 hover:scale-105">
              Behance
            </button>
          </a>
          <a href="https://github.com/urieltetteh97" target="_blank" rel="noopener noreferrer">
            <button className="w-1.5/3 cursor-pointer rounded-lg bg-gradient-to-bl from-red-500 to-orange-400 text-white font-bold py-2 px-3.5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-orange-200 hover:to-red-800 hover:scale-105">
              Github
            </button>
          </a>
        </div>
    </section>
  )
}

export default Contact