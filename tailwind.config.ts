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
      }
    },
    inset: {
      '-10%': '-10%',
      '0': '0%',
      '0%': '0%',
      '4.8%': '4.8%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '41.5%': '41.5%',
      '42%': '42%',
      '42.3%': '42.3%',
      '44%': '44%',
      '45%': '45%',
      '45.3%': '45.3%',
      '50%': '50%',
      '54%': '54%',      
      '55%': '55%',      
      '55.8%': '55.8%',      
      '60%': '60%',
      '62%': '62%',
      '63%': '63%',
      '64%': '64%',
      '64.7%': '64.7%',
      '65%': '65%',
      '66%': '66%',
      '66.7%': '66.7%',
      '69%': '69%',
      '70%': '70%',
      '75%': '75%',
      '88%': '88%',
      '100%': '100%',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '14': '4rem',
      '20': '5rem',
      
    },
    
  },
  plugins: [],
}
export default config
