/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@project/ui/tailwind.preset')],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
