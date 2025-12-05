
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3C55V6N6.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PZJSCUS5.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KDK33AU3.js"
    ],
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3280, hash: '8504f9d152e1662772ceabe4eb7c89dcfe413e7b3bd74087f8aa175d07facf55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: 'da8a2fd494bffeb60963915ede98f47a57b89e42bb0b247abde52bb128944ce6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7066, hash: '112841c2fe71ab0e0b76d2b1dde43b4ae852603c8a07fc8ed71d66a2695bc7cb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 7184, hash: '744681dc62cd4a4554850302b9949188ea9e91ba7f4588a28b542ba40d1788a3', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6509, hash: '4dacc87afc8d19c04c03ca83ee9aa80a15411bcc68c758fab30f8d9277847d75', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: '3248771c7fdba9b1a5063805bc6adb2005216f362efbd15a8d37ce823ba0302a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LYF3P2LR.css': {size: 6535, hash: 'b2r/Rzya9u4', text: () => import('./assets-chunks/styles-LYF3P2LR_css.mjs').then(m => m.default)}
  },
};
