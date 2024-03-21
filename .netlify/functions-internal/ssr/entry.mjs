import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D7qMISJx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CsvDbSMU.mjs');
const _page1 = () => import('./chunks/_id__BsWXEbHc.mjs');
const _page2 = () => import('./chunks/index_BY9AjL80.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.15_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9174b10c-9c30-4aa4-93cc-57f5cc85cb50"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
