import { useState, useEffect } from 'react'
import { Laptop, Loader2 } from 'lucide-react'
import { dataService } from '../../services/dataService'
import { IDE } from '../../api/types'
import { useLanguage } from '../../context/LanguageContext'

function IDEs() {
  const [ides, setIdes] = useState<IDE[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { t, language } = useLanguage()
  
  useEffect(() => {
    try {
      const idesData = dataService.getSection('ides')
      if (idesData) {
        setIdes(idesData)
      } else {
        setError('Failed to load IDEs data')
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
        <Laptop className="w-8 h-8" />
        {t('skills.ides')}
      </h1>
      
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
          <span className="ml-2 text-gray-600">{t('label.loading')}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md mb-6">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ides.map((ide) => (
            <div key={ide.name} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transition-colors duration-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-[#45B69C]">{ide.name}</h2>
                <div className="flex flex-col items-end">
                  <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm mb-2">
                    {ide.experience}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {typeof ide.type === 'object' ? ide.type[language] : ide.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {typeof ide.description === 'object' ? ide.description[language] : ide.description}
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('skills.keyFeatures')}:</h3>
                <div className="flex flex-wrap gap-2">
                  {ide.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {typeof feature === 'object' ? feature[language] : feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default IDEs