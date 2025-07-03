import { useState, useEffect } from 'react'
import { AppWindow, Loader2 } from 'lucide-react'
import { dataService } from '../../services/dataService'
import { SoftwareCategory } from '../../api/types'
import { useLanguage } from '../../context/LanguageContext'

function Software() {
  const [softwareCategories, setSoftwareCategories] = useState<SoftwareCategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()
  
  useEffect(() => {
    try {
      const softwareData = dataService.getSection('software')
      if (softwareData) {
        setSoftwareCategories(softwareData)
      } else {
        setError('Failed to load software data')
      }
    } catch (err) {
      setError('Error loading data: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8 flex items-center gap-2">
        <AppWindow className="w-8 h-8" />
        {t('skills.software')}
      </h1>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
          <span className="ml-2 text-gray-600 dark:text-gray-300">{t('label.loading')}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md mb-6">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareCategories.map((category) => (
            <div key={typeof category.category === 'object' ? JSON.stringify(category.category) : category.category} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transition-colors duration-200">
              <h2 className="text-xl font-bold text-[#45B69C] mb-4">
                {typeof category.category === 'object' ? category.category[useLanguage().language] : category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((software) => (
                  <div key={software.name} className="border-l-4 border-[#45B69C] pl-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800 dark:text-dark-primary">{software.name}</h3>
                      <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm">
                        {software.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {typeof software.purpose === 'object' ? software.purpose[useLanguage().language] : software.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Software