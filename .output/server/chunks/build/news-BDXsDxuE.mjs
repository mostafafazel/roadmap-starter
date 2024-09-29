import { v as vueExports, c as useI18n, u as useHead, a as ssrInterpolate_1 } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: `${t("index.news.title")} \u2022 Nightrunner`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center mb-5"><h1 class="title text-4xl font-bold mb-8 dark:text-white">${ssrInterpolate_1(vueExports.unref(t)("index.news.title"))}</h1></div><div><p class="text-lg mb-8 dark:text-gray-300">${ssrInterpolate_1(vueExports.unref(t)("index.news.description"))}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800"><i class="i-solar-news-bold text-6xl text-blue-500 mb-4"></i><h3 class="font-semibold text-lg mb-2 dark:text-white">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.breakthrough.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.breakthrough.description"))}</p><a href="#" class="text-blue-500 mt-3 inline-block underline">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.breakthrough.link"))}</a></div><div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800"><i class="i-solar-cube-bold text-6xl text-green-500 mb-4"></i><h3 class="font-semibold text-lg mb-2 dark:text-white">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.newSensor.title"))}</h3><p class="text-gray-500 text-sm dark:text-gray-400">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.newSensor.description"))}</p><a href="#" class="text-blue-500 mt-3 inline-block underline">${ssrInterpolate_1(vueExports.unref(t)("index.news.items.newSensor.link"))}</a></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=news-BDXsDxuE.mjs.map
