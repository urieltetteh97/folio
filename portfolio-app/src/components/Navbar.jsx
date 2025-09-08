import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky pt-1.5 top-0 z-50 shadow-md backdrop-blur-lg bg-dark/70 border-b-1 border-orange-400 py-3.5'>
      <div className='container bg-dark rounded-lg px-4 mx-auto relative text-sm'>
        {/* Hamburger (checkbox hack) */}
        <input id="menu-toggle" type="checkbox" className="peer hidden lg:hidden" />
        <div className="flex justify-between items-center">
          {/* Logo or Brand */}
          <span className="text-white font-bold text-2xl">
         
          </span>
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#home" className='tracking-tight cursor-pointer font-bold text-white hover:text-orange-400 text-2xl'>Home</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#aboutme" className='tracking-tight cursor-pointer font-bold text-white hover:text-orange-400 text-2xl'>About</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#projects" className='tracking-tight cursor-pointer font-bold text-white hover:text-orange-400 text-2xl'>Projects</a>
            </li>
            <li className='transform hover:scale-110 transition-all duration-300 ease-in-out'>
              <a href="#contact" className='tracking-tight cursor-pointer font-bold text-white hover:text-orange-400 text-2xl'>Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Mobile Dropdown */}
        <ul className="flex-col bg-dark rounded-lg shadow-md mt-2 p-4 space-y-4 lg:hidden hidden peer-checked:flex" id="menu">
          <li><a href="#" className="block text-white font-bold hover:text-orange-400 text-xl">Home</a></li>
          <li><a href="#" className="block text-white font-bold hover:text-orange-400 text-xl">About</a></li>
          <li><a href="#" className="block text-white font-bold hover:text-orange-400 text-xl">Projects</a></li>
          <li><a href="#" className="block text-white font-bold hover:text-orange-400 text-xl">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar