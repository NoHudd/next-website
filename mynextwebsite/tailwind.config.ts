import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
  	container: {
  		center: true,
  		padding: '1.5rem'
  	},
  	extend: {
  		screens: {
  			'2xl': '1320px'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			dark: 'hsl(var(--dark))',
  			'dark-2': 'hsl(var(--dark-2))',
  			light: 'hsl(var(--light))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'infinite-scroll': 'scroll 10s linear infinite',
  			scrollY: 'scrollY 10s linear infinite',
  			'spin-slow': 'spin 10s linear infinite',
  			'spin-very-slow': 'spin 90s linear infinite',
  			'gradient-x': 'gradient-x 15s ease infinite',
  			'gradient-y': 'gradient-y 15s ease infinite',
  			'gradient-xy': 'gradient-xy 15s ease infinite',
  			'move-horizontal': 'move-horizontal 40s ease infinite',
  			'move-in-circle': 'move-in-circle 20s linear infinite',
  			'move-in-circle-reverse': 'move-in-circle 20s reverse infinite',
  			'move-vertical': 'move-vertical 30s ease infinite',
  			gradient: 'gradient 15s ease infinite',
  		},
  		keyframes: {
  			scroll: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - 1.5rem))'
  				}
  			},
  			scrollY: {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - 1rem))'
  				}
  			},
  			'gradient-y': {
  				'0%, 100%': {
  					'background-size': '400% 400%',
  					'background-position': 'center top'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'center center'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			'gradient-xy': {
  				'0%, 100%': {
  					'background-size': '400% 400%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			'move-horizontal': {
  				'0%': { transform: 'translateX(-50%) translateY(-10%)' },
  				'50%': { transform: 'translateX(50%) translateY(10%)' },
  				'100%': { transform: 'translateX(-50%) translateY(-10%)' },
  			},
  			'move-in-circle': {
  				'0%': { transform: 'rotate(0deg)' },
  				'50%': { transform: 'rotate(180deg)' },
  				'100%': { transform: 'rotate(360deg)' },
  			},
  			'move-vertical': {
  				'0%': { transform: 'translateY(-50%)' },
  				'50%': { transform: 'translateY(50%)' },
  				'100%': { transform: 'translateY(-50%)' },
  			},
  			gradient: {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' },
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
}

export default config 