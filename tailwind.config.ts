import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-dana)'],
      serif: ['var(--font-dana)'],
      mono: ['var(--font-dana)'],
    },
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        background: '#F5F5F5',
      },
      gray: {
        primary: '#19191B',
        secondary: '#424242',
        tertiary: '#757575',
        line: '#C2C2C2',
        border: '#D7D5D5',
        card_border: '#E0E0E0',
        disabled: '#B4B4B4'
      },
      red: {
        DEFAULT: '#E61F10',
        secondary: '#FFCECE',
        tertiary: '#FFEAEA',
      },
      yellow: {
        DEFAULT: '#FFDC62',
        secondary: '#FFF7D9',
      },
      green: {
        DEFAULT: '#34A862',
        secondary: '#EDFFF7',
      },
      blue: {
        DEFAULT: '#1A73E8'
      },
      brand: {
        DEFAULT: '#FFC453',
        dark: '#DA9D29',
        gray: '#D2C6B2'
      }
    },
    boxShadow: {
      DEFAULT: '7px 7px 40px 0px rgba(77, 77, 77, 0.10);',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
