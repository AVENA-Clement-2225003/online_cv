import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/admin/Dashboard';
import Projects from "./pages/Projects";
import Languages from "./pages/Languages";
import IDEs from "./pages/IDEs";
import Experiences from "./pages/Experiences";
import NotFound from "./pages/NotFound";
import Software from "./pages/Software";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="languages" element={<Languages />} />
                    <Route path="ides" element={<IDEs />} />
                    <Route path="experiences" element={<Experiences />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="software" element={<Software />} />

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="admin" element={<Dashboard />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;