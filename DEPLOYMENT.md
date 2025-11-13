# 🚀 دليل النشر الكامل لمشروع CV Creator
# 🚀 Complete Deployment Guide for CV Creator Project

## 📋 نظرة عامة / Overview

هذا الدليل الشامل يوضح خطوات تشغيل ونشر مشروع "CV Creator" من الألف إلى الياء. سيتم تغطية كل شيء بدءًا من التشغيل المحلي وصولاً إلى النشر على منصات مختلفة مثل Cloudflare Pages و Vercel.

This comprehensive guide explains the steps to run and deploy the "CV Creator" project from A to Z. We will cover everything from running it locally to deploying it on different platforms like Cloudflare Pages and Vercel.

---

## 📦 المتطلبات الأساسية / Prerequisites

قبل البدء، تأكد من أن لديك الأدوات التالية مثبتة على جهازك.

Before you begin, ensure you have the following tools installed on your system.

### 1. Node.js
- **الوصف:** بيئة تشغيل JavaScript.
- **Description:** JavaScript runtime environment.
- **الإصدار المطلوب / Required Version:** 16.0.0 أو أحدث / 16.0.0 or newer.
- **التحميل / Download:** [https://nodejs.org/](https://nodejs.org/)
- **للتحقق من التثبيت / To verify installation:**
  ```bash
  node -v
  ```

### 2. npm (أو pnpm/yarn)
- **الوصف:** مدير حزم Node.js. يأتي مع Node.js.
- **Description:** Node.js package manager. It comes with Node.js.
- **للتحقق من التثبيت / To verify installation:**
  ```bash
  npm -v
  ```

### 3. Git
- **الوصف:** نظام التحكم في الإصدارات.
- **Description:** Version control system.
- **التحميل / Download:** [https://git-scm.com/](https://git-scm.com/)
- **للتحقق من التثبيت / To verify installation:**
  ```bash
  git --version
  ```

### 4. حساب GitHub / GitHub Account
- **الوصف:** منصة لاستضافة مستودعات Git.
- **Description:** A platform for hosting Git repositories.
- **الرابط / Link:** [https://github.com/](https://github.com/)

---

## 💻 التشغيل المحلي / Local Development

لتشغيل المشروع على جهازك المحلي للتطوير والاختبار.

To run the project on your local machine for development and testing.

### الخطوة 1: نسخ المستودع / Step 1: Clone the Repository

```bash
git clone https://github.com/rayan-alharbi/cv-Create.git
cd cv-Create
```

### الخطوة 2: تثبيت الاعتماديات / Step 2: Install Dependencies

```bash
# باستخدام npm
npm install

# أو باستخدام pnpm
# pnpm install
```

### الخطوة 3: تشغيل خادم التطوير / Step 3: Run the Development Server

```bash
npm run dev
```

- سيقوم هذا الأمر بتشغيل المشروع في وضع التطوير.
- This command will run the project in development mode.
- افتح المتصفح وادخل على العنوان `http://localhost:5173` (أو المنفذ الذي يظهر في الطرفية).
- Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### أوامر مفيدة أخرى / Other Useful Commands

- **لبناء المشروع للإنتاج / To build the project for production:**
  ```bash
  npm run build
  ```
- **لمعاينة النسخة المبنية محلياً / To preview the production build locally:**
  ```bash
  npm run preview
  ```
- **لتشغيل مدقق الأنماط / To run the linter:**
  ```bash
  npm run lint
  ```

---

## 🚀 خيارات النشر / Deployment Options

يمكنك نشر هذا المشروع على أي منصة تدعم تطبيقات الويب الثابتة. نقدم هنا دليلين مفصلين لـ Cloudflare Pages و Vercel.

You can deploy this project on any platform that supports static web applications. Here we provide detailed guides for Cloudflare Pages and Vercel.

---

## ☁️ الخيار أ: النشر على Cloudflare Pages / Option A: Deploy to Cloudflare Pages

Cloudflare Pages هي منصة قوية توفر استضافة مجانية وسريعة للمواقع الثابتة.

Cloudflare Pages is a powerful platform that offers free and fast hosting for static sites.

### الإعداد الأولي / Initial Setup

#### 1. تثبيت Wrangler CLI (اختياري) / Install Wrangler CLI (Optional)
إذا كنت تفضل النشر من خلال سطر الأوامر.
If you prefer to deploy via the command line.
```bash
npm install -g wrangler
```

#### 2. تسجيل الدخول إلى Cloudflare / Login to Cloudflare
```bash
wrangler login
```

### طريقة النشر 1: الربط مع GitHub (موصى به) / Deployment Method 1: Connect with GitHub (Recommended)

1.  **سجل الدخول** إلى [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  اذهب إلى **Workers & Pages** واختر **Create application**.
3.  اختر **Pages** ثم **Connect to Git**.
4.  **اختر مستودع `cv-Create`** من GitHub وامنح الأذونات اللازمة.
5.  **إعدادات البناء والنشر / Build & Deployment Settings:**
    -   **Project name:** اختر اسماً لمشروعك (e.g., `cv-create`).
    -   **Production branch:** `main`.
    -   **Framework preset:** `Vite`.
    -   **Build command:** `npm run build`.
    -   **Build output directory:** `dist`.
    -   **Root directory:** (اتركه فارغاً / leave empty).
6.  **حفظ ونشر / Save and Deploy:** انقر على **Save and Deploy**. سيقوم Cloudflare ببناء ونشر موقعك.

### طريقة النشر 2: استخدام Wrangler CLI / Deployment Method 2: Using Wrangler CLI

1.  **بناء المشروع محلياً / Build the project locally:**
    ```bash
    npm run build
    ```
2.  **نشر المجلد / Deploy the directory:**
    ```bash
    wrangler pages deploy dist --project-name=cv-create
    ```

### ملفات التكوين / Configuration Files

- **`wrangler.toml`:** يستخدم لتكوين النشر عبر Wrangler CLI.
- **`public/_redirects`:** يضمن عمل التوجيه (Routing) بشكل صحيح في تطبيقات الصفحة الواحدة (SPA).
  ```
  /* /index.html 200
  ```

---

## ▲ الخيار ب: النشر على Vercel / Option B: Deploy to Vercel

Vercel هي منصة أخرى ممتازة لنشر تطبيقات الويب الحديثة.

Vercel is another excellent platform for deploying modern web applications.

### طريقة النشر: الربط مع GitHub (موصى به) / Deployment Method: Connect with GitHub (Recommended)

1.  **سجل الدخول** إلى [Vercel Dashboard](https://vercel.com/dashboard).
2.  انقر على **Add New...** ثم **Project**.
3.  **استورد مستودع `cv-Create`** من GitHub.
4.  **تكوين المشروع / Configure Project:**
    -   Vercel سيتعرف تلقائياً على أن المشروع يستخدم Vite.
    -   Vercel will automatically detect that the project uses Vite.
    -   **Framework Preset:** `Vite`.
    -   **Build and Output Settings:** (يجب أن يتم تكوينها تلقائياً / Should be configured automatically).
        -   **Build Command:** `npm run build`
        -   **Output Directory:** `dist`
    -   **Install Command:** `npm install`
5.  **نشر / Deploy:** انقر على **Deploy**. سيقوم Vercel ببناء ونشر موقعك.

### ملف التكوين `vercel.json` / The `vercel.json` Configuration File

لضمان عمل التوجيه بشكل صحيح، يمكنك إضافة ملف `vercel.json` في جذر المشروع.
To ensure routing works correctly, you can add a `vercel.json` file in the project root.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
هذا التكوين يضمن أن جميع الطلبات يتم توجيهها إلى `index.html`، وهو أمر ضروري لـ React Router.

This configuration ensures that all requests are redirected to `index.html`, which is necessary for React Router.

---

## 🛠️ استكشاف الأخطاء وإصلاحها / Troubleshooting

### 1. خطأ في البناء / Build Error
- **المشكلة:** فشل عملية البناء على Vercel/Cloudflare.
- **Problem:** The build process fails on Vercel/Cloudflare.
- **الحل:**
  - تأكد من أن إصدار Node.js متوافق (يمكن تحديده في إعدادات المشروع على المنصة).
  - Ensure the Node.js version is compatible (can be set in the project settings on the platform).
  - قم بتشغيل `npm install` و `npm run build` محلياً للتأكد من عدم وجود أخطاء.
  - Run `npm install` and `npm run build` locally to ensure there are no errors.

### 2. مشاكل في التوجيه (صفحة 404) / Routing Issues (404 Page)
- **المشكلة:** عند تحديث صفحة داخلية، تظهر صفحة 404.
- **Problem:** When refreshing an internal page, a 404 page appears.
- **الحل:**
  - **Cloudflare:** تأكد من وجود ملف `public/_redirects` بالمحتوى الصحيح.
  - **Cloudflare:** Ensure the `public/_redirects` file exists with the correct content.
  - **Vercel:** تأكد من وجود ملف `vercel.json` بالتكوين الصحيح.
  - **Vercel:** Ensure the `vercel.json` file exists with the correct configuration.

### 3. مشاكل في تحميل الموارد (CSS/JS) / Asset Loading Issues (CSS/JS)
- **المشكلة:** الموقع يظهر بدون تنسيقات أو وظائف.
- **Problem:** The site appears without styling or functionality.
- **الحل:** تأكد من أن `base: './'` موجود في ملف `vite.config.ts` إذا كنت تنشر في مجلد فرعي (غير مطلوب لـ Vercel/Cloudflare).
- **Solution:** Ensure `base: './'` is present in `vite.config.ts` if deploying to a subfolder (not required for Vercel/Cloudflare).

---

## 📞 الدعم والمساعدة / Support & Help

إذا واجهت مشاكل لم يتم حلها هنا:
If you encounter issues not resolved here:

1.  **تحقق من سجلات البناء** في لوحة تحكم Vercel/Cloudflare.
2.  **راجع هذا الدليل** مرة أخرى.
3.  **افتح issue في GitHub:** [cv-Create Issues](https://github.com/rayan-alharbi/cv-Create/issues)

---

🎉 **تهانينا! لقد أصبح مشروعك الآن على الإنترنت!**
🎉 **Congratulations! Your project is now online!**
