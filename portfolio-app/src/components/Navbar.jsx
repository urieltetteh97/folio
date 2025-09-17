import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky pt-1.5 top-0 z-50 shadow-md backdrop-blur-lg bg-dark/70 border-b-1 border-green-400 py-3.5'>
      <div className='container bg-dark rounded-lg px-4 mx-auto relative text-sm'>
        {/* Hamburger (checkbox hack) */}
        <input id="menu-toggle" type="checkbox" className="peer hidden lg:hidden" />
        <div className="flex justify-between items-center">
          {/* Logo or Brand */}
          <span className="text-white font-bold text-2xl">
         
          </span>
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden">
            <svg className="w-8 h-8 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#home" className='tracking-tight cursor-pointer font-bold text-teal-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-2xl transition-all duration-300'>Home</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#aboutme" className='tracking-tight cursor-pointer font-bold text-teal-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-2xl transition-all duration-300'>About</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#projects" className='tracking-tight cursor-pointer font-bold text-teal-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-2xl transition-all duration-300'>Projects</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#contact" className='tracking-tight cursor-pointer font-bold text-teal-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-2xl transition-all duration-300'>Contact</a>
            </li>
          </ul>
        </div>
        {/* Mobile Dropdown */}
        <ul className="flex-col bg-light rounded-lg shadow-md mt-2 p-4 space-y-4 lg:hidden hidden peer-checked:flex" id="menu">
          <li><a href="#" className="block text-teal-400 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-400 hover:to-purple-800 text-xl transition-all duration-300 py-1.5 px-1.5">Home</a></li>
          <li><a href="#" className="block text-teal-500 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-xl transition-all duration-300 py-1.5 px-1.5">About</a></li>
          <li><a href="#" className="block text-teal-500 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-xl transition-all duration-300 py-1.5 px-1.5">Projects</a></li>
          <li><a href="#" className="block text-teal-500 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-xl transition-all duration-300 py-1.5 px-1.5">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar