import React from 'react'
import { Heart, Coffee, Book, Gamepad2, Camera, Plane } from 'lucide-react'

function Home() {
  const hobbies = [
    {
      name: 'Photography',
      icon: <Camera className="w-6 h-6 text-[#45B69C]" />,
      description: 'Capturing moments and exploring urban landscapes through street photography.',
    },
    {
      name: 'Gaming',
      icon: <Gamepad2 className="w-6 h-6 text-[#45B69C]" />,
      description: 'Enthusiast of strategy games and RPGs, particularly enjoying world-building games.',
    },
    {
      name: 'Reading',
      icon: <Book className="w-6 h-6 text-[#45B69C]" />,
      description: 'Science fiction and technical books, always expanding knowledge and imagination.',
    },
    {
      name: 'Traveling',
      icon: <Plane className="w-6 h-6 text-[#45B69C]" />,
      description: 'Exploring new cultures and places, documenting experiences through photography.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#45B69C] ring-opacity-50"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">John Doe</h1>
        <p className="text-lg md:text-xl text-[#45B69C] mb-4">Senior Software Engineer</p>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Coffee className="w-5 h-5" />
          <span>Fueled by coffee and passion for code</span>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#45B69C] flex items-center gap-2">
          <Heart className="w-6 h-6" />
          About Me
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I'm a passionate software engineer with a love for creating elegant solutions to complex problems.
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
          or sharing knowledge with the developer community. I believe in continuous learning and staying
          current with industry trends while maintaining a healthy work-life balance.
        </p>
        <p className="text-gray-600 leading-relaxed">
          My journey in technology started with a curiosity about how things work, which evolved into a
          career building software that makes a difference. I'm particularly interested in creating
          accessible and user-friendly applications that solve real-world problems.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[#45B69C]">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby) => (
            <div key={hobby.name} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                {hobby.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{hobby.name}</h3>
                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home