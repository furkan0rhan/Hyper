
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1064, hash: 'bfd53a06f46ea52855d32bf36cd7391eedd83685333221b9c322d19eb39ce3e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1308, hash: '86eccb1a773973738e8a30b4090d3e79b8a9b496d4fe412ff0a29d84402d4afd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 427762, hash: 'a17859d9b4e488ae37ff7de523885f102a8d97888b0eeef6be65bbe10cb730ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MYJFEBJ4.css': {size: 13204, hash: 'VhuLoCO66to', text: () => import('./assets-chunks/styles-MYJFEBJ4_css.mjs').then(m => m.default)}
  },
};
