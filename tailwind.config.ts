import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    "./data/**/*.{js,ts,jsx,tsx}"
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      content: {
        'curved_white_with_line': 'url("/img/curved/curved_white_with_line.svg")',
        'curved_white_without_line': 'url("/img/curved/curved_white_without_line.svg")',
        'curved_primary_dark_without_line': 'url("/img/curved/curved_primary_dark_without_line.svg")', 
        'curved_primary_dark_with_line': 'url("/img/curved/curved_primary_dark_with_line.svg")', 
      },
    },
  },
  plugins: [],
}
export default config
