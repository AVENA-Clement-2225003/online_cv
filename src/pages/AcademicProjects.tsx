import React, { useState, useEffect } from 'react'
import { BookOpen, GraduationCap, Award, Loader2 } from 'lucide-react'
import { dataService } from '../services/dataService'
import { useLanguage } from '../context/LanguageContext'

const AcademicProjects = () => {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  
  useEffect(() => {
    try {
      // Get academic projects data
      const projectsData = dataService.getSection('projects')?.academic
      if (projectsData) {
        setProjects(projectsData)
      } else {
        setError('Failed to load academic projects data')
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
          <p>{error || 'No academic projects found'}</p>
        </div>
      </div>
    )
  }

  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">{t('projects.academic')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transition-colors duration-200">
            <div className="flex items-center mb-4">
              {project.type === 'Research' ? (
                <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
              ) : (
                <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
              )}
              <h2 className="text-xl font-bold">
                {typeof project.title === 'object' ? project.title[language] : project.title}
              </h2>
            </div>
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                {typeof project.institution === 'object' ? project.institution[language] : project.institution} • {project.year}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {typeof project.description === 'object' ? project.description[language] : project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4">
            {project.achievements && <h3 className="text-sm font-semibold text-gray-700 mb-2">Achievements</h3>}
              <ul className="list-disc list-inside text-sm text-gray-600">
                {(typeof project.achievements === 'object' ? 
                  project.achievements[language] : 
                  project.achievements)?.map((achievement: string, index: number) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            {project.gitHub && (
              <div className="mt-4">
                <a 
                  href={project.gitHub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  <BookOpen className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'View GitHub Repository' : 'Voir le dépôt GitHub'}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicProjects