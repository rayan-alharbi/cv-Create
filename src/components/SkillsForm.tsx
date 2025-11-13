import { useState } from 'react';
import { useCVStore } from '@/store/cvStore';
import { useTranslation } from 'react-i18next';
import { Plus, Trash2 } from 'lucide-react';

const SkillsForm = () => {
  const { t } = useTranslation();
  const { cvData, addSkill, updateSkill, removeSkill, language } = useCVStore();
  const { skills } = cvData;
  
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 'intermediate' as const
  });

  const handleAdd = () => {
    if (newSkill.name) {
      addSkill(newSkill);
      setNewSkill({ name: '', level: 'intermediate' });
    }
  };

  const skillLevels = [
    { value: 'beginner', label: language === 'ar' ? 'مبتدئ' : 'Beginner' },
    { value: 'intermediate', label: language === 'ar' ? 'متوسط' : 'Intermediate' },
    { value: 'advanced', label: language === 'ar' ? 'متقدم' : 'Advanced' },
    { value: 'expert', label: language === 'ar' ? 'خبير' : 'Expert' }
  ];

  return (
    <div className="space-y-6">
      {/* Existing Skills */}
      {skills.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('skills')} ({skills.length})
          </h3>
          <div className="grid gap-3">
            {skills.map((skill) => (
              <div key={skill.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm mb-2"
                      placeholder={t('skillName')}
                    />
                  </div>
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, { level: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  {skillLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Skill */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('skills')}
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('skillName')} *
            </label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder={language === 'ar' ? 'مثال: JavaScript' : 'e.g. JavaScript'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('skillLevel')}
            </label>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {skillLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          onClick={handleAdd}
          disabled={!newSkill.name}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
        >
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('skills')}
        </button>
      </div>

      {/* Quick Add Skills */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          {language === 'ar' ? 'مهارات شائعة' : 'Popular Skills'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'CSS', 'HTML', 'Git', 'SQL', 'MongoDB'].map((skill) => (
            <button
              key={skill}
              onClick={() => setNewSkill({ name: skill, level: 'intermediate' })}
              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;