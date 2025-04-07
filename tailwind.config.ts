import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New brand colors
        brand: {
          '50': '#B3EFDD',     // Light backgrounds, cards
          '100': '#7DDABE',    // Accent backgrounds, badges
          '200': '#53C2A0',    // Primary CTA color
          '300': '#33A885',    // Hover states for buttons
          '400': '#179A72',    // Emphasis borders/text
          green: '#53C2A0',    // Legacy alias
          greenDark: '#46b095',// Legacy alias
          light: '#f8fafa',    // Legacy alias
        },
        // Keep existing colors for backward compatibility
        primary: {
          DEFAULT: '#0063a5', // Blue
          light: '#0078c8',
          dark: '#004e82',
        },
        background: '#f5f5f5',
        accent: {
          DEFAULT: '#cafc01', // Bright lime green
          light: '#e1fd6e',
          dark: '#a0c900',
        },
        footer: '#000000', // Pure black for footer
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          dark: '#000000',
          heading: '#1f2937', // New semantic heading color (matches gray-900)
          body: '#4b5563',    // New semantic body color (matches gray-700)
        },
        white: '#ffffff',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    // Add plugins conditionally to avoid errors if they're not available
    // @ts-ignore
    require('@tailwindcss/typography'),
    // @ts-ignore
    require('@tailwindcss/forms'),
  ],
};

export default config;
