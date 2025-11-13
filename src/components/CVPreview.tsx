import { useCVStore } from '@/store/cvStore';
import { useTranslation } from 'react-i18next';

const CVPreview = () => {
  const { t } = useTranslation();
  const { cvData, selectedTemplate, language } = useCVStore();
  const { personalInfo, education, experience, skills, languages, projects } = cvData;

  const getTemplateStyles = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return {
          container: 'bg-white p-6',
          header: 'border-b border-gray-200 pb-4 mb-4',
          title: 'text-2xl font-bold text-gray-900',
          subtitle: 'text-lg text-gray-600',
          section: 'mb-4',
          sectionTitle: 'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3',
          text: 'text-gray-700'
        };
      case 'creative':
        return {
          container: 'bg-gradient-to-br from-blue-50 to-purple-50 p-6',
          header: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-4',
          title: 'text-2xl font-bold',
          subtitle: 'text-lg opacity-90',
          section: 'mb-4 bg-white bg-opacity-50 p-4 rounded-lg',
          sectionTitle: 'text-lg font-semibold text-blue-600 mb-3',
          text: 'text-gray-700'
        };
      case 'classic':
        return {
          container: 'bg-white p-6 border border-gray-300',
          header: 'text-center border-b-2 border-gray-800 pb-4 mb-4',
          title: 'text-3xl font-serif text-gray-900',
          subtitle: 'text-xl font-serif text-gray-700',
          section: 'mb-4',
          sectionTitle: 'text-xl font-serif font-bold text-gray-900 mb-3',
          text: 'text-gray-800 font-serif'
        };
      case 'modern':
        return {
          container: 'bg-white p-6',
          header: 'bg-gray-900 text-white p-4 rounded-lg mb-4',
          title: 'text-3xl font-light',
          subtitle: 'text-xl font-light opacity-90',
          section: 'mb-4',
          sectionTitle: 'text-lg font-bold text-gray-900 uppercase tracking-wide mb-3',
          text: 'text-gray-700'
        };
      default:
        return {
          container: 'bg-white p-6',
          header: 'border-b border-gray-200 pb-4 mb-4',
          title: 'text-2xl font-bold text-gray-900',
          subtitle: 'text-lg text-gray-600',
          section: 'mb-4',
          sectionTitle: 'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3',
          text: 'text-gray-700'
        };
    }
  };

  const styles = getTemplateStyles();

  if (!personalInfo.firstName && !personalInfo.lastName) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <p>{language === 'ar' ? 'ابدأ بإدخال معلوماتك لرؤية المعاينة' : 'Start entering your information to see the preview'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.jobTitle && (
          <p className={styles.subtitle}>{personalInfo.jobTitle}</p>
        )}
        
        <div className="mt-3 text-sm opacity-75">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {language === 'ar' ? 'ملخص شخصي' : 'Professional Summary'}
          </h3>
          <p className={styles.text}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {t('experience')}
          </h3>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              {exp.description && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {t('education')}
          </h3>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.field}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.description && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {t('skills')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {t('languages')}
          </h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="text-gray-600 dark:text-gray-400 capitalize">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {t('projects')}
          </h3>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">{project.name}</h4>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    رابط
                  </a>
                )}
              </div>
              {project.description && (
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CVPreview;