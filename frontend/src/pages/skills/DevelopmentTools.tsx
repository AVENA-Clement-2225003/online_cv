import React from 'react'
import { Briefcase } from 'lucide-react'

function DevelopmentTools() {
  const tools = [
    {
      name: 'Version Control',
      tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      experience: 'Advanced',
      description: 'Expert in version control workflows, branching strategies, and collaboration',
    },
    {
      name: 'CI/CD',
      tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI'],
      experience: 'Advanced',
      description: 'Automated testing, deployment, and release management',
    },
    {
      name: 'Containerization',
      tools: ['Docker', 'Kubernetes', 'Docker Compose'],
      experience: 'Intermediate',
      description: 'Container orchestration and microservices deployment',
    },
    {
      name: 'Testing',
      tools: ['Jest', 'Cypress', 'Selenium', 'JUnit'],
      experience: 'Advanced',
      description: 'Unit testing, integration testing, and end-to-end testing',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8 flex items-center gap-2">
        <Briefcase className="w-8 h-8" />
        Development Tools
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-[#45B69C]">{category.name}</h2>
              <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm">
                {category.experience}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DevelopmentTools