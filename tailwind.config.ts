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
        '50procent': '50%'
      },
      content: {
        'curved_grey_with_line': 'url("/img/curved/curved_grey_with_line.svg")',
        'curved_white_with_line': 'url("/img/curved/curved_white_with_line.svg")',
        'curved_white_without_line': 'url("/img/curved/curved_white_without_line.svg")',

        'curved_dark_without_line': 'url("/img/curved/curved_dark_without_line.svg")', 
        'curved_dark_with_line': 'url("/img/curved/curved_dark_with_line.svg")', 
        'curved_dark_with_line_white': 'url("/img/curved/curved_dark_without_line_white.svg")', 
        'curved_white_with_line_bottom': 'url("/img/curved/curved_white_with_line_bottom.svg")',
        'curved_dark_without_line_white': 'url("/img/curved/curved_dark_without_line_WHITE_background.svg")', 
        'curved_medium_without_line': 'url("/img/curved/curved_medium_without_line.svg")', 
        'curved_medium_with_line': 'url("/img/curved/curved_medium_with_line.svg")', 


      },
      backgroundColor: {
        'primary-light-light': '#CBF0E9',
        'primary-dark': '#285c5c',
        'active-office-color': '#C73926',
        // 'partner-office-color': '#D3E5EB',
        'partner-office-color': '#3498db',
      },
      borderColor: {
        'primary-light-light': '#CBF0E9',
        'primary-dark': '#285c5c',
        'active-office-color': '#C73926',
        // 'partner-office-color': '#D3E5EB',
        'partner-office-color': '#3498db',
      },
      colors: {
        primary: {
          light: '#86C0BB',          
        },
      },
      keyframes: {
        wiggle:{
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        }
        
        
      },
      animation: {
        wiggle: 'wiggle 30s linear infinite',
      },

    }, 
  },
  plugins: [],
}
export default config
