module.exports = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "Effects",
      items: [
        "useOnce",
        "useMount",
        "useUpdate",
        "useUnmount",
        "useUpdateLayoutEffect",
        "useIsomorphicLayoutEffect",
      ],
    },
    {
      type: "category",
      label: "States",
      items: ["useToggle", "useDebounced", "useThrottled"],
    },
    {
      type: "category",
      label: "Callbacks",
      items: [
        "usePersist",
        "useDebounce",
        "useThrottle",
        "useTimeout",
        "useInterval",
        "useRaf",
        "useIdle",
        "useNextFrame",
        "useAnimation",
      ],
    },
    {
      type: "category",
      label: "Refs",
      items: ["useMounted", "useLastest", "usePrevious"],
    },
    {
      type: "category",
      label: "BOM and DOM",
      items: [
        "useTitle",
        "useFavicon",
        "useOnline",
        "useDarkMode",
        "usePageVisible",
        "useWindowSize",
        "useEventListener",
        "useCookie",
        "useLocalStorage",
        "useSessionStorage",
      ],
    },
    {
      type: "category",
      label: "Utils",
      items: ["useCreate", "useRerender"],
    },
  ],
};
