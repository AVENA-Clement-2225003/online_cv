import React, { useState, useEffect } from 'react'
import { Building2, Calendar, Loader2, Github, ExternalLink } from 'lucide-react'
import { dataService } from '../services/dataService'
import { useLanguage } from '../context/LanguageContext'

function ProfessionalProjects() {
  const [experiences, setExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  
  useEffect(() => {
    try {
      const experienceData = dataService.getSection('experience')
      if (experienceData) {
        setExperiences(experienceData)
      } else {
        setError('Failed to load experience data')
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
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    )
  }

  if (error || !experiences.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p>{error || 'No professional experience found'}</p>
        </div>
      </div>
    )
  }

  const { t } = useLanguage()
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-purple-500 mb-8">{t('projects.professional')}</h1>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Building2 className="w-6 h-6 text-purple-500 mr-2" />
                <h2 className="text-xl font-bold">
                  {typeof experience.company === 'object' ? experience.company[language] : experience.company}
                </h2>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 mr-1" />
                {experience.startDate} - {experience.endDate}
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              {typeof experience.position === 'object' ? experience.position[language] : experience.position}
            </p>
            <div className="ml-4">
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {typeof experience.description === 'object' ? experience.description[language] : experience.description}
              </p>
              
              {/* Technology badges */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">{language === 'en' ? 'Achievements' : 'Réalisations'}</h3>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {(typeof experience.achievements === 'object' ? 
                    experience.achievements[language] : 
                    experience.achievements)?.map((achievement: string, index: number) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              {/* GitHub and Demo links */}
              {(experience.github || experience.demo) && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-500 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      GitHub
                    </a>
                  )}
                  {experience.demo && (
                    <a
                      href={experience.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      {language === 'en' ? 'Live Demo' : 'Démo en direct'}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalProjects