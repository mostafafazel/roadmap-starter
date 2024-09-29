import { _ as _sfc_main$1 } from './NHeader-FlixKcTo.mjs';
import { k as useLocale, s as ssrRenderAttrs_1, v as vueExports, b as ssrRenderComponent_1, m as ssrRenderSlot_1 } from './server.mjs';
import './nuxt-link-DiMFHHdm.mjs';
import './useCustomI18n-DFkNUFOb.mjs';
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

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = useLocale();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NHeader = _sfc_main$1;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({
        dir: vueExports.unref(locale) === "fa" ? "rtl" : "ltr",
        class: "h-screen"
      }, _attrs))}>`);
      _push(ssrRenderComponent_1(_component_NHeader, null, null, _parent));
      _push(`<div class="h-max flex-center flex-col gap-5">`);
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D3JgUijP.mjs.map
