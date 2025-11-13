import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  jobTitle: string;
  summary: string;
  photo?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'basic' | 'conversational' | 'fluent' | 'native';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}

export interface CVStore {
  cvData: CVData;
  currentStep: number;
  selectedTemplate: 'minimal' | 'creative' | 'classic' | 'modern';
  language: 'ar' | 'en';
  theme: 'light' | 'dark';
  
  // Actions
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  addLanguage: (language: Omit<Language, 'id'>) => void;
  updateLanguage: (id: string, language: Partial<Language>) => void;
  removeLanguage: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  setCurrentStep: (step: number) => void;
  setSelectedTemplate: (template: 'minimal' | 'creative' | 'classic' | 'modern') => void;
  setLanguage: (language: 'ar' | 'en') => void;
  setTheme: (theme: 'light' | 'dark') => void;
  resetCV: () => void;
}

const initialPersonalInfo: PersonalInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  jobTitle: '',
  summary: '',
};

const initialCVData: CVData = {
  personalInfo: initialPersonalInfo,
  education: [],
  experience: [],
  skills: [],
  languages: [],
  projects: [],
};

export const useCVStore = create<CVStore>()(
  persist(
    (set, get) => ({
      cvData: initialCVData,
      currentStep: 0,
      selectedTemplate: 'minimal',
      language: 'ar',
      theme: 'light',
      
      updatePersonalInfo: (info) => set((state) => ({
        cvData: {
          ...state.cvData,
          personalInfo: { ...state.cvData.personalInfo, ...info }
        }
      })),
      
      addEducation: (education) => set((state) => ({
        cvData: {
          ...state.cvData,
          education: [...state.cvData.education, { ...education, id: Date.now().toString() }]
        }
      })),
      
      updateEducation: (id, education) => set((state) => ({
        cvData: {
          ...state.cvData,
          education: state.cvData.education.map(edu => 
            edu.id === id ? { ...edu, ...education } : edu
          )
        }
      })),
      
      removeEducation: (id) => set((state) => ({
        cvData: {
          ...state.cvData,
          education: state.cvData.education.filter(edu => edu.id !== id)
        }
      })),
      
      addExperience: (experience) => set((state) => ({
        cvData: {
          ...state.cvData,
          experience: [...state.cvData.experience, { ...experience, id: Date.now().toString() }]
        }
      })),
      
      updateExperience: (id, experience) => set((state) => ({
        cvData: {
          ...state.cvData,
          experience: state.cvData.experience.map(exp => 
            exp.id === id ? { ...exp, ...experience } : exp
          )
        }
      })),
      
      removeExperience: (id) => set((state) => ({
        cvData: {
          ...state.cvData,
          experience: state.cvData.experience.filter(exp => exp.id !== id)
        }
      })),
      
      addSkill: (skill) => set((state) => ({
        cvData: {
          ...state.cvData,
          skills: [...state.cvData.skills, { ...skill, id: Date.now().toString() }]
        }
      })),
      
      updateSkill: (id, skill) => set((state) => ({
        cvData: {
          ...state.cvData,
          skills: state.cvData.skills.map(s => 
            s.id === id ? { ...s, ...skill } : s
          )
        }
      })),
      
      removeSkill: (id) => set((state) => ({
        cvData: {
          ...state.cvData,
          skills: state.cvData.skills.filter(s => s.id !== id)
        }
      })),
      
      addLanguage: (language) => set((state) => ({
        cvData: {
          ...state.cvData,
          languages: [...state.cvData.languages, { ...language, id: Date.now().toString() }]
        }
      })),
      
      updateLanguage: (id, language) => set((state) => ({
        cvData: {
          ...state.cvData,
          languages: state.cvData.languages.map(lang => 
            lang.id === id ? { ...lang, ...language } : lang
          )
        }
      })),
      
      removeLanguage: (id) => set((state) => ({
        cvData: {
          ...state.cvData,
          languages: state.cvData.languages.filter(lang => lang.id !== id)
        }
      })),
      
      addProject: (project) => set((state) => ({
        cvData: {
          ...state.cvData,
          projects: [...state.cvData.projects, { ...project, id: Date.now().toString() }]
        }
      })),
      
      updateProject: (id, project) => set((state) => ({
        cvData: {
          ...state.cvData,
          projects: state.cvData.projects.map(proj => 
            proj.id === id ? { ...proj, ...project } : proj
          )
        }
      })),
      
      removeProject: (id) => set((state) => ({
        cvData: {
          ...state.cvData,
          projects: state.cvData.projects.filter(proj => proj.id !== id)
        }
      })),
      
      setCurrentStep: (step) => set({ currentStep: step }),
      setSelectedTemplate: (template) => set({ selectedTemplate: template }),
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      
      resetCV: () => set({
        cvData: initialCVData,
        currentStep: 0,
        selectedTemplate: 'minimal',
      }),
    }),
    {
      name: 'cv-storage',
      partialize: (state) => ({
        cvData: state.cvData,
        selectedTemplate: state.selectedTemplate,
        language: state.language,
        theme: state.theme,
      }),
    }
  )
);