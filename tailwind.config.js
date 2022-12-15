/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
     container: {
      center: true,
        screens: {
          sm: '700px',
          md: '900px',
          lg: '1024px',
          xl: '1280px'
			}
    },
    extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				secondaryLight: 'var(--secondaryLight)',
				clear: 'var(--clear)',
				grey: 'var(--grey)',
				red: 'var(--red)',
				green: 'var(--green)',
				purple: 'var(--purple)',
				pink: 'var(--pink)',
				line: 'var(--line)',
				light_primary: 'var(  --light_primary)',
				night: 'var(--night)'
      },
      gridTemplateColumns: {
        4: 'repeat(auto-fill, minmax(0, var(--column-width)))'
      }
		}
  },
  plugins: []
}
