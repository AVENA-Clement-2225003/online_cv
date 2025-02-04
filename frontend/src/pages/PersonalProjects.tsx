import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

function PersonalProjects() {
  const projects = [
    {
      title: 'Task Management App',
      description: 'A React-based task management application with real-time updates and collaborative features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-app',
      demo: 'https://task-app-demo.com',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&h=400',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with interactive maps and forecasting.',
      technologies: ['Vue.js', 'OpenWeather API', 'D3.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=400',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-[#45B69C]">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#45B69C] transition-colors"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#45B69C] transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PersonalProjects