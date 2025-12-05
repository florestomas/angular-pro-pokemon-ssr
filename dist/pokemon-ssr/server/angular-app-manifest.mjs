
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
      "chunk-EBTNYBPO.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W7FFXSMC.js"
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
    'index.csr.html': {size: 4760, hash: 'ca336dda0b63e45fc475426f238d29b229bde66c7a5bfd13a96b9f6dd5bad5f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: '69d4646046517988425265bbe3096e93b2be2f737b919959211d033412a66172', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: '3248771c7fdba9b1a5063805bc6adb2005216f362efbd15a8d37ce823ba0302a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 8742, hash: '464829b06be49ae8647d30cf674a9fe0b10950751af818bc82504a289e39b382', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8622, hash: '21e8518b26c0c877516865b11979eadef8f71c484ea32657f1f29a924d2224de', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8067, hash: '8438609a6fc1f3053a7a338f4081d96e35c7ad38701f09ed5326285143a914e1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-YROT6CZ4.css': {size: 9528, hash: 'dgXeGAwAv8g', text: () => import('./assets-chunks/styles-YROT6CZ4_css.mjs').then(m => m.default)}
  },
};
