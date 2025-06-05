import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact'
import ProgrammingLanguages from './pages/skills/ProgrammingLanguages.tsx'
import DevelopmentTools from './pages/skills/DevelopmentTools.tsx'
import IDEs from './pages/skills/IDEs.tsx'
import Software from './pages/skills/Software.tsx'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/programming-languages" element={<ProgrammingLanguages />} />
            <Route path="/development-tools" element={<DevelopmentTools />} />
            <Route path="/ides" element={<IDEs />} />
            <Route path="/software" element={<Software />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App