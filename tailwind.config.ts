/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "docs/content/**/*.md"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans].join(","),
      title: ["Playfair Display", ...defaultTheme.fontFamily.sans].join(","),
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.200"),
          },
        },
      }),
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      keyframes: {
        "skeleton-loading": {
          "0%": { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        skeleton: "skeleton-loading 2.0s ease-in-out infinite",
      },
      backgroundImage: () => ({
        "skeleton-gradient":
          "linear-gradient(45deg, #252035, #2d2a3d, #393545, #2d2a3d, #252035)",
        gradient: "linear-gradient(to bottom, #5B8DEF, #0063F7)",
      }),
      backgroundSize: {
        400: "400% 100%",
      },
      boxShadow: {
        sharp: "0 0 0 10px rgba(0, 0, 0, .50)",
      },
      colors: {
        primary: {
          DEFAULT: "#094B72",
          100: "#E7F6FF",
          50: "#F2F7FF",
          content: "#fff"
        },
        secondary: {
          DEFAULT: "#1C1B1B",
        },
        third: {
          DEFAULT: "#6EA8FF1A",
        },
      },
    },
  },
};
