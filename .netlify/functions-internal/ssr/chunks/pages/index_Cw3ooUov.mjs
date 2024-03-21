/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_JSnTOLVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_id__C1fzQEyF.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Hub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hub;
  return renderTemplate`${maybeRenderHead()}<section> <div class="px-3 flex flex-wrap justify-center gap-5"> <a class="bg-slate-600/80 flex-1 rounded-md p-6 text-center hover:bg-slate-800/80" href="/armas">Armas y Escudos</a> <a class="bg-slate-600/80 flex-1 rounded-md p-6 text-center hover:bg-slate-800/80" href="/armaduras">Armaduras</a> <a class="bg-slate-600/80 flex-1 rounded-md p-6 text-center hover:bg-slate-800/80" href="/accesorios">Accesorios</a> <a class="bg-slate-600/80 flex-1 rounded-md p-6 text-center hover:bg-slate-800/80" href="/familiares">Familiares</a> </div> </section>`;
}, "E:/wakfupedia/src/components/hub.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wakpedia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1200px] mx-auto"> ${renderComponent($$result2, "Hub", $$Hub, {})} <p class="mt-4 text-center text-xl font-semibold">No nos hacemos responsables de la organización que Ankama tiene en su API</p> </main> ` })} `;
}, "E:/wakfupedia/src/pages/index.astro", void 0);

const $$file = "E:/wakfupedia/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
