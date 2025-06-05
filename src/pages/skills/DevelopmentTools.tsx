import { useState, useEffect } from 'react'
import { Briefcase, Loader2 } from 'lucide-react'
import { dataService } from '../../services/dataService'
import { DevelopmentTool } from '../../api/types'
import { useLanguage } from '../../context/LanguageContext'

function DevelopmentTools() {
  const [tools, setTools] = useState<DevelopmentTool[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()
  
  useEffect(() => {
    try {
      const developmentTools = dataService.getSection('developmentTools')
      if (developmentTools) {
        setTools(developmentTools)
      } else {
        setError('Failed to load development tools data')
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
        <Briefcase className="w-8 h-8" />
        {t('skills.tools')}
      </h1>
      
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 text-[#45B69C] animate-spin" />
          <span className="ml-2 text-gray-600">{t('label.loading')}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-[#45B69C]">{category.name}</h2>
                <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm">
                  {category.experience}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DevelopmentTools