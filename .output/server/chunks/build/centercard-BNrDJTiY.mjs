import { _ as _sfc_main$1 } from './NHeader-FlixKcTo.mjs';
import { d as defineNuxtLink } from './nuxt-link-DiMFHHdm.mjs';
import { v as vueExports, i as useLocalePath, j as hasProtocol, k as useLocale, l as ssrRenderAttr_1, b as ssrRenderComponent_1, m as ssrRenderSlot_1 } from './server.mjs';
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

const NuxtLinkLocale = defineNuxtLink({ componentName: "NuxtLinkLocale" });
const __nuxt_component_1 = vueExports.defineComponent({
  name: "NuxtLinkLocale",
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath = useLocalePath();
    const resolvedPath = vueExports.computed(() => {
      var _a;
      const destination = (_a = props.to) != null ? _a : props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
    });
    const isExternal = vueExports.computed(() => {
      var _a;
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = (_a = props.to) != null ? _a : props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => vueExports.h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});
const _sfc_main = {
  __name: "centercard",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = useLocale();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NHeader = _sfc_main$1;
      const _component_NuxtLinkLocale = __nuxt_component_1;
      _push(`<!--[--><div${ssrRenderAttr_1("dir", vueExports.unref(locale) === "fa" ? "rtl" : "ltr")} class="h-screen">`);
      _push(ssrRenderComponent_1(_component_NHeader, null, null, _parent));
      _push(`<div class="h-full flex-center flex-col gap-5"><div class="bg-white dark:bg-dark rounded-xl border-bluegray shadow-md border-1 border-opacity-25% p-10 w-100 sm:w-125 lg:w-170">`);
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div><div class="absolute bottom-10 right-10">`);
      _push(ssrRenderComponent_1(_component_NuxtLinkLocale, {
        to: "/",
        class: "icon-btn text-4xl"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i="tabler-arrow-left"${_scopeId}></div>`);
          } else {
            return [
              vueExports.createVNode("div", { i: "tabler-arrow-left" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/centercard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=centercard-BNrDJTiY.mjs.map
