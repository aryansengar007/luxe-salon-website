module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#000000", // black - Timeless sophistication
          50: "#F5F5F5", // gray-50
          100: "#E5E5E5", // gray-100
          900: "#000000", // black
        },
        // Secondary Colors - Warm Canvas
        secondary: {
          DEFAULT: "#F5F1EB", // warm-gray-50
          50: "#FAFAF9", // warm-gray-25
          100: "#F5F1EB", // warm-gray-50
          200: "#EBE7E1", // warm-gray-100
        },
        // Accent Colors - Rose Gold
        accent: {
          DEFAULT: "#E8B4A0", // rose-gold-400
          50: "#FDF6F3", // rose-gold-50
          100: "#F9EBE5", // rose-gold-100
          200: "#F3D7CB", // rose-gold-200
          300: "#EDC3B1", // rose-gold-300
          400: "#E8B4A0", // rose-gold-400
          500: "#D89A82", // rose-gold-500
          600: "#C88064", // rose-gold-600
        },
        // Background Colors
        background: "#FFFFFF", // white - Clean foundation
        surface: "#FAFAF9", // warm-gray-25 - Subtle elevation
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900 - Comfortable reading
          secondary: "#6B6B6B", // gray-600 - Supporting information
          tertiary: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#2D5A27", // green-800 - Booking confirmation
          50: "#E8F5E6", // green-50
          100: "#C8E6C4", // green-100
          600: "#2D5A27", // green-800
        },
        warning: {
          DEFAULT: "#B8860B", // gold-700 - Availability alerts
          50: "#FEF9E7", // gold-50
          100: "#FDF3D0", // gold-100
          600: "#B8860B", // gold-700
        },
        error: {
          DEFAULT: "#8B2635", // red-800 - Helpful corrections
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          600: "#8B2635", // red-800
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Headlines and accents
        body: ['Poppins', 'sans-serif'], // Body text and CTAs
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-lg': ['3rem', { lineHeight: '1.25' }],
        'display-md': ['2.25rem', { lineHeight: '1.3' }],
        'display-sm': ['1.875rem', { lineHeight: '1.35' }],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'modal': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'warm': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'warm-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'base': '300ms',
      },
      transitionTimingFunction: {
        'base': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fadeIn': 'fadeIn 300ms ease-out forwards',
        'slideUp': 'slideUp 300ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.125rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
      },
    },
  },
  plugins: [],
}