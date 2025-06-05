import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, text: 'john.doe@email.com' },
    { icon: <Phone className="w-6 h-6" />, text: '+1 (555) 123-4567' },
    { icon: <MapPin className="w-6 h-6" />, text: 'San Francisco, CA' },
  ]

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/johndoe', name: 'LinkedIn' },
    { icon: <Github className="w-6 h-6" />, url: 'https://github.com/johndoe', name: 'GitHub' },
    { icon: <Twitter className="w-6 h-6" />, url: 'https://twitter.com/johndoe', name: 'Twitter' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#45B69C] mb-8 text-center">Contact Information</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div key={item.text} className="flex items-center space-x-3">
                <div className="text-[#45B69C]">{item.icon}</div>
                <span className="text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#45B69C]">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-600 hover:text-[#45B69C] transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact