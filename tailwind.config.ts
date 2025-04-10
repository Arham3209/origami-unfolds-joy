
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                origami: {
                    blue: '#D3E4FD',
                    pink: '#FFDEE2',
                    green: '#F2FCE2',
                    yellow: '#FEF7CD',
                    peach: '#FDE1D3',
                    purple: '#E5DEFF',
                },
			},
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-in': {
                    '0%': { 
                        opacity: '0', 
                        transform: 'scale(0.95)' 
                    },
                    '100%': { 
                        opacity: '1', 
                        transform: 'scale(1)' 
                    }
                },
                'paper-fold': {
                    '0%': {
                        transform: 'rotateX(0deg)'
                    },
                    '50%': {
                        transform: 'rotateX(-10deg)'
                    },
                    '100%': {
                        transform: 'rotateX(0deg)'
                    }
                },
                'float': {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'paper-fold': 'paper-fold 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
			},
            transformOrigin: {
                'top': 'top',
            },
            rotate: {
                '-10': '-10deg',
            },
            transform: {
                'perspective-1000': 'perspective(1000px)',
            },
            transitionDelay: {
                '0': '0ms',
                '2000': '2000ms',
                '3000': '3000ms',
                '4000': '4000ms',
            }
		}
	},
	plugins: [
        require("tailwindcss-animate"),
        function({ addUtilities, theme, e }) {
            const values = theme('rotate');
            const rotateX = Object.entries(values).reduce((acc, [key, value]) => {
                return {
                    ...acc,
                    [`.${e(`rotate-x-${key}`)}`]: {
                        transform: `rotateX(${value})`
                    }
                };
            }, {});
            addUtilities(rotateX, ['hover']);
        }
    ],
} satisfies Config;
