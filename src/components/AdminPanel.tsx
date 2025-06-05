import { useState } from 'react';
import apiClient from '../api/apiClient';
import { Skill } from '../api/types';

/**
 * Admin Panel Component
 * Demonstrates how to use the API client to interact with the CV data
 */
const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: 50 });
  const [message, setMessage] = useState('');

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await apiClient.login(password);
      if (success) {
        setIsLoggedIn(true);
        setMessage('Logged in successfully');
        // Load skills after login
        loadSkills();
      } else {
        setMessage('Invalid password');
      }
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Load skills from API
  const loadSkills = async () => {
    try {
      const skillsData = await apiClient.getSection('skills');
      setSkills(skillsData);
      setMessage('Skills loaded successfully');
    } catch (error) {
      setMessage(`Error loading skills: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Add a new skill
  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.addItem('skills', newSkill);
      setNewSkill({ name: '', level: 50 });
      setMessage('Skill added successfully');
      // Reload skills
      loadSkills();
    } catch (error) {
      setMessage(`Error adding skill: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Delete a skill
  const handleDeleteSkill = async (id: number) => {
    try {
      await apiClient.deleteItem('skills', id);
      setMessage('Skill deleted successfully');
      // Reload skills
      loadSkills();
    } catch (error) {
      setMessage(`Error deleting skill: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Logout
  const handleLogout = () => {
    apiClient.clearAdminToken();
    setIsLoggedIn(false);
    setSkills([]);
    setMessage('Logged out successfully');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">CV Admin Panel</h1>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {!isLoggedIn ? (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Note: For demo purposes, use "admin123" as the password
          </p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Skills Management</h2>
            <button
              onClick={handleLogout}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Logout
            </button>
          </div>

          {/* Add Skill Form */}
          <div className="mb-8 p-4 border rounded">
            <h3 className="text-lg font-medium mb-3">Add New Skill</h3>
            <form onSubmit={handleAddSkill}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="skillName">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    id="skillName"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="skillLevel">
                    Skill Level (0-100): {newSkill.level}
                  </label>
                  <input
                    type="range"
                    id="skillLevel"
                    min="0"
                    max="100"
                    value={newSkill.level}
                    onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add Skill
              </button>
            </form>
          </div>

          {/* Skills List */}
          <div>
            <h3 className="text-lg font-medium mb-3">Current Skills</h3>
            {skills.length === 0 ? (
              <p className="text-gray-500">No skills found. Add your first skill above.</p>
            ) : (
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between p-3 border rounded"
                  >
                    <div>
                      <span className="font-medium">{skill.name}</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">Level: {skill.level}/100</span>
                    </div>
                    <button
                      onClick={() => handleDeleteSkill(skill.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
