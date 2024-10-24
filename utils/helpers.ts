
export function useIsHomePage() {
  const route = useRoute();
  const localePath = useLocalePath();

  // Check if the current route is the localized home route
  return computed(() => route.path === localePath('index'));
}
