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
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: `${t("index.resources.title")} • Nightrunner`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center mb-5"><h1 class="title text-4xl font-bold mb-8 dark:text-white transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.title"))}</h1></div><div><p class="text-lg mb-8 dark:text-gray-300 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">${ssrInterpolate_1(vueExports.unref(t)("index.resources.description"))}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"><div class="cursor-pointer flex items-center space-x-4 p-4 bg-blue-100 rounded-lg dark:bg-blue-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"><i class="i-solar-archive-book-bold text-4xl text-blue-500"></i><div><h3 class="font-semibold text-lg dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.documentation.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.documentation.description"))}</p></div></div><div class="cursor-pointer flex items-center space-x-4 p-4 bg-yellow-100 rounded-lg dark:bg-yellow-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"><i class="i-solar-book-mark-bold text-4xl text-yellow-500"></i><div><h3 class="font-semibold text-lg dark:text-white hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.tutorials.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.tutorials.description"))}</p></div></div><div class="cursor-pointer flex items-center space-x-4 p-4 bg-green-100 rounded-lg dark:bg-green-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"><i class="i-solar-layers-bold text-4xl text-green-500"></i><div><h3 class="font-semibold text-lg dark:text-white hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.api.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.api.description"))}</p></div></div><div class="cursor-pointer flex items-center space-x-4 p-4 bg-red-100 rounded-lg dark:bg-red-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"><i class="i-solar-cloud-bold text-4xl text-red-500"></i><div><h3 class="font-semibold text-lg dark:text-white hover:text-red-700 dark:hover:text-red-400 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.datasets.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">${ssrInterpolate_1(vueExports.unref(t)("index.resources.items.datasets.description"))}</p></div></div></div><table class="min-w-full text-left text-sm text-gray-500 dark:text-gray-300"><thead class="bg-gray-100 text-gray-700 text-xs uppercase dark:bg-gray-800 dark:text-gray-400"><tr><th class="py-2 px-4 hover:text-blue-500 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.columns.name"))}</th><th class="py-2 px-4 hover:text-blue-500 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.columns.type"))}</th><th class="py-2 px-4 hover:text-blue-500 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.columns.link"))}</th></tr></thead><tbody><tr class="bg-white border-b cursor-pointer dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"><td class="py-2 px-4">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.nuxtGuide.name"))}</td><td class="py-2 px-4">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.nuxtGuide.type"))}</td><td class="py-2 px-4"><a href="#" class="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.nuxtGuide.link"))}</a></td></tr><tr class="bg-gray-50 border-b cursor-pointer dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"><td class="py-2 px-4">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.biosensorApi.name"))}</td><td class="py-2 px-4">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.biosensorApi.type"))}</td><td class="py-2 px-4"><a href="#" class="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">${ssrInterpolate_1(vueExports.unref(t)("index.resources.table.rows.biosensorApi.link"))}</a></td></tr></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=resources-CRtdBGiH.js.map
