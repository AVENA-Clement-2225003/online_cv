import React, { useState, useEffect } from 'react'
import { Heart, Coffee, Book, Gamepad2, Camera, Plane, Loader2, GraduationCap, Bike } from 'lucide-react'
import { dataService } from '../services/dataService'
import { Profile, Hobby, Education } from '../api/types'
import { useLanguage } from '../context/LanguageContext'

function Home() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { t, language } = useLanguage()
  
  useEffect(() => {
    try {
      // Get profile data
      const profileData = dataService.getSection('profile')
      if (profileData) {
        setProfile(profileData)
      } else {
        setError('Failed to load profile data')
      }
      
      // Get hobbies data
      const hobbiesData = dataService.getSection('hobbies')
      if (hobbiesData) {
        setHobbies(hobbiesData)
      } else {
        setError('Failed to load hobbies data')
      }
      
      // Get education data
      const educationData = dataService.getSection('education')
      if (educationData) {
        // Sort education by date (most recent first)
        const sortedEducation = [...educationData].sort((a, b) => {
          // Convert endDate to a comparable value (use 'Present' as latest date)
          const dateA = a.endDate === 'Present' ? new Date().toISOString() : a.endDate
          const dateB = b.endDate === 'Present' ? new Date().toISOString() : b.endDate
          return dateB.localeCompare(dateA)
        })
        setEducation(sortedEducation)
      } else {
        setError('Failed to load education data')
      }
    } catch (err) {
      setError('Error loading data: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }, [])
  
  // Function to get the appropriate icon component based on the icon name from data
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#45B69C]" />
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-[#45B69C]" />
      case 'Book':
        return <Book className="w-6 h-6 text-[#45B69C]" />
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#45B69C]" />
      case 'Motorcycle':
        return <Bike className="w-6 h-6 text-[#45B69C]" />
      default:
        return <Heart className="w-6 h-6 text-[#45B69C]" />
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
        <span className="ml-2 text-gray-600">{t('label.loading')}</span>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p>{error || 'Failed to load profile data'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#45B69C] ring-opacity-50"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
        <p className="text-lg md:text-xl text-[#45B69C] mb-4">
          {typeof profile.title === 'object' ? profile.title[language] : profile.title}
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Coffee className="w-5 h-5" />
          <span>
            {typeof profile.tagline === 'object' ? profile.tagline[language] : profile.tagline}
          </span>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#45B69C] flex items-center gap-2">
          <Heart className="w-6 h-6" />
          {t('home.about')}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {typeof profile.summary === 'object' ? profile.summary[language] : profile.summary}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {typeof profile.about === 'object' ? profile.about[language] : profile.about}
        </p>
      </div>
      
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-6 text-[#45B69C] flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
          {t('home.education')}
        </h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="bg-gray-50 p-5 rounded-lg shadow-sm min-w-[300px] max-w-[350px] flex flex-col"
                >
                  <h3 className="font-bold text-gray-800 mb-1">
                    {typeof edu.institution === 'object' ? edu.institution[language] : edu.institution}
                  </h3>
                  <p className="text-[#45B69C] font-medium mb-2">
                    {typeof edu.degree === 'object' ? edu.degree[language] : edu.degree}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {edu.startDate} - {edu.endDate === 'Present' ? t('home.education.present') : edu.endDate}
                  </p>
                  <p className="text-gray-600 text-sm mt-auto">
                    {typeof edu.description === 'object' ? edu.description[language] : edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[#45B69C]">{t('home.hobbies')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                {getIconComponent(hobby.icon)}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {typeof hobby.name === 'object' ? hobby.name[language] : hobby.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {typeof hobby.description === 'object' ? hobby.description[language] : hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home