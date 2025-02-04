import React from 'react'
import { Laptop } from 'lucide-react'

function IDEs() {
  const ides = [
    {
      name: 'Visual Studio Code',
      type: 'General Purpose',
      experience: 'Expert',
      features: [
        'Custom extensions',
        'Git integration',
        'Debugging tools',
        'Remote development',
      ],
      description: 'Primary IDE for web development and general programming',
    },
    {
      name: 'IntelliJ IDEA',
      type: 'Java Development',
      experience: 'Advanced',
      features: [
        'Smart code completion',
        'Framework support',
        'Database tools',
        'Build tools integration',
      ],
      description: 'Preferred IDE for Java and Spring Boot development',
    },
    {
      name: 'PyCharm',
      type: 'Python Development',
      experience: 'Advanced',
      features: [
        'Scientific tools',
        'Web frameworks support',
        'Remote interpreters',
        'Database tools',
      ],
      description: 'Specialized IDE for Python development and data science',
    },
    {
      name: 'Android Studio',
      type: 'Mobile Development',
      experience: 'Intermediate',
      features: [
        'UI designer',
        'Performance tools',
        'Device emulation',
        'Gradle support',
      ],
      description: 'Complete IDE for Android app development',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[#45B69C] mb-8 flex items-center gap-2">
        <Laptop className="w-8 h-8" />
        Development Environments (IDEs)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ides.map((ide) => (
          <div key={ide.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-[#45B69C]">{ide.name}</h2>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 bg-[#45B69C] bg-opacity-10 text-[#45B69C] rounded-full text-sm mb-2">
                  {ide.experience}
                </span>
                <span className="text-sm text-gray-500">{ide.type}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{ide.description}</p>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Key Features:</h3>
              <div className="flex flex-wrap gap-2">
                {ide.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IDEs