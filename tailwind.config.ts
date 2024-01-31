import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'royal-blue': {
        '50': '#f0f4fe',
        '100': '#dde6fc',
        '200': '#c3d4fa',
        '300': '#9bb9f5',
        '400': '#6b94ef',
        '500': '#5378ea',
        '600': '#3351dd',
        '700': '#2a3ecb',
        '800': '#2834a5',
        '900': '#263282',
        '950': '#1b2050',
      },
    },
  },
  plugins: [],
};
export default config;
