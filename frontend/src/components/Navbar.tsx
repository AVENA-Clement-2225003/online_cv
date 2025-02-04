import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Code2, Briefcase, GraduationCap, Home, Mail, Menu, X, Terminal, Laptop } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: '/', icon: <Home size={20} />, text: 'Home' },
    { to: '/projects', icon: <Code2 size={20} />, text: 'Projects' },
    { to: '/programming-languages', icon: <Terminal size={20} />, text: 'Languages' },
    { to: '/development-tools', icon: <Briefcase size={20} />, text: 'Dev Tools' },
    { to: '/ides', icon: <Laptop size={20} />, text: 'IDEs' },
    { to: '/contact', icon: <Mail size={20} />, text: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-[#45B69C]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                    isActive
                      ? 'border-[#45B69C] text-[#45B69C]'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-[#45B69C]'
                  }`
                }
              >
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-[#45B69C] text-white'
                      : 'text-gray-500 hover:bg-[#45B69C] hover:bg-opacity-10 hover:text-[#45B69C]'
                  }`
                }
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar