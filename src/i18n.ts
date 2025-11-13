import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      createCV: 'إنشاء السيرة الذاتية',
      templates: 'النماذج',
      download: 'تحميل',
      
      // Home Page
      heroTitle: 'أنشئ سيرتك الذاتية الاحترافية في دقائق',
      heroSubtitle: 'منصة عربية لتصميم سير ذاتية حديثة ومتعددة اللغات مع معاينة مباشرة',
      createCVNow: 'إنشاء سيرتي الآن',
      browseTemplates: 'استعراض النماذج',
      chooseTemplate: 'اختر نموذجًا',
      whyChooseUs: 'لماذا تختار منصتنا؟',
      whyChooseUsSubtitle: 'منصة احترافية لتصميم السيرة الذاتية بأحدث التقنيات',
      startNow: 'ابدأ الآن وانشئ سيرتك الذاتية',
      startNowSubtitle: 'لا تنتظر أكثر، احصل على وظيفتك المثالية',
      
      // Create CV Page
      personalInfo: 'المعلومات الشخصية',
      contactInfo: 'معلومات الاتصال',
      education: 'التعليم',
      experience: 'الخبرة',
      skills: 'المهارات',
      languages: 'اللغات',
      projects: 'المشاريع',
      
      // Form Fields
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      location: 'الموقع',
      jobTitle: 'المسمى الوظيفي',
      summary: 'ملخص شخصي',
      
      // Education
      school: 'المدرسة/الجامعة',
      degree: 'الدرجة العلمية',
      field: 'مجال الدراسة',
      startDate: 'تاريخ البدء',
      endDate: 'تاريخ الانتهاء',
      
      // Experience
      company: 'الشركة',
      position: 'المنصب',
      description: 'الوصف',
      
      // Skills
      addSkill: 'إضافة مهارة',
      skillName: 'اسم المهارة',
      skillLevel: 'مستوى المهارة',
      
      // Languages
      languageLabel: 'اللغة',
      proficiency: 'المهارة',
      addLanguage: 'إضافة لغة',
      
      // Projects
      projectName: 'اسم المشروع',
      projectDescription: 'وصف المشروع',
      projectLink: 'رابط المشروع',
      addProject: 'إضافة مشروع',
      
      // Actions
      save: 'حفظ',
      next: 'التالي',
      previous: 'السابق',
      add: 'إضافة',
      remove: 'حذف',
      edit: 'تعديل',
      cancel: 'إلغاء',
      
      // Templates
      minimal: 'بسيط',
      creative: 'إبداعي',
      classic: 'كلاسيكي',
      modern: 'حديث',
      
      // Download
      downloadPDF: 'تحميل PDF',
      share: 'مشاركة',
      copyLink: 'نسخ الرابط',
      
      // Settings
      language: 'اللغة',
      theme: 'المظهر',
      light: 'فاتح',
      dark: 'داكن',
      
      // Messages
      dataSaved: 'تم حفظ البيانات بنجاح',
      errorOccurred: 'حدث خطأ ما',
      requiredField: 'هذا الحقل مطلوب',
      invalidEmail: 'بريد إلكتروني غير صالح',
      
      // RTL
      rtl: 'rtl'
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      createCV: 'Create CV',
      templates: 'Templates',
      download: 'Download',
      
      // Home Page
      heroTitle: 'Create Your Professional CV in Minutes',
      heroSubtitle: 'Arabic platform for designing modern, multilingual resumes with live preview',
      createCVNow: 'Create My CV Now',
      browseTemplates: 'Browse Templates',
      chooseTemplate: 'Choose Template',
      whyChooseUs: 'Why Choose Our Platform?',
      whyChooseUsSubtitle: 'Professional platform for CV design with latest technologies',
      startNow: 'Start Now and Create Your CV',
      startNowSubtitle: "Don't wait any longer, get your dream job",
      
      // Create CV Page
      personalInfo: 'Personal Information',
      contactInfo: 'Contact Information',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      
      // Form Fields
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      jobTitle: 'Job Title',
      summary: 'Professional Summary',
      
      // Education
      school: 'School/University',
      degree: 'Degree',
      field: 'Field of Study',
      startDate: 'Start Date',
      endDate: 'End Date',
      
      // Experience
      company: 'Company',
      position: 'Position',
      description: 'Description',
      
      // Skills
      addSkill: 'Add Skill',
      skillName: 'Skill Name',
      skillLevel: 'Skill Level',
      
      // Languages
      languageLabel: 'Language',
      proficiency: 'Proficiency',
      addLanguage: 'Add Language',
      
      // Projects
      projectName: 'Project Name',
      projectDescription: 'Project Description',
      projectLink: 'Project Link',
      addProject: 'Add Project',
      
      // Actions
      save: 'Save',
      next: 'Next',
      previous: 'Previous',
      add: 'Add',
      remove: 'Remove',
      edit: 'Edit',
      cancel: 'Cancel',
      
      // Templates
      minimal: 'Minimal',
      creative: 'Creative',
      classic: 'Classic',
      modern: 'Modern',
      
      // Download
      downloadPDF: 'Download PDF',
      share: 'Share',
      copyLink: 'Copy Link',
      
      // Settings
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      
      // Messages
      dataSaved: 'Data saved successfully',
      errorOccurred: 'An error occurred',
      requiredField: 'This field is required',
      invalidEmail: 'Invalid email address',
      
      // RTL
      rtl: 'ltr'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;