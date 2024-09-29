import { q as useRouter, c as useI18n, r as useSwitchLocalePath, k as useLocale, t as syncRef, v as vueExports } from "../server.mjs";
function useCustomI18n(options) {
  const router = useRouter();
  const i18n = useI18n(options);
  const switchLocalePath = useSwitchLocalePath();
  const locale = useLocale();
  syncRef(i18n.locale, locale);
  vueExports.watch(locale, (value, previous) => {
    if (value === previous)
      return;
    const path = switchLocalePath(value);
    router.replace(path);
  });
  return i18n;
}
export {
  useCustomI18n as u
};
//# sourceMappingURL=useCustomI18n-DFkNUFOb.js.map
