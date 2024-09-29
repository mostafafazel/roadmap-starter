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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: `${t("global.about")} • Nightrunner`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center mb-5"><h1 class="title">${ssrInterpolate_1(vueExports.unref(t)("about.title"))}</h1></div><div><p>${ssrInterpolate_1(vueExports.unref(t)("about.summary"))}</p><p class="mt-5">${ssrInterpolate_1(vueExports.unref(t)("about.features"))} <ul list><li>Nuxt 3</li><li>Vue 3</li><li>Vite</li><li>Typescript</li><li>ESLint</li><li>UnoCSS</li><li>Iconify</li><li>Pinia</li><li>Nuxt i18n</li></ul></p><p class="mt-5">${ssrInterpolate_1(vueExports.unref(t)("about.config"))}</p></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BfADXcLv.js.map
