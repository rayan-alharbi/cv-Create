import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Share2, Copy, Check, Eye } from 'lucide-react';
import { useCVStore } from '@/store/cvStore';
import Header from '@/components/Header';
import CVPreview from '@/components/CVPreview';
import html2pdf from 'html2pdf.js';

const DownloadPage = () => {
  const { t } = useTranslation();
  const { cvData, selectedTemplate, language } = useCVStore();
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      const element = document.getElementById('cv-preview');
      if (!element) return;

      const opt = {
        margin: 10,
        filename: `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm' as const, 
          format: 'a4' as const, 
          orientation: 'portrait' as const,
          compress: true
        }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(language === 'ar' ? 'حدث خطأ أثناء إنشاء PDF' : 'Error generating PDF');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/cv/${Date.now()}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${cvData.personalInfo.firstName} ${cvData.personalInfo.lastName} - CV`,
          text: language === 'ar' ? 'سيرتي الذاتية' : 'My CV',
          url: `${window.location.origin}/cv/${Date.now()}`
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('downloadPDF')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {language === 'ar' ? 'سيرتك الذاتية جاهزة للتحميل والمشاركة' : 'Your CV is ready to download and share'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'معاينة' : 'Preview'}
              </h2>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                <Eye className="w-4 h-4 ml-2" />
                {showPreview ? (language === 'ar' ? 'إخفاء' : 'Hide') : (language === 'ar' ? 'إظهار' : 'Show')}
              </button>
            </div>
            
            {showPreview && (
              <motion.div
                id="cv-preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-96 overflow-auto"
              >
                <CVPreview />
              </motion.div>
            )}
          </div>

          {/* Download Options */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'خيارات التحميل' : 'Download Options'}
            </h2>
            
            <div className="space-y-6">
              {/* PDF Download */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mr-4">
                    <DownloadIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === 'ar' ? 'احصل على نسخة PDF عالية الجودة من سيرتك الذاتية' : 'Get a high-quality PDF version of your CV'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {language === 'ar' ? 'جاري التحميل...' : 'Downloading...'}
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="w-4 h-4 ml-2" />
                      {t('downloadPDF')}
                    </>
                  )}
                </button>
              </div>

              {/* Share Options */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'ar' ? 'مشاركة' : 'Share'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === 'ar' ? 'شارك سيرتك الذاتية مع الآخرين' : 'Share your CV with others'}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleShare}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <Share2 className="w-4 h-4 ml-2" />
                    {language === 'ar' ? 'مشاركة' : 'Share'}
                  </button>
                  
                  <button
                    onClick={handleCopyLink}
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 ml-2" />
                        {language === 'ar' ? 'تم النسخ!' : 'Copied!'}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 ml-2" />
                        {t('copyLink')}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {language === 'ar' ? 'النموذج المختار' : 'Selected Template'}
                </h3>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg mr-3 ${
                    selectedTemplate === 'minimal' ? 'bg-blue-50 dark:bg-blue-900' :
                    selectedTemplate === 'creative' ? 'bg-purple-50 dark:bg-purple-900' :
                    selectedTemplate === 'classic' ? 'bg-gray-50 dark:bg-gray-800' :
                    'bg-green-50 dark:bg-green-900'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {t(selectedTemplate)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === 'ar' ? 'نموذج احترافي' : 'Professional template'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;