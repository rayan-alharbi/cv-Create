import { useState } from 'react';
import { useCVStore } from '@/store/cvStore';
import { useTranslation } from 'react-i18next';
import { Plus, Trash2 } from 'lucide-react';

const LanguagesForm = () => {
  const { t } = useTranslation();
  const { cvData, addLanguage, updateLanguage, removeLanguage, language } = useCVStore();
  const { languages } = cvData;
  
  const [newLanguage, setNewLanguage] = useState({
    name: '',
    proficiency: 'fluent' as const
  });

  const handleAdd = () => {
    if (newLanguage.name) {
      addLanguage(newLanguage);
      setNewLanguage({ name: '', proficiency: 'fluent' });
    }
  };

  const proficiencyLevels = [
    { value: 'basic', label: language === 'ar' ? 'أساسي' : 'Basic' },
    { value: 'conversational', label: language === 'ar' ? 'محادثة' : 'Conversational' },
    { value: 'fluent', label: language === 'ar' ? 'طلاقة' : 'Fluent' },
    { value: 'native', label: language === 'ar' ? 'اللغة الأم' : 'Native' }
  ];

  const commonLanguages = [
    { code: 'ar', name: language === 'ar' ? 'العربية' : 'Arabic' },
    { code: 'en', name: language === 'ar' ? 'الإنجليزية' : 'English' },
    { code: 'fr', name: language === 'ar' ? 'الفرنسية' : 'French' },
    { code: 'es', name: language === 'ar' ? 'الإسبانية' : 'Spanish' },
    { code: 'de', name: language === 'ar' ? 'الألمانية' : 'German' },
    { code: 'it', name: language === 'ar' ? 'الإيطالية' : 'Italian' },
    { code: 'zh', name: language === 'ar' ? 'الصينية' : 'Chinese' },
    { code: 'ja', name: language === 'ar' ? 'اليابانية' : 'Japanese' }
  ];

  return (
    <div className="space-y-6">
      {/* Existing Languages */}
      {languages.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('languages')} ({languages.length})
          </h3>
          <div className="grid gap-3">
            {languages.map((lang) => (
              <div key={lang.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={lang.name}
                      onChange={(e) => updateLanguage(lang.id, { name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm mb-2"
                      placeholder={t('language')}
                    />
                  </div>
                  <button
                    onClick={() => removeLanguage(lang.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <select
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(lang.id, { proficiency: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  {proficiencyLevels.map((level) => (
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

      {/* Add New Language */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('languages')}
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('language')} *
            </label>
            <input
              type="text"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              placeholder={language === 'ar' ? 'مثال: الإنجليزية' : 'e.g. English'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('proficiency')}
            </label>
            <select
              value={newLanguage.proficiency}
              onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {proficiencyLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          onClick={handleAdd}
          disabled={!newLanguage.name}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
        >
          <Plus className="w-4 h-4 ml-2" />
          {t('add')} {t('languages')}
        </button>
      </div>

      {/* Quick Add Languages */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          {language === 'ar' ? 'لغات شائعة' : 'Common Languages'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {commonLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setNewLanguage({ name: lang.name, proficiency: 'fluent' })}
              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesForm;