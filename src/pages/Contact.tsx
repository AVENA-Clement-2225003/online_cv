import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Loader2 } from 'lucide-react'
import { dataService } from '../services/dataService'
import { Contact as ContactType, Profile } from '../api/types'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const [contactData, setContactData] = useState<ContactType | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()
  
  useEffect(() => {
    try {
      // Get contact data
      const contactInfo = dataService.getSection('contact')
      if (contactInfo) {
        setContactData(contactInfo)
      } else {
        setError('Failed to load contact data')
      }
      
      // Get profile data for social links
      const profileData = dataService.getSection('profile')
      if (profileData) {
        setProfile(profileData)
      } else {
        setError('Failed to load profile data')
      }
    } catch (err) {
      setError('Error loading data: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }, [])

  // Generate contact info array from data
  const getContactInfo = () => {
    if (!contactData) return []
    
    return [
      { icon: <Mail className="w-6 h-6" />, text: contactData.email },
      { icon: <Phone className="w-6 h-6" />, text: contactData.phone },
      { icon: <MapPin className="w-6 h-6" />, text: contactData.location },
    ]
  }
  
  // Generate social links array from data
  const getSocialLinks = () => {
    if (!profile || !profile.socialLinks) return []
    
    return [
      { icon: <Linkedin className="w-6 h-6" />, url: profile.socialLinks.linkedin, name: 'LinkedIn' },
      { icon: <Github className="w-6 h-6" />, url: profile.socialLinks.github, name: 'GitHub' },
      { icon: <Twitter className="w-6 h-6" />, url: profile.socialLinks.twitter, name: 'Twitter' },
    ]
  }
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
        <span className="ml-2 text-gray-600">{t('label.loading')}</span>
      </div>
    )
  }

  if (error || !contactData || !profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p>{error || 'Failed to load contact data'}</p>
        </div>
      </div>
    )
  }
  
  const contactInfo = getContactInfo()
  const socialLinks = getSocialLinks()
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#45B69C] mb-8 text-center">{t('nav.contact')}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div key={item.text} className="flex items-center space-x-3">
                <div className="text-[#45B69C]">{item.icon}</div>
                <span className="text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
          {contactData.availability && (
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-600">
                <span className="font-medium">Availability:</span> {contactData.availability}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#45B69C]">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-600 hover:text-[#45B69C] transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact