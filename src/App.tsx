import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import Home from "@/pages/Home";
import CreateCV from "@/pages/CreateCV";
import Templates from "@/pages/Templates";
import DownloadPage from "@/pages/Download";
import { useCVStore } from "@/store/cvStore";
import { useEffect } from "react";

function AppContent() {
  const { language, theme } = useCVStore();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = i18n.dir(language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCV />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
}
