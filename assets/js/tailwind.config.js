/* Tech Care – Tailwind theme (loaded right after the Tailwind Play CDN script) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe0e3',
          200: '#ffc6cb',
          300: '#ff9ba4',
          400: '#ff5f6e',
          500: '#f52b3e',
          600: '#e11d2e',
          700: '#bd1425',
          800: '#9c1322',
          900: '#821522',
          950: '#47060d'
        },
        ink: {
          DEFAULT: '#0a0a0b',
          900: '#0a0a0b',
          800: '#141417',
          700: '#1f1f24',
          600: '#2c2c33',
          500: '#3f3f47',
          400: '#6b6b74'
        },
        smoke: '#f5f5f6'
      },
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'system-ui', '-apple-system', 'sans-serif'],
        bn: ['Hind Siliguri', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 34px -16px rgba(10,10,11,.22)',
        glow: '0 16px 44px -16px rgba(225,29,46,.55)'
      },
      maxWidth: {
        '8xl': '88rem'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite'
      }
    }
  }
}
