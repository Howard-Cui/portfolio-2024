import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transformOrigin: {
      'left-to-right': '0%'
    },
    keyframes: {
      buttonAnimation: {
        "0%": {
          width: '0'
        },
        "100%": {
          width: '100px' 
        }
      },
      menuIn: {
        "0%": {
          transform: "scaleX(0)"
        },
        "100%": {
          transform: "scaleX(1)"
        }
      },
      bounceText: {
        '0%': {
          transform: "translateY(0)"
        },
        '100%': {
          transform: "translateY(5px)"
        }
      },
      topTicketEntry: {
        'from': {
          transform: "translateY(50px)",
          opacity: "0%",
        },
        'to': {
          transform: "translateY(0)",
          opacity: "100%"
        }
      }
    },
    animation: {
      buttonAnimation: 'buttonAnimation 2s ease-in-out 1 alternate',
      menuIn: 'menuIn 0.3s ease-in-out 1 alternate',
      bounceText: 'bounceText 1s linear infinite alternate 0s',
      topTicketEntry: 'topTicketEntry 0.5s ease-in',
      topTicketEntry_delay1: 'topTicketEntry 0.5s ease-in 0.5s',
      topTicketEntry_delay2: 'topTicketEntry 0.5s ease-in 1s',
    },
    colors: {
      'bg-dark': '#323745',
      'bg-light': '#ffffff',
      'dark-text-main': '#ffffff',
      'light-text-main': '#000000',
      'high-light': '#619cfa',
      'high-light-second': '#fc5dcd',
      'gray-color': '#87888a'
    },
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
export default config;
