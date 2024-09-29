import { _ as __nuxt_component_0 } from './nuxt-link-DiMFHHdm.mjs';
import { v as vueExports, s as ssrRenderAttrs_1, b as ssrRenderComponent_1, n as ssrRenderList_1, o as availableLocales, l as ssrRenderAttr_1, a as ssrInterpolate_1, _ as __nuxt_component_1$1, p as useState } from './server.mjs';
import { u as useCustomI18n } from './useCustomI18n-DFkNUFOb.mjs';

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "LocaleSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    useCustomI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs_1(vueExports.mergeProps({ class: "px-2 py-1 rounded-lg" }, _attrs))}><!--[-->`);
      ssrRenderList_1("availableLocales" in _ctx ? _ctx.availableLocales : vueExports.unref(availableLocales), (locale) => {
        _push(`<option${ssrRenderAttr_1("value", locale)}>${ssrInterpolate_1(locale)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/locale/LocaleSwitch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useColorMode = () => {
  return useState("color-mode").value;
};
function useDark() {
  const colorMode = useColorMode();
  function toggle(dark) {
    if (colorMode.unknown)
      return;
    if (dark !== void 0) {
      colorMode.preference = dark ? "dark" : "light";
    } else {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    }
  }
  const value = vueExports.computed(() => colorMode.value);
  const isDark = vueExports.computed(() => value.value === "dark");
  const preference = vueExports.computed(() => colorMode.preference);
  return { toggle, value, isDark, preference };
}
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "NHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, toggle } = useDark();
    const { t, locale } = useCustomI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_LocaleSwitch = _sfc_main$1;
      _push(`<header${ssrRenderAttrs_1(vueExports.mergeProps({ class: "p-5 w-full flex-center flex-row justify-between absolute" }, _attrs))}>`);
      _push(ssrRenderComponent_1(_component_NuxtLink, {
        to: vueExports.unref(locale) === "fa" ? "/" : `/${vueExports.unref(locale)}`,
        class: "text-8 font-text"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-8 font-text"${_scopeId}>`);
            _push2(ssrRenderComponent_1(_component_ClientOnly, null, {
              fallback: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ... `);
                } else {
                  return [
                    vueExports.createTextVNode(" ... ")
                  ];
                }
              })
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              vueExports.createVNode("p", { class: "text-8 font-text" }, [
                vueExports.createVNode(_component_ClientOnly, null, {
                  fallback: vueExports.withCtx(() => [
                    vueExports.createTextVNode(" ... ")
                  ]),
                  default: vueExports.withCtx(() => [
                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(isDark) ? vueExports.unref(t)("theme.dark") : vueExports.unref(t)("theme.light")) + " ", 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-row gap-2">`);
      _push(ssrRenderComponent_1(_component_LocaleSwitch, null, null, _parent));
      _push(`<button class="icon-btn text-5"><div i="tabler-sun dark:tabler-moon"></div></button></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=NHeader-FlixKcTo.mjs.map
