import { myReadable } from "./myReadable";

const html = document.documentElement;

export const darkTheme = myReadable(
  () => html.classList.contains("dark"),
  (set) => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.attributeName === "class") {
          set(html.classList.contains("dark"));
        }
      }
    });

    observer.observe(html, { attributes: true });

    return () => observer.disconnect();
  }
);
