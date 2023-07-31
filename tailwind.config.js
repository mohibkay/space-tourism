/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B0D17',
        'secondary-light': '#D0D6F9',
      },
      backgroundImage: {
        'home-mobile': "url('/assets/home/mobile.jpg')",
        'home-tablet': "url('/assets/home/tablet.jpg')",
        'home-desktop': "url('/assets/home/desktop.jpg')",
      },
      fontSize: {
        'h1-sm': '80px',
        'h1-md': '150px',
        'h2-sm': '56px',
        'h2-md': '80px',
        'h2-lg': '100px',
        'h3-sm': '24px',
        'h3-md': '40px',
        'h3-lg': '56px',
        'h4-sm': '24px',
        'h4-md': '40px',
        'h4-lg': '56px',
        'h5-sm': '16px',
        'h5-md': '20px',
        'h5-lg': '28px',

        'sh-1': '28px',
        'sh-2': '14px',
        'nav-md': '14px',
        'nav-lg': '16px',
        'body-sm': ['15px', '25px'],
        'body-md': ['16px', '28px'],
        'body-lg': ['18px', '32px'],
      },
      fontFamily: {
        bellefair: 'var(--font-bellefair)',
        barlow: 'var(--font-barlow)',
      },
      opacity: {
        4: 0.04,
      },
    },
  },
  plugins: [],
};
