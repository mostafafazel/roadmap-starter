import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    // ['prose-container', 'prose prose-lg mx-auto max-w-screen-md'],
    ['prose-container', 'prose prose-lg mx-auto max-w-3xl'],
    ['title', 'font-extrabold text-6xl mb-3'],
    [
      'btn',
      'px-4 py-1 border rounded-full inline-block transition duration-200 ease-in-out cursor-pointer disabled:cursor-default disabled:bg-muted disabled:opacity-50 hover:text-primary hover:bg-secondary dark:hover:text-secondary dark:hover:bg-primary text-dark dark:text-light',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary dark:hover:text-secondary',
    ],
    ['list', 'list-disc list-inside'],
    ['flex-center', 'flex items-center justify-center'],
    ['grid-center', 'grid place-items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),

    presetTypography({
      cssExtend: {
        h1: { 
          "border-bottom": '2px solid #ccc', 
          "padding-bottom": '0.5em',
          "margin-bottom": '1em'
        },
        h2: { 
          "border-bottom": '1px solid #ddd', 
          "padding-bottom": '0.5em',
          "margin-bottom": '0.75em'
        },
        h3: { 
          "margin-top": '1em',
          "padding-top": '0.5em',
          "color": '#555'
        },
        h4: { "color": '#666' },
        h5: { "color": '#777' },
        h6: { "color": '#888' },
        p: { 
         
          "margin-bottom": '1em',
          "text-indent": '1.5em'
        },
        pre: { 
          
          "border": '1px solid #eee',
          "padding": '1em',
          "border-radius": '0.5em',
          "background-color": '#f8f8f8',
          "overflow-x": 'auto'
        },
        li: { 
        
          "margin-bottom": '0.5em',
          "list-style-type": 'disc',
          "padding-left": '1.5em'
        },
        blockquote: {
       
          color: '#666',
          fontStyle: 'italic',
          paddingLeft: '1rem',
          borderLeft: '3px solid #ccc',
          "margin": '1em 0',
        },
        code: { 
        
          color: '#d63384', 
          fontWeight: '500',
          "background-color": '#f2f2f2',
          "padding": '0.2em 0.4em',
          "border-radius": '0.25em'
        },
        a: {
          "text-decoration": 'underline',
          "color": '#0066cc',
          "transition": 'color 0.3s ease',
        },
        hr: {
          "border": 'none',
          "border-top": '1px solid #ccc',
          "margin": '2em 0'
        }
      },
    }),


    
      ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      primary: '#FF6B6B', // Coral for primary elements
      secondary: '#4ECDC4', // Mint green for secondary elements
      accent: '#FFB400', // Bright yellow for accents
      background: '#FFFFFF', // White background for light mode
      text: '#333333', // Dark gray text for light mode
      muted: '#F0F0F0', // Muted light gray for disabled elements

      darkPrimary: '#8B0000', // Coral for primary elements in dark mode
      darkSecondary: '#4ECDC4', // Mint green for secondary elements in dark mode
      darkAccent: '#FFB400', // Bright yellow for accents in dark mode
      darkBackground: '#1B1B1B', // Dark background for dark mode
      darkText: '#EEEEEE', // Light gray text for dark mode
      darkMuted: '#333333', // Muted dark gray for disabled elements
    },
    fontFamily: {
      sans: ['Picoopic', 'Fira Code','sans-serif'],
      display: ['Picoopic', 'Fira Code','sans-serif'],
      text: ['Picoopic', 'Fira Code','sans-serif'],
    },
  },
});
