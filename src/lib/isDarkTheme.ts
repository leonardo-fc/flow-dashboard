import { myReadable } from "./myReadable";

const html = document.documentElement;
const isDark = () => html.classList.contains("dark");

export const darkTheme = myReadable(isDark, (set) => {
  const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.attributeName === "class") {
        set(isDark());
      }
    }
  });

  observer.observe(html, { attributes: true });
  set(isDark());

  return () => observer.disconnect();
});
