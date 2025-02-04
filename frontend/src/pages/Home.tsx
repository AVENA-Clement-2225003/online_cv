import React from 'react'
import { Code, Database, Terminal } from 'lucide-react'

function Home() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
      icon: <Code className="w-6 h-6 text-[#45B69C]" />,
    },
    {
      category: 'Development Tools',
      items: ['VS Code', 'Git', 'Docker', 'Webpack', 'Jest'],
      icon: <Terminal className="w-6 h-6 text-[#45B69C]" />,
    },
    {
      category: 'Databases & Tools',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      icon: <Database className="w-6 h-6 text-[#45B69C]" />,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#45B69C] ring-opacity-50"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">John Doe</h1>
        <p className="text-lg md:text-xl text-[#45B69C]">Senior Software Engineer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              {skillGroup.icon}
              <h2 className="text-xl font-semibold ml-2">{skillGroup.category}</h2>
            </div>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-gray-600 hover:text-[#45B69C] transition-colors">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-[#45B69C]">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Passionate software engineer with over 5 years of experience in full-stack development.
          Specialized in building scalable web applications and microservices architecture.
          Strong advocate for clean code and best practices. Always eager to learn and explore
          new technologies.
        </p>
      </div>
    </div>
  )
}

export default Home