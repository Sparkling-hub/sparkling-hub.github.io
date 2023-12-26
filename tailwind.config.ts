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

        'curved_white_with_line': 'url("/img/curved/curved_white_with_line.svg")',
        'curved_white_without_line': 'url("/img/curved/curved_white_without_line.svg")',

        'curved_dark_without_line': 'url("/img/curved/curved_dark_without_line.svg")', 
        'curved_dark_with_line': 'url("/img/curved/curved_dark_with_line.svg")', 
        
        'curved_medium_without_line': 'url("/img/curved/curved_medium_without_line.svg")', 
        'curved_medium_with_line': 'url("/img/curved/curved_medium_with_line.svg")', 

      },
      backgroundColor: {
        'primary-light-light': '#CBF0E9',
        'primary-dark': '#285c5c',
      },
      colors: {
        primary: {
          light: '#86C0BB',          
        },
      }
    },
    inset: {
      '-10%': '-10%',
      '0': '0%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '42%': '42%',
      '42.3%': '42.3%',
      '45%': '45%',
      '50%': '50%',
      '55%': '55%',      
      '60%': '60%',
      '63%': '63%',
      '64%': '64%',
      '65%': '65%',
      '66%': '66%',
      '66.7%': '66.7%',
      '69%': '69%',
      '70%': '70%',
      '75%': '75%',
    },
    
  },
  plugins: [],
}
export default config
