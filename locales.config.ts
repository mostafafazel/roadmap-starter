
import fs from 'fs';
import path from 'path';

// Define metadata structure for locales
interface LocaleMeta {
  language: string;
  name: string;
  dir: 'ltr' | 'rtl';
}

// Predefine a mapping of locale codes to metadata
// locale-meta.ts
export const localeMeta = {
  en: { language: 'en', name: 'English', dir: 'ltr' },       // English
  fa: { language: 'fa', name: 'فارسی', dir: 'rtl' },         // Persian (Farsi)
  fr: { language: 'fr', name: 'Français', dir: 'ltr' },      // French
  jp: { language: 'ja', name: '日本語', dir: 'ltr' },        // Japanese
  ar: { language: 'ar', name: 'العربية', dir: 'rtl' },       // Arabic
  es: { language: 'es', name: 'Español', dir: 'ltr' },       // Spanish
  zh: { language: 'zh', name: '中文', dir: 'ltr' },          // Chinese
  ru: { language: 'ru', name: 'Русский', dir: 'ltr' },       // Russian

  // Add more standardized locales here
};

// Function to get locale information
export const getLocales = (localesDir: string) => {
  const absoluteLocalesDir = path.resolve(__dirname, localesDir);

  return fs.readdirSync(absoluteLocalesDir).map(file => {
    const code = file.replace(/\.(yml|yaml|json)$/, '');
    const meta = localeMeta[code] || {
      language: 'Unknown',
      name: 'Unknown',
      dir: 'ltr' // Default direction is 'ltr'
    };

    return {
      code,
      file,
      language: meta.language,
      name: meta.name,
      dir: meta.dir,
    };
  });
};
