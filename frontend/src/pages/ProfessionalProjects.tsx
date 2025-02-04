import React from 'react'
import { Building2, Calendar } from 'lucide-react'

function ProfessionalProjects() {
  const projects = [
    {
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      role: 'Senior Frontend Developer',
      projects: [
        {
          name: 'Enterprise Dashboard',
          description: 'Led the development of a company-wide analytics dashboard serving 10,000+ users.',
          technologies: ['React', 'Redux', 'GraphQL'],
          achievements: [
            'Improved dashboard performance by 60%',
            'Implemented real-time data updates',
            'Reduced loading time by 3 seconds',
          ],
        },
      ],
    },
    {
      company: 'Digital Innovations Ltd',
      period: '2019 - 2021',
      role: 'Full Stack Developer',
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Built a scalable e-commerce platform handling 100,000+ daily transactions.',
          technologies: ['Node.js', 'PostgreSQL', 'Redis'],
          achievements: [
            'Implemented payment gateway integration',
            'Developed inventory management system',
            'Created automated testing suite',
          ],
        },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Professional Projects</h1>
      <div className="space-y-8">
        {projects.map((experience) => (
          <div key={experience.company} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Building2 className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-bold">{experience.company}</h2>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-1" />
                {experience.period}
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">{experience.role}</p>
            {experience.projects.map((project) => (
              <div key={project.name} className="ml-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalProjects