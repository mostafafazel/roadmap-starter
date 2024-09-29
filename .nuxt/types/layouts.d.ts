import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "centercard" | "default"
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.7.4_@unocss+reset@0.59.0_encoding@0.1.13_esl_45yngwq3z4zjbylya7fzh22pdy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}