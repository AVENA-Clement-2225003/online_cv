import React, { useState } from 'react'
import { Code2, Briefcase, GraduationCap } from 'lucide-react'
import PersonalProjects from './PersonalProjects.tsx'
import ProfessionalProjects from './ProfessionalProjects.tsx'
import AcademicProjects from './AcademicProjects.tsx'

type ProjectType = 'personal' | 'professional' | 'academic'

function Projects() {
  const [selectedType, setSelectedType] = useState<ProjectType>('personal')

  const projectTypes = [
    { type: 'personal', label: 'Personal', icon: <Code2 />, color: '#45B69C' },
    { type: 'professional', label: 'Professional', icon: <Briefcase />, color: '#8B5CF6' },
    { type: 'academic', label: 'Academic', icon: <GraduationCap />, color: '#3B82F6' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {projectTypes.map(({ type, label, icon, color }) => (
          <button
            key={type}
            onClick={() => setSelectedType(type as ProjectType)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all ${
              selectedType === type
                ? 'shadow-lg scale-105'
                : 'opacity-80 hover:opacity-100 hover:scale-105'
            }`}
            style={{ backgroundColor: color }}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="transition-all duration-300">
        {selectedType === 'personal' && <PersonalProjects />}
        {selectedType === 'professional' && <ProfessionalProjects />}
        {selectedType === 'academic' && <AcademicProjects />}
      </div>
    </div>
  )
}

export default Projects