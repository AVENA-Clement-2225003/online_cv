import React, { useState, useEffect } from 'react'
import { Building2, Calendar, Loader2, Github, ExternalLink } from 'lucide-react'
import { dataService } from '../services/dataService'
import { useLanguage } from '../context/LanguageContext'

function ProfessionalProjects() {
  const [experiences, setExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  
  
  const parseMonthYear = (value?: string, kind: 'start' | 'end' = 'start'): number => {
    if (!value) return kind === 'end' ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
    const v = value.trim().toLowerCase()
    if (v === 'present' || v === 'now') return Number.POSITIVE_INFINITY
    const parts = v.split('/')
    if (parts.length !== 2) return Number.NEGATIVE_INFINITY
    const mm = parseInt(parts[0], 10)
    const yyyy = parseInt(parts[1], 10)
    if (!mm || !yyyy) return Number.NEGATIVE_INFINITY
    
    return (kind === 'end'
      ? new Date(yyyy, mm, 0)
      : new Date(yyyy, mm - 1, 1)
    ).getTime()
  }
  const isOngoing = (value?: string): boolean => {
    if (!value) return true
    const v = value.trim().toLowerCase()
    return v === '' || v === 'present' || v === 'now'
  }
  const formatEndDate = (value?: string, lang?: string): string => {
    if (isOngoing(value)) return lang === 'fr' ? 'Aujourd’hui' : 'Today'
    return value as string
  }
  
  useEffect(() => {
    try {
      const experienceData = dataService.getSection('experience')
      if (experienceData) {
        const sorted = [...(experienceData as any[])].sort((a: any, b: any) => {
          const startA = parseMonthYear(a.startDate, 'start')
          const startB = parseMonthYear(b.startDate, 'start')
          if (startA !== startB) return startB - startA
          const ongoingA = isOngoing(a.endDate)
          const ongoingB = isOngoing(b.endDate)
          if (ongoingA !== ongoingB) return ongoingA ? -1 : 1
          const endA = parseMonthYear(a.endDate, 'end')
          const endB = parseMonthYear(b.endDate, 'end')
          if (endA !== endB) return endB - endA
          return 0
        })
        setExperiences(sorted)
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                {experience.startDate} - {formatEndDate(experience.endDate, language)}
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