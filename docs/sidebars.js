module.exports = {
  docs: [
    "GettingStarted",
    {
      type: "category",
      label: "Effects",
      items: [
        "useOnce",
        "useMount",
        "useUpdate",
        "useUnmount",
        "useTargetEffect",
        "useLayoutMount",
        "useLayoutUpdate",
        "useLayoutTargetEffect",
        "useIsomorphicLayoutEffect",
      ],
    },
    {
      type: "category",
      label: "States",
      items: [
        "useToggle",
        "useSetState",
        "useSafeState",
        "useMemoizedValue",
        "useThrottledValue",
        "useDebouncedValue",
      ],
    },
    {
      type: "category",
      label: "Callbacks",
      items: [
        "useRaf",
        "useIdle",
        "useTimeout",
        "useInterval",
        "useAnimation",
        "usePersist",
        "useRerender",
        "useThrottle",
        "useDebounce",
      ],
    },
    {
      type: "category",
      label: "Refs",
      items: [
        "useLatestRef",
        "usePreviousRef",
        "useMergedRef",
        "useMountedRef",
        "useUnmountedRef",
      ],
    },
    {
      type: "category",
      label: "Browser",
      items: [
        "useTitle",
        "useFavicon",
        "useOnline",
        "useDarkMode",
        "usePageVisible",
        "useMatchMedia",
        "useWindowSize",
        "useElementSize",
        "useClickAway",
        "useEventListener",
        "useCookie",
        "useLocalStorage",
        "useSessionStorage",
      ],
    },
    "CHANGELOG",
  ],
};
