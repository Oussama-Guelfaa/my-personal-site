// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#1A1A1A', // Très sombre pour les éléments principaux
                    light: '#333333', // Gris foncé pour les états hover
                    dark: '#000000', // Noir pur pour les états actifs
                },
                secondary: {
                    DEFAULT: '#2D2D2D', // Ajusté pour un gris plus contrasté
                    light: '#555555', // Gris clair ajusté
                    dark: '#1A1A1A', // Gris très sombre
                },
                background: {
                    DEFAULT: '#000000', // Fond noir principal
                    dark: '#121212', // Noir léger pour des sections secondaires
                },
                text: {
                    primary: '#FFFFFF', // Texte blanc principal
                    secondary: '#BBBBBB', // Gris clair, mais plus lisible
                    light: '#888888', // Gris moyen pour du texte moins important
                },
                link: {
                    DEFAULT: '#1E90FF', // Bleu clair pour les liens
                    hover: '#4682B4', // Bleu plus sombre pour les hover
                },
            },
            fontFamily: {
                sans: ['Lora', 'serif'], // Police principale
                serif: ['Merriweather', 'serif'], // Police alternative pour les titres
                mono: ['Fira Code', 'monospace'], // Police pour les blocs de code
            },
            spacing: {
                18: '5.5rem', // Ajout de nouveaux espacements
                22: '6.5rem',
            },
            fontSize: {
                base: '1.125rem', // 20px par défaut
                lg: '1.25rem', // 24px
                xl: '1.275rem', // 30px
            },
            boxShadow: {
                // Glow effect for the profile image
                glow: '0 0 15px 5px rgba(72, 187, 255, 0.6), 0 0 30px 10px rgba(72, 187, 255, 0.4)',
            },
            animation: {
                // Animation for pulsing glow effect
                pulse: 'pulse 2s infinite',
            },
            keyframes: {
                // Keyframes for the pulsing glow
                pulse: {
                    '0%, 100%': {
                        boxShadow: '0 0 15px 5px rgba(72, 187, 255, 0.6), 0 0 30px 10px rgba(72, 187, 255, 0.4)',
                    },
                    '50%': {
                        boxShadow: '0 0 20px 10px rgba(72, 187, 255, 0.8), 0 0 40px 20px rgba(72, 187, 255, 0.5)',
                    },
                },
            },
        },
    },
    plugins: [],
}