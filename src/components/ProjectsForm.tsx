import { useState } from 'react';
import { useCVStore } from '@/store/cvStore';
import { useTranslation } from 'react-i18next';
import { Plus, Trash2, ExternalLink } from 'lucide-react';

const ProjectsForm = () => {
  const { t } = useTranslation();
  const { cvData, addProject, updateProject, removeProject, language } = useCVStore();
  const { projects } = cvData;
  
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    link: ''
  });

  const handleAdd = () => {
    if (newProject.name) {
      addProject(newProject);
      setNewProject({
        name: '',
        description: '',
        link: ''
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Existing Projects */}
      {projects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('projects')} ({projects.length})
          </h3>
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(project.id, { name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm mb-2"
                    placeholder={t('projectName')}
                  />
                </div>
                <button
                  onClick={() => removeProject(project.id)}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-2"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('description')}
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, { description: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  placeholder={language === 'ar' ? 'وصف المشروع...' : 'Project description...'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('projectLink')} (اختياري)
                </label>
                <div className="flex">
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) => updateProject(project.id, { link: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    placeholder="https://..."
                  />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New Project */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('projects')}
        </h4>
        
        <div className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('projectName')} *
            </label>
            <input
              type="text"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder={language === 'ar' ? 'مثال: تطبيق إدارة المهام' : 'e.g. Task Management App'}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('description')}
            </label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder={language === 'ar' ? 'وصف المشروع والتقنيات المستخدمة...' : 'Project description and technologies used...'}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('projectLink')} (اختياري)
            </label>
            <input
              type="url"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder="https://github.com/username/project"
            />
          </div>
        </div>
        
        <button
          onClick={handleAdd}
          disabled={!newProject.name}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
        >
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('projects')}
        </button>
      </div>

      {/* Quick Add Projects */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          {language === 'ar' ? 'أمثلة على المشاريع' : 'Project Examples'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Portfolio Website', description: 'Personal portfolio website built with React and Tailwind CSS' },
            { name: 'E-commerce App', description: 'Full-stack e-commerce application with payment integration' },
            { name: 'Task Manager', description: 'Task management application with team collaboration features' },
            { name: 'Weather App', description: 'Weather forecasting application with location services' },
            { name: 'Blog Platform', description: 'Content management system for blogging' },
            { name: 'Chat Application', description: 'Real-time messaging application with WebSocket' }
          ].map((project) => (
            <button
              key={project.name}
              onClick={() => setNewProject({ name: project.name, description: project.description, link: '' })}
              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;