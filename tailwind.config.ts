import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Single typeface: `serif` is an alias so existing `font-serif`
        // heading classes keep working without touching every component.
        'sans': ['Fira Sans', '-apple-system', 'sans-serif'],
        'serif': ['Fira Sans', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: "#1A2B5C",
          deep: "#11183a",
        },
        orange: {
          DEFAULT: "#F4A027",
        },
        paper: {
          DEFAULT: "#FBFAF7",
          2: "#F2EFE8",
        },
        ink: "#1A2B5C",
        muted: "#5b6480",
        line: "rgba(26,43,92,0.14)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-cw": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-ccw": {
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-cw": "spin-cw 26s linear infinite",
        "spin-ccw": "spin-ccw 20s linear infinite",
        "spin-cw-slow": "spin-cw 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
