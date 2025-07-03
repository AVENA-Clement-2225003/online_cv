import { useState, useEffect } from 'react'
import { Code, Loader2 } from 'lucide-react'
import { dataService } from '../../services/dataService'
import { ProgrammingLanguage } from '../../api/types'
import { useLanguage } from '../../context/LanguageContext'

function ProgrammingLanguages() {
  const [languages, setLanguages] = useState<ProgrammingLanguage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { t, language: currentLanguage } = useLanguage();
  
  useEffect(() => {
    try {
      const programmingLanguages = dataService.getSection('programmingLanguages');
      if (programmingLanguages) {
        setLanguages(programmingLanguages);
      } else {
        setError('Failed to load programming languages data');
      }
    } catch (err) {
      setError('Error loading data: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8 flex items-center gap-2">
        <Code className="w-8 h-8" />
        {t('skills.programming')}
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
          {languages.map((lang) => (
            <div key={lang.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-[#45B69C]">{lang.name}</h2>
                <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm">
                  {typeof lang.level === 'object' ? lang.level[currentLanguage] : lang.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {typeof lang.description === 'object' ? lang.description[currentLanguage] : lang.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{t('label.experience')}: {lang.experience}</span>
                <span>{t('label.projects')}: {typeof lang.projects === 'object' ? lang.projects[currentLanguage] : lang.projects}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProgrammingLanguages