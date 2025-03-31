import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Spice And Salt Mono SC', 'monospace'],
				nunito: ['Spice And Salt Mono SC', 'monospace'],
				playfair: ['Spice And Salt Mono SC', 'monospace'],
				salt: ['Spice And Salt Mono SC', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        eco: {
          50: '#F9FEF0',
          100: '#F5FDDF',
          200: '#EDFCC9',
          300: '#E2FCB3',
          400: '#D7FA9D',
          500: '#CCF887',
          600: '#C2F671',
          700: '#B8F45B',
          800: '#A3E246',
          900: '#8EC531',
        },
        earth: {
          100: '#F1EBE4',
          200: '#E0D6C9',
          300: '#C9B8A8',
          400: '#B09E8B',
          500: '#8D7B66',
          600: '#6D5E4B',
          700: '#574B3A',
          800: '#423A2F',
          900: '#2D2823',
        },
        sky: {
          100: '#E8F4F7',
          200: '#DAE9EF',
          300: '#C8E4EC',
          400: '#B0D4E0',
          500: '#8BBFD2',
          600: '#5FA3BD',
          700: '#4387A2',
          800: '#326878',
          900: '#204551',
        },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'carousel-up': {
          '0%': { transform: 'translateY(80%)' },
          '80%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        'carousel-right': {
          '0%': { transform: 'translateX(-80%)' },
          '80%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'carousel-down': {
          '0%': { transform: 'translateY(-80%)' },
          '80%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        'carousel-left': {
          '0%': { transform: 'translateX(80%)' },
          '80%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.8s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.8s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fade-in 0.8s ease-out 0.6s forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'carousel-up': 'carousel-up 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'carousel-right': 'carousel-right 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'carousel-down': 'carousel-down 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'carousel-left': 'carousel-left 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
