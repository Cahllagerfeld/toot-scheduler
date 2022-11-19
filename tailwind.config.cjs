const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			card: 'var(--color-card)',
			transparent: 'transparent',
			inherit: 'inherit',
			background: 'var(--color-background)',
			text: 'var(--color-text)',
			'text-important': 'var(--color-text-important)',
			dark: {
				0: 'var(--color-dark-0)',
				1: 'var(--color-dark-1)',
				2: 'var(--color-dark-2)',
				3: 'var(--color-dark-3)',
				4: 'var(--color-dark-4)'
			},
			light: {
				0: 'var(--color-light-0)',
				1: 'var(--color-light-1)',
				2: 'var(--color-light-2)',
				3: 'var(--color-light-3)',
				4: 'var(--color-light-4)'
			},
			primary: {
				darker: 'var(--color-primary-0)',
				main: 'var(--color-primary-1)',
				lighter: 'var(--color-primary-2)'
			},
			red: {
				darker: 'var(--color-red-0)',
				main: 'var(--color-red-1)',
				lighter: 'var(--color-red-2)'
			},
			green: {
				darker: 'var(--color-green-0)',
				main: 'var(--color-green-1)',
				lighter: 'var(--color-green-2)'
			},
			blue: {
				darker: 'var(--color-blue-0)',
				main: 'var(--color-blue-1)',
				lighter: 'var(--color-blue-2)'
			},
			yellow: {
				darker: 'var(--color-yellow-0)',
				main: 'var(--color-yellow-1)',
				lighter: 'var(--color-yellow-2)'
			},
			teal: {
				darker: 'var(--color-teal-0)',
				main: 'var(--color-teal-1)',
				lighter: 'var(--color-teal-2)'
			},
			purple: {
				darker: 'var(--color-purple-0)',
				main: 'var(--color-purple-1)',
				lighter: 'var(--color-purple-2)'
			}
		},
		backgroundImage: {
			'gradient-1': 'var(--gradient-1)',
			'gradient-2': 'var(--gradient-2)',
			'gradient-3': 'var(--gradient-3)',
			'gradient-4': 'var(--gradient-4)',
			'gradient-5': 'var(--gradient-5)',
			'gradient-6': 'var(--gradient-6)',
			'gradient-7': 'var(--gradient-7)',
			'gradient-8': 'var(--gradient-8)'
		},
		fontFamily: {
			sans: ['Manrope', ...defaultTheme.fontFamily.sans]
		},
		fontSize: {
			'display-1': ['4rem', { lineHeight: '77.45px', fontWeight: '700' }],
			'display-2': ['3.5rem', { lineHeight: '67.77px' }],
			'heading-1': ['2.5rem', { lineHeight: '54px', fontWeight: '700' }],
			'heading-2': ['2rem', { lineHeight: '40px', fontWeight: '700' }],
			'heading-3': ['1.75rem', { lineHeight: '38px', fontWeight: '700' }],
			'heading-4': ['1.5rem', { lineHeight: '32px', fontWeight: '700' }],
			body: ['1rem', { lineHeight: '1.5rem' }],
			small: ['0.75rem', { lineHeight: '15px' }],
			label: ['0.75rem', { lineHeight: '16px' }]
		},
		boxShadow: {
			none: 'none',
			'inset-1': 'var(--shadow-inset)',
			default: 'var(--shadow-card)',
			button: 'var(--shadow-button)',
			menu: 'var(--shadow-menu)',
			raised: 'var(--shadow-raised)',
			popover: 'var(--shadow-popover)',
			dialog: 'var(--shadow-dialog)'
		}
	},

	plugins: []
};

module.exports = config;
