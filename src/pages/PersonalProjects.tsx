import React, { useState, useEffect } from 'react'
import { Github, ExternalLink, Loader2 } from 'lucide-react'
import { dataService } from '../services/dataService'
import { useLanguage } from '../context/LanguageContext'

function PersonalProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  
  useEffect(() => {
    try {
      // Get personal projects data
      const projectsData = dataService.getSection('projects')?.personal
      if (projectsData) {
        setProjects(projectsData)
      } else {
        setError('Failed to load personal projects data')
      }
    } catch (err) {
      setError('Error loading data: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    )
  }

  if (error || !projects.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md">
          <p>{error || 'No personal projects found'}</p>
        </div>
      </div>
    )
  }
  
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8">{t('projects.personal')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-dark-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transition-colors duration-200">
            <img
              src={project.image}
              alt={typeof project.title === 'object' ? project.title[language] : project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-[#45B69C]">
                {typeof project.title === 'object' ? project.title[language] : project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {typeof project.description === 'object' ? project.description[language] : project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string) => (
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
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#45B69C] transition-colors"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#45B69C] transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  {language === 'en' ? 'Live Demo' : 'Démo en direct'}
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