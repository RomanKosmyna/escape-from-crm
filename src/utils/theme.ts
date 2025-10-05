import { jsx } from "react/jsx-runtime";

const noflash = `(function() { try {
  if (!localStorage.getItem("efc-theme-ui")) {
        const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = preferredTheme ? "dark": "light";
        localStorage.setItem("efc-theme-ui", theme);
    }

    document.documentElement.setAttribute("data-theme", localStorage.getItem("efc-theme-ui"));
} catch (e) {} })();`;

export const initColorTheme = () =>
    jsx('script', {
        key: 'theme-ui-no-flash',
        dangerouslySetInnerHTML: {
            __html: noflash,
        },
    })
