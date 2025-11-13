import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Download, Eye } from 'lucide-react';
import { useCVStore } from '@/store/cvStore';
import Header from '@/components/Header';
import CVPreview from '@/components/CVPreview';

const Templates = () => {
  const { t } = useTranslation();
  const { selectedTemplate, setSelectedTemplate, cvData, language } = useCVStore();
  const [previewTemplate, setPreviewTemplate] = useState(selectedTemplate);

  const templates = [
    {
      id: 'minimal',
      name: t('minimal'),
      description: language === 'ar' ? 'نظيف وبسيط يركز على المحتوى' : 'Clean and simple focusing on content',
      preview: '/templates/minimal.jpg',
      color: 'bg-blue-50 dark:bg-blue-900',
      accent: 'border-blue-500'
    },
    {
      id: 'creative',
      name: t('creative'),
      description: language === 'ar' ? 'تصميم مبدع مع ألوان جذابة' : 'Creative design with attractive colors',
      preview: '/templates/creative.jpg',
      color: 'bg-purple-50 dark:bg-purple-900',
      accent: 'border-purple-500'
    },
    {
      id: 'classic',
      name: t('classic'),
      description: language === 'ar' ? 'تصميم كلاسيكي تقليدي' : 'Traditional classic design',
      preview: '/templates/classic.jpg',
      color: 'bg-gray-50 dark:bg-gray-800',
      accent: 'border-gray-700'
    },
    {
      id: 'modern',
      name: t('modern'),
      description: language === 'ar' ? 'حديث وعصري مع تصميم احترافي' : 'Modern and contemporary with professional design',
      preview: '/templates/modern.jpg',
      color: 'bg-green-50 dark:bg-green-900',
      accent: 'border-green-500'
    }
  ];

  const handleTemplateSelect = (templateId: any) => {
    setSelectedTemplate(templateId);
    setPreviewTemplate(templateId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('chooseTemplate')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {language === 'ar' ? 'اختر النموذج الذي يناسب شخصيتك المهنية' : 'Choose the template that suits your professional personality'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Template Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('templates')}
            </h2>
            
            <div className="grid gap-4">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedTemplate === template.id
                      ? `${template.accent} bg-opacity-20`
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  } ${template.color}`}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className={`w-12 h-12 rounded-lg ${template.color} border-2 ${template.accent} flex items-center justify-center`}>
                        <div className="w-6 h-6 bg-current rounded opacity-20"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {template.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {template.description}
                        </p>
                      </div>
                    </div>
                    {selectedTemplate === template.id && (
                      <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Live Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'معاينة مباشرة' : 'Live Preview'}
              </h2>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setPreviewTemplate(previewTemplate)}
                  className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Eye className="w-4 h-4 ml-2" />
                  {language === 'ar' ? 'تحديث' : 'Update'}
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-96">
              <CVPreview />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-12">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {t('previous')}
          </button>
          <button
            onClick={() => window.location.href = '/download'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
          >
            <Download className="w-4 h-4 ml-2" />
            {t('downloadPDF')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;