import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan everything in /src
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        small: "375px",
        tablet: "576px",
        ipad: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontFamily: {
        san: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        MyFont: ['"My Font"', "serif"],
      },
      flexBasis: {
        big: "280px",
        large: "504px",
      },
      gridTemplateColumns: {
        big: "1fr 304px",
        large: "1fr 479px",
      },
      boxShadow: {
        navbarLink:
          "0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset",
        backButton:
          "0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset",
        dropdown:
          "0px 8px 16px 0px rgba(3, 7, 18, 0.08), 0px 0px 0px 1px rgba(3, 7, 18, 0.08)",
        greenButton:
          "0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset",
        buttonError: "0px 0px 0px 3px rgba(225, 29, 72, 0.15)",
        buttonDefault:
          "0px 0.5px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16)",
        buttonFocus: "0px 0px 0px 3px rgba(59, 130, 246, 0.20)",
        supportButton:
          "0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.5px 0px 0px rgba(3, 7, 18, 0.16)",
        shareCard:
          "0px 0px 0px 1px rgba(3, 7, 18, 0.08), 0px 1px 2px -1px rgba(3, 7, 18, 0.08), 0px 2px 4px 0px rgba(3, 7, 18, 0.04)",
        shareLinks:
          "0px 1.75px 0px 0px rgba(255, 255, 255, 0.16) inset, 0px 0.25px 0px 0px rgba(3, 7, 18, 0.16), 0px 0.5px 0px 0px rgba(3, 7, 18, 0.16)",
      },
      backgroundImage: {
        "tools-bg":
          "linear-gradient(305deg, rgba(23, 219, 123, 0.88) -73.62%, #E8E6D7 71.96%)",
        "tools-button":
          "linear-gradient(180deg, rgba(0, 12, 20, 0.00) 3.13%, rgba(0, 12, 20, 0.03) 96.87%), #FFFFFF",
        greenBg:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #21AB68",
        "green-tick": "url('/src/assets/green_tick.png')",
        "white-tick": "url('/assets/white_tick.png')",
        "check-icon": "url('/src/assets/Check icons.svg')",
        testimonial: "url('/src/assets/Testimonial-logo.svg')",
        overlay:
          "linear-gradient(180deg, rgba(1, 26, 39, 0.28) 4.69%, rgba(1, 26, 39, 0.25) 56.25%, rgba(1, 26, 39, 0.37) 100%)",
        disabled:
          "linear-gradient(180deg, rgba(0, 12, 20, 0.00) 3.13%, rgba(0, 12, 20, 0.03) 96.87%), #FFF",
        priceBg:
          "linear-gradient(180deg, rgba(0, 12, 20, 0.00) 3.13%, rgba(0, 12, 20, 0.03) 96.87%), #FFF",
      },
      colors: {
        "myGreen-400": "#21AB68",
        "green-500": "#3E7B52",
        "green-400": "#21AB68",
        "grey-100": "#E8E8EA",
        "grey-800": "#0B0B00",
        error: "#E03C00",
        borderDefault: "#E8E8EA",
        alabaster: "#F8F8F1",
        borderBgHover: "#F9F9F9",
        disabledButton:
          "linear-gradient(180deg, rgba(0, 12, 20, 0.00) 3.13%, rgba(0, 12, 20, 0.03) 96.87%), var(--white, #FFF)",
      },
      fontSize: {
        "12": ["12px", { lineHeight: "16px" }],
        "14": ["14px", { lineHeight: "18px" }],
        "16": ["16px", { lineHeight: "22px" }],
        "20": ["20px", { lineHeight: "28px", letterSpacing: "-0.8px" }],
        "24": ["24px", { lineHeight: "32px", letterSpacing: "-0.96px" }],
        "32": ["32px", { lineHeight: "39px", letterSpacing: "-1px" }],
        "40": ["40px", { lineHeight: "48.6px", letterSpacing: "-1.6px" }],
        "48": ["48px", { lineHeight: "57.6px", letterSpacing: "-1px" }],
        "64": ["64px", { lineHeight: "72px", letterSpacing: "-2px" }],
      },
    },
  },
  plugins: [],
};

export default config;
