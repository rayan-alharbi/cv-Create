import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Palette, Download } from 'lucide-react';
import Header from '@/components/Header';
import { useCVStore } from '@/store/cvStore';

export default function Home() {
  const { t } = useTranslation();
  const { language } = useCVStore();

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'إنشاء سيرة ذاتية احترافية',
      titleEn: 'Create Professional CV',
      description: 'أنشئ سيرتك الذاتية بسهولة مع نموذج تفاعلي خطوة بخطوة',
      descriptionEn: 'Create your CV easily with an interactive step-by-step form'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'نماذج متعددة',
      titleEn: 'Multiple Templates',
      description: 'اختر من بين نماذج متعددة تناسب جميع الأذواق والمهن',
      descriptionEn: 'Choose from multiple templates that suit all tastes and professions'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'تحميل فوري',
      titleEn: 'Instant Download',
      description: 'حمل سيرتك الذاتية بصيغة PDF عالية الجودة',
      descriptionEn: 'Download your CV in high-quality PDF format'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/create"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('createCVNow')}
                <ArrowRight className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
              
              <Link
                to="/templates"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {t('browseTemplates')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {language === 'ar' ? feature.title : feature.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === 'ar' ? feature.description : feature.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('startNow')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('startNowSubtitle')}
          </p>
          <Link
            to="/create"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('createCVNow')}
          </Link>
        </div>
      </section>
    </div>
  );
}