import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cp20VoPM.mjs';
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
    "middlewareSecret": "45a0d7a9-fe7c-41e6-8fc5-8e169863aef1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
