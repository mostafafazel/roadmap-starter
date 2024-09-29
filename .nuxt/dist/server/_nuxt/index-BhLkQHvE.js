import { _ as __nuxt_component_0 } from "./nuxt-link-DiMFHHdm.js";
import { v as vueExports, s as ssrRenderAttrs_1, d as ssrRenderClass_1, a as ssrInterpolate_1, e as useRoute, b as ssrRenderComponent_1 } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useCustomI18n } from "./useCustomI18n-DFkNUFOb.js";
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
import "hookable";
import "unctx";
import "h3";
/* empty css                    */
import "unhead";
import "radix3";
import "devalue";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "group hero max-h-64 md:h-28 bg-gray/10 hover:bg-gray/25 transition-scale duration-100 hover:border-teal border-1 border-transparent scale-95 hover:scale-100 cursor-pointer rounded-lg p-4" }, _attrs))} data-v-33341cb1><div class="hero-icon" data-v-33341cb1><div class="${ssrRenderClass_1([__props.icon, "icon"])}" data-v-33341cb1></div></div><div class="hero-content mx-2" data-v-33341cb1><h2 class="hero-title mb-2" data-v-33341cb1>${ssrInterpolate_1(__props.title)}</h2><p class="hero-description group-hover:text-teal" data-v-33341cb1>${ssrInterpolate_1(__props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33341cb1"]]);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useCustomI18n();
    useRoute();
    const localizedPath = (path) => {
      return locale.value === "fa" ? path : `/${locale.value}${path}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Hero = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "container top-[10vh] relative" }, _attrs))}><h1 class="title my-8 mx-2 text-align-center text-2xl md:text-6xl">${ssrInterpolate_1(vueExports.unref(t)("main.title"))}</h1><div class="mx-8 grid grid-cols-1 md:grid-cols-2 gap-8 top-28">`);
      _push(ssrRenderComponent_1(_component_NuxtLink, {
        to: localizedPath("/roadmap")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent_1(_component_Hero, {
              icon: "i-carbon-roadmap",
              title: vueExports.unref(t)("index.roadmap.title"),
              description: vueExports.unref(t)("index.roadmap.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_Hero, {
                icon: "i-carbon-roadmap",
                title: vueExports.unref(t)("index.roadmap.title"),
                description: vueExports.unref(t)("index.roadmap.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent_1(_component_NuxtLink, {
        to: localizedPath("/resources")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent_1(_component_Hero, {
              icon: "i-solar-book-bookmark-outline",
              title: vueExports.unref(t)("index.resources.title"),
              description: vueExports.unref(t)("index.resources.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_Hero, {
                icon: "i-solar-book-bookmark-outline",
                title: vueExports.unref(t)("index.resources.title"),
                description: vueExports.unref(t)("index.resources.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent_1(_component_NuxtLink, {
        to: localizedPath("/news")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent_1(_component_Hero, {
              icon: "i-solar-bill-list-bold",
              title: vueExports.unref(t)("index.news.title"),
              description: vueExports.unref(t)("index.news.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_Hero, {
                icon: "i-solar-bill-list-bold",
                title: vueExports.unref(t)("index.news.title"),
                description: vueExports.unref(t)("index.news.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent_1(_component_NuxtLink, {
        to: localizedPath("/grants")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent_1(_component_Hero, {
              icon: "i-solar-wallet-money-bold",
              title: vueExports.unref(t)("index.grants.title"),
              description: vueExports.unref(t)("index.grants.description")
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_Hero, {
                icon: "i-solar-wallet-money-bold",
                title: vueExports.unref(t)("index.grants.title"),
                description: vueExports.unref(t)("index.grants.description")
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BhLkQHvE.js.map
