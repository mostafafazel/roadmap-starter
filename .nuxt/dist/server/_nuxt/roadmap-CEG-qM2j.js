import { v as vueExports, c as useI18n, u as useHead, a as ssrInterpolate_1 } from "../server.mjs";
import "hookable";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
/* empty css                    */
import "unhead";
import "radix3";
import "devalue";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "roadmap",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: `${t("index.roadmap.title")} • Nightrunner`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center mb-5"><h1 class="title text-4xl font-bold mb-8 dark:text-white">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.title"))}</h1></div><div><p class="text-lg mb-8 dark:text-gray-300">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.description"))}</p><div class="roadmap relative border-l border-gray-200 dark:border-gray-700"><div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4"><span class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg p-1 -left-4 dark:bg-blue-800"><i class="i-carbon-roadmap text-blue-500 text-2xl"></i></span><div class="flex flex-col"><h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase1.title"))}</h3><p class="text-base font-normal text-gray-500 dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase1.description"))}</p></div></div><div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4"><span class="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg p-1 -left-4 dark:bg-yellow-800"><i class="i-carbon-cics-sit-overrides text-yellow-500 text-2xl"></i></span><div class="flex flex-col"><h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase2.title"))}</h3><p class="text-base font-normal text-gray-500 dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase2.description"))}</p></div></div><div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4"><span class="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg p-1 -left-4 dark:bg-green-800"><i class="i-carbon-development text-green-500 text-2xl"></i></span><div class="flex flex-col"><h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase3.title"))}</h3><p class="text-base font-normal text-gray-500 dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase3.description"))}</p></div></div><div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4"><span class="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg p-1 -left-4 dark:bg-red-800"><i class="i-carbon-test-tool text-red-500 text-2xl"></i></span><div class="flex flex-col"><h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase4.title"))}</h3><p class="text-base font-normal text-gray-500 dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.roadmap.phase4.description"))}</p></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roadmap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=roadmap-CEG-qM2j.js.map
