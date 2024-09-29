import { f as defineStore, v as vueExports, g as storeToRefs, s as ssrRenderAttrs_1, a as ssrInterpolate_1, c as useI18n, u as useHead, b as ssrRenderComponent_1 } from "../server.mjs";
import "hookable";
import "devalue";
import "#internal/nuxt/paths";
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
import "unctx";
import "h3";
/* empty css                    */
import "unhead";
import "radix3";
const useCounterStore = defineStore("counter", () => {
  const count = vueExports.ref(0);
  function increment() {
    count.value++;
  }
  function reset() {
    count.value = 0;
  }
  return { count, increment, reset };
});
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "SampleComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCounterStore();
    const { count } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "flex-center flex-col gap-10" }, _attrs))}><h1 class="title"> Counter: ${ssrInterpolate_1(vueExports.unref(count))}</h1><div class="flex-center flex-row gap-5"><button class="btn"> Increment </button><button class="btn"> Reset </button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SampleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "sample",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: `${t("global.sample")} • Nightrunner`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SampleComponent = _sfc_main$1;
      _push(ssrRenderComponent_1(_component_SampleComponent, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sample-BECgZe2D.js.map
