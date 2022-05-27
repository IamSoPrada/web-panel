import { useLayoutEffect, useState } from "react";

interface Screens {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
const queries = [
  "(max-width: 375px)",
  "(min-width: 768px) and (max-width: 1079px)",
  "(min-width: 1080px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValues = () => mediaQueryLists.map((mql) => mql.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handleChange = () => setValues(getValues);
    mediaQueryLists.forEach((mql) =>
      mql.addEventListener("change", handleChange)
    );
    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handleChange)
      );
  });

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, idx) => ({ ...acc, [screen]: values[idx] }),
    {}
  );
};
