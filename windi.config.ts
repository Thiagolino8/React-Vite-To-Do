import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#a3e635',

					secondary: '#6D3A9C',

					accent: '#51A800',

					neutral: '#525252',

					'base-100': '#525252',

					info: '#2463EB',

					success: '#16A249',

					warning: '#DB7706',

					error: '#DC2828',
				},
			},
		],
	},
	plugins: [require('daisyui')],
})
