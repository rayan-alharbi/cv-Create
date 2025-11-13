# CV Creator - Professional Resume Builder

منشئ السيرة الذاتية الاحترافية - Professional CV/Resume Builder

## 🌟 المميزات / Features

### العربية
- ✅ واجهة مستخدم عربية كاملة مع دعم اللغة الإنجليزية
- ✅ معاينة مباشرة أثناء الكتابة
- ✅ تصاميم متعددة (بسيط، إبداعي، كلاسيكي، حديث)
- ✅ دعم RTL (الكتابة من اليمين لليسار)
- ✅ تصدير PDF عالي الجودة
- ✅ تخزين البيانات محلياً
- ✅ سهل الاستخدام وبدون تعقيدات

### English
- ✅ Full Arabic interface with English language support
- ✅ Live preview while writing
- ✅ Multiple templates (Minimal, Creative, Classic, Modern)
- ✅ RTL (Right-to-Left) support
- ✅ High-quality PDF export
- ✅ Local data storage
- ✅ Easy to use without complications

## 🌐 Live Demo / معاينة مباشرة

[https://cv-create.pages.dev/](https://cv-create.pages.dev/)

## 🚀 التقنيات المستخدمة / Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Internationalization**: i18next
- **PDF Export**: html2pdf.js
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 📋 المتطلبات / Requirements

- Node.js 16+ 
- npm أو pnpm

## 🛠️ التثبيت والتشغيل المحلي / Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/rayan-alharbi/cv-Create.git
cd cv-Create

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

## 🌐 النشر على Cloudflare Pages / Deploy to Cloudflare Pages

تم إعداد المشروع للنشر السهل على Cloudflare Pages. انظر إلى ملف [DEPLOYMENT.md](DEPLOYMENT.md) للحصول على دليل النشر الكامل.

The project is set up for easy deployment on Cloudflare Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete deployment guide.

## 📁 هيكل المشروع / Project Structure

```
cv-Create/
├── src/
│   ├── components/          # React components
│   │   ├── CVPreview.tsx   # CV preview component
│   │   ├── Header.tsx      # Navigation header
│   │   └── forms/          # Form components
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── CreateCV.tsx    # CV creation page
│   │   ├── Templates.tsx   # Template selection
│   │   └── Download.tsx    # Download page
│   ├── store/              # Zustand stores
│   ├── utils/              # Utility functions
│   └── i18n.ts             # Internationalization
├── public/                   # Static assets
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 التصاميم المتوفرة / Available Templates

1. **بسيط / Minimal** - نظيف وبسيط يركز على المحتوى
2. **إبداعي / Creative** - تصميم مبدع مع ألوان جذابة
3. **كلاسيكي / Classic** - تصميم كلاسيكي تقليدي
4. **حديث / Modern** - حديث وعصري مع تصميم احترافي

## 🔧 التخصيص / Customization

يمكنك تخصيص المشروع بسهولة:
- إضافة لغات جديدة في ملف `src/i18n.ts`
- تعديل التصاميم في مكونات `src/components/`
- إضافة حقول جديدة في مخزن البيانات `src/store/cvStore.ts`

## 📄 الميزات المستقبلية / Future Features

- [ ] دعم قوالب إضافية
- [ ] تصدير إلى تنسيقات مختلفة (Word, TXT)
- [ ] مشاركة السيرة الذاتية عبر الرابط
- [ ] تحليل السيرة الذاتية واقتراحات التحسين
- [ ] دعم الصور والشعارات

## 🤝 المساهمة / Contributing

نرحب بالمساهمات! يرجى قراءة دليل المساهمة قبل إرسال الطلبات.

Contributions are welcome! Please read the contributing guide before submitting pull requests.

## 📄 الرخصة / License

هذا المشروع مرخص تحت رخصة MIT.

This project is licensed under the MIT License.

## 📞 التواصل / Contact

لأي استفسارات أو اقتراحات:
For any inquiries or suggestions:

- GitHub: [@rayan-alharbi](https://github.com/rayan-alharbi)
- المشروع: [cv-Create](https://github.com/rayan-alharbi/cv-Create)

---

**⭐ لا تنسى إعطاء نجمة للمشروع إذا أعجبك!**
**⭐ Don't forget to give the project a star if you like it!**