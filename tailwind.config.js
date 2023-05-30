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
        marble: '#283555',
        'marble-title': '#333644',
        'menu-overlay': '#2C3655',
        'marble-pink': '#E7BDB7',
        offwhite: '#F7F5F3'
      },
      fontFamily: {
        montreal: ['Neue Montreal', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        ivy: ['IvyPresto Headline', 'sans-serif']
      },
      screens: {
        // Screen sizes based off of Figma link
        md: '834px',
        lg: '1024px'
      },
      fontSize: {
        'base': ['11px', {
          lineHeight: '100%',
          letterSpacing: '0.18em',
          fontWeight: '450',
        }],
        'cta': ['16px', {
          lineHeight: '19.2px',
          fontWeight: '400',
        }],
        'cta-upper': ['20px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'logo': ['20px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'hero': ['72px', {
          lineHeight: '68.4px',
          letterSpacing: '-2%',
          fontWeight: '400'
        }],
        'hero-md': ['160px', {
          lineHeight: '176px',
          letterSpacing: '-2%',
          fontWeight: '400'
        }],
        'hero-lg': ['240px', {
          lineHeight: '244px',
          letterSpacing: '-4%',
          fontWeight: '480'
        }],
        'hero-subheader': ['40px', {
          lineHeight: '42px',
          letterSpacing: '-3%',
          fontWeight: '400'
        }],
        'hero-subheader-md': ['44px', {
          lineHeight: '46.2px',
          letterSpacing: '-3%',
          fontWeight: '400'
        }],
        'hero-subheader-lg': ['82px', {
          lineHeight: '82px',
          letterSpacing: '-3%',
          fontWeight: '400'
        }],
        'menu-link': ['130px', {
          lineHeight: '110.5px',
          letterSpacing: '-3%',
          fontWeight: '400'
        }],
        'menu-link-tablet': ['96px', {
          lineHeight: '82px',
          letterSpacing: '-0.03em',
          fontWeight: '400'
        }],
        'menu-link-mobile': ['64px', {
          lineHeight: '58px',
          letterSpacing: '-0.03em',
          fontWeight: '400'
        }],
        'menu-footer': ['24px', {
          lineHeight: '28.8px',
          fontWeight: '300'
        }],
        'menu-footer-company': ['15px', {
          lineHeight: '30px',
          fontWeight: '300'
        }],
      },
      height: {
        'nav': '52px',
        'hamburger': '15px',
        'hamburger-bar': '2px',
        'menu-close': '17px',
        'big-links': '238px',
        'big-links-tablet': '340px',
        'big-links-desktop': '458px'
      },
      width: {
        'hamburger': '30px',
        'menu-close': '18px',
        'footer-links': '680px',
        'big-links': '232px',
      },
      borderRadius: {
        'xs': '1px'
      },
      padding: {
        'mobile': '12px',
        'tablet': '17px',
        'desktop': '25px',
        'mobile-x': '0 12px',
        'table-x': '0 17px',
        'desktop-x': '0 25px',
      },
      spacing: {
        'menu': '132px',
        'menu-tablet': '86px',
        'menu-mobile': '48px',
        'footer-links-desktop': '24px',
        'footer-links-tablet': '190px',
        'footer-links-mobile': '73px',
      },
    },
  },
  plugins: [],
}
