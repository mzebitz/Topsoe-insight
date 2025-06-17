export async function initI18n() {
  const lang = navigator.language.startsWith('da') ? 'da' : 'en';
  const translations = await fetch(\`i18n/\${lang}.json\`).then(r => r.json());
  window.__ = (key) => translations[key] || key;
}