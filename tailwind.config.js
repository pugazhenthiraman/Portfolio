/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef7ee",
          100: "#fdedd3",
          200: "#fbd7a5",
          300: "#f8bc6d",
          400: "#f59e0b",
          500: "#d97706",
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
          950: "#292524",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f3d2ff",
          300: "#e9a3ff",
          400: "#d946ef",
          500: "#c026d3",
          600: "#a21caf",
          700: "#86198f",
          800: "#701a75",
          900: "#581c87",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        surface: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        code: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-medium": "floatMedium 6s ease-in-out infinite",
        "float-fast": "floatFast 4s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-up-elegant": "slideUpElegant 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-elegant": "slideDownElegant 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-elegant": "fadeInElegant 1s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in-elegant": "scaleInElegant 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "morph": "morph 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease-in-out infinite",
        "text-shimmer": "textShimmer 2.5s ease-in-out infinite",
        "card-hover": "cardHover 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "magnetic": "magnetic 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "elastic": "elastic 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "breath": "breath 4s ease-in-out infinite",
        "parallax": "parallax 20s linear infinite",
        "orbit": "orbit 15s linear infinite",
        "liquid": "liquid 8s ease-in-out infinite",
        "glass-morph": "glassMorph 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(1deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.02)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(217, 119, 6, 0.3), 0 0 40px rgba(217, 119, 6, 0.1)",
            filter: "brightness(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(217, 119, 6, 0.6), 0 0 80px rgba(217, 119, 6, 0.2)",
            filter: "brightness(1.1)"
          },
        },
        slideUpElegant: {
          "0%": { 
            transform: "translateY(60px)", 
            opacity: "0",
            filter: "blur(4px)"
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1",
            filter: "blur(0px)"
          },
        },
        slideDownElegant: {
          "0%": { 
            transform: "translateY(-60px)", 
            opacity: "0",
            filter: "blur(4px)"
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1",
            filter: "blur(0px)"
          },
        },
        fadeInElegant: {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95)",
            filter: "blur(2px)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)",
            filter: "blur(0px)"
          },
        },
        scaleInElegant: {
          "0%": { 
            transform: "scale(0.8) rotate(-2deg)", 
            opacity: "0",
            filter: "blur(3px)"
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)", 
            opacity: "1",
            filter: "blur(0px)"
          },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        gradientShift: {
          "0%, 100%": { 
            backgroundPosition: "0% 50%",
            transform: "rotate(0deg)"
          },
          "50%": { 
            backgroundPosition: "100% 50%",
            transform: "rotate(180deg)"
          },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        cardHover: {
          "0%": { 
            transform: "translateY(0) scale(1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
          },
          "100%": { 
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(217, 119, 6, 0.2)"
          },
        },
        magnetic: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--x, 0), var(--y, 0))" },
        },
        elastic: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        breath: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        parallax: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        liquid: {
          "0%, 100%": { 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(0deg) scale(1)"
          },
          "25%": { 
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "rotate(90deg) scale(1.1)"
          },
          "50%": { 
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
            transform: "rotate(180deg) scale(0.9)"
          },
          "75%": { 
            borderRadius: "70% 30% 40% 60% / 40% 70% 60% 30%",
            transform: "rotate(270deg) scale(1.05)"
          },
        },
        glassMorph: {
          "0%, 100%": { 
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.1)"
          },
          "50%": { 
            backdropFilter: "blur(30px)",
            background: "rgba(255, 255, 255, 0.15)"
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
        code: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-orange": "0 0 30px rgba(217, 119, 6, 0.4)",
        "glow-purple": "0 0 30px rgba(192, 38, 211, 0.4)",
        "glow-lg": "0 0 50px rgba(217, 119, 6, 0.3)",
        "glow-xl": "0 0 80px rgba(217, 119, 6, 0.2)",
        "elegant": "0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)",
        "elegant-lg": "0 20px 60px rgba(0, 0, 0, 0.15), 0 5px 20px rgba(0, 0, 0, 0.08)",
        "glass": "0 8px 32px rgba(31, 38, 135, 0.37)",
        "neumorphism": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "inner-glow": "inset 0 2px 4px 0 rgba(217, 119, 6, 0.1)",
      },
      backgroundImage: {
        "gradient-radial-warm":
          "radial-gradient(ellipse at center, rgba(217, 119, 6, 0.15) 0%, transparent 70%)",
        "gradient-mesh-warm":
          "radial-gradient(circle at 20% 80%, rgba(217, 119, 6, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(192, 38, 211, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)",
        "gradient-elegant": "linear-gradient(135deg, #1c1917 0%, #292524 25%, #44403c 50%, #292524 75%, #1c1917 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "gradient-shimmer": "linear-gradient(90deg, transparent 0%, rgba(217, 119, 6, 0.4) 50%, transparent 100%)",
        "noise": "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
