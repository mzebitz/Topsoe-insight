import { createApp } from './modules/framework.js';
import { initI18n } from './modules/i18n.js';

initI18n().then(() => {
  createApp(document.getElementById('app'));
});
