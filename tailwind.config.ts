import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'card-background': 'hsl(var(--card-background))',
        'card-border': 'hsl(var(--card-border))',
        'input-background': 'hsl(var(--input-background))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        border: 'hsl(var(--border))'
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))'
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
        success: 'hsl(var(--success))',
        'card-background': 'hsl(var(--card-background))',
        'input-background': 'hsl(var(--input-background))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))'
      },
      borderColor: {
        'card-border': 'hsl(var(--card-border))'
      },
      borderRadius: {
        xl: '18px',
        lg: '12px',
        md: '8px',
        sm: '6px'
      },
      fontSize: {
        sm: '16px',
        lg: '22px',
        '7xl': '96px'
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700'
      }
    }
  },
  plugins: []
};
export default config;
