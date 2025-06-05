import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

function AcademicProjects() {
  const projects = [
    {
      title: 'Machine Learning Research Project',
      institution: 'University of Technology',
      year: '2020',
      description: 'Developed a novel approach to image classification using deep learning.',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      achievements: [
        'Published in International Journal of Computer Vision',
        '95% accuracy on benchmark datasets',
        'Presented at AI Conference 2020',
      ],
      type: 'Research',
    },
    {
      title: 'Distributed Systems Implementation',
      institution: 'Technical Institute',
      year: '2019',
      description: 'Built a distributed system for processing large-scale data.',
      technologies: ['Java', 'Apache Kafka', 'Docker'],
      achievements: [
        'Best Project Award',
        'Processed 1M records per second',
        'Open-sourced implementation',
      ],
      type: 'Course Project',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Academic Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {project.type === 'Research' ? (
                <BookOpen className="w-6 h-6 text-purple-500 mr-2" />
              ) : (
                <GraduationCap className="w-6 h-6 text-green-500 mr-2" />
              )}
              <h2 className="text-xl font-bold">{project.title}</h2>
            </div>
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600">{project.institution} • {project.year}</span>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              {project.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicProjects