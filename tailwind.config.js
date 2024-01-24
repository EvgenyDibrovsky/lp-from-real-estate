/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '10px', // small devices, tablets
        md: '15px', // medium devices, small laptops
        lg: '20px', // large devices, laptops
        xl: '25px', // extra large devices, large laptops, desktops
        xxl: '30px', // xxl devices, large desktops
        '2xl': '35px', // Full HD screens
      },
    },
    fontSize: {
      textBase: ['16px', '150%'],
      navMenu: ['14px', '16px'],
      titleH1: ['60px', '70px'],
      titleH1Mob: ['40px', '50px'],
      titleH2: ['48px', '115%'],
      titleH2Mob: ['40px', '115%'],
      titleH3: ['28px', '115%'],
      textCards: ['14px', '150%'],

      subTitle: ['12px', '150%'],
      textNavFooter: ['14px', '16px'],
      navMenuMobile: ['18px', '16px'],
      textBtn: ['16px', '16px'],
      textSectionInstagram: ['40px', '120%'],
      textSectionInstagramMob: ['30px', '120%'],
    },
    extend: {
      colors: {
        colorBase: '#111111',
        colorLight: '#F5F0EC',
        colorLightHover: '#b2b2b2',
        textLight: '#F5F0EC',
        bgLight: '#F5F0EC',
        bgBlue: '#0088c4',
        textBlue: '#0088c4',
        bordeBlue: '#0088c4',
        fillBlue: '#0088c4',
        borderBlue: '#0088c4',
        bgSectionGray: '#F5F0EC',
        bgSectionBlue: '#0088c4',
        bgHeader: '#00183C',
        bgHeaderFixed: '#F9F9F9',
        navHeader: '#333',
        bgFooter: '#2C2C2C',
      },
      keyframes: {
        'fade-in-el': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-el-scale': {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'slide-up-el': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-up-el-scale': {
          '0%': {
            transform: 'translateY(100%) scale(0.3)',
            opacity: 0,
          },
          '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
        },
        'slide-down-el': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down-el-scale': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left-el': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-left-el-scale': {
          '0%': {
            transform: 'translateX(30%) scale(0.70)',
            opacity: 0,
          },
          '100%': { transform: 'translateX(0) scale(1)', opacity: 1 },
        },
        'slide-right-el': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right-el-scale': {
          '0%': {
            transform: 'translateX(-30%) scale(0.70)',
            opacity: 0,
          },
          '100%': { transform: 'translateX(0) scale(1)', opacity: 1 },
        },
      },
      animation: {
        'animate-1': 'fade-in-el 1s ease-out',
        'animate-1-1': 'fade-in-el-scale 1s ease-out',
        'animate-2': 'slide-up-el 1s ease-out',
        'animate-2-2': 'slide-up-el-scale 1s ease-out',
        'animate-3': 'slide-down-el 1s ease-out',
        'animate-3-3': 'slide-down-el-scale 1s ease-out',
        'animate-4': 'slide-left-el 1s ease-out',
        'animate-4-4': 'slide-left-el-scale 1s ease-out',
        'animate-5': 'slide-right-el 1s ease-out',
        'animate-5-5': 'slide-right-el-scale 1s ease-out',
      },
    },
  },
  plugins: [],
};
