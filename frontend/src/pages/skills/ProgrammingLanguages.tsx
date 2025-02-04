import React from 'react'
import { Code } from 'lucide-react'

function ProgrammingLanguages() {
  const languages = [
    {
      name: 'JavaScript/TypeScript',
      level: 'Expert',
      description: 'Modern ES6+, TypeScript, React, Node.js',
      experience: '5+ years',
      projects: 'Web applications, APIs, Full-stack development',
    },
    {
      name: 'Python',
      level: 'Advanced',
      description: 'Django, Flask, Data Science',
      experience: '4 years',
      projects: 'Backend services, Data analysis, Machine learning',
    },
    {
      name: 'Java',
      level: 'Intermediate',
      description: 'Spring Boot, Android Development',
      experience: '3 years',
      projects: 'Enterprise applications, Mobile apps',
    },
    {
      name: 'C++',
      level: 'Intermediate',
      description: 'System Programming, Game Development',
      experience: '2 years',
      projects: 'Game engines, System utilities',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8 flex items-center gap-2">
        <Code className="w-8 h-8" />
        Programming Languages
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang) => (
          <div key={lang.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-[#45B69C]">{lang.name}</h2>
              <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm">
                {lang.level}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{lang.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Experience:</strong> {lang.experience}</p>
              <p><strong>Projects:</strong> {lang.projects}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgrammingLanguages