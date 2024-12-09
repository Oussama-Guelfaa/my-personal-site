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
                    DEFAULT: '#D4A373', // Beige pour les éléments accentués
                    light: '#E3B98C', // Beige Clair pour les états de survol
                    dark: '#C18E5B', // Beige Foncé pour les états actifs
                },
                secondary: {
                    DEFAULT: '#666666', // Gris Moyen pour le texte secondaire
                    light: '#999999', // Gris Clair pour certains éléments
                    dark: '#333333', // Gris Foncé pour le texte principal
                },
                background: {
                    DEFAULT: '#FFFFFF', // Blanc de fond principal
                    dark: '#F5F5F5', // Gris Clair ou Beige Clair pour les sections secondaires
                },
                text: {
                    primary: '#333333', // Gris Foncé pour le texte principal
                    secondary: '#666666', // Gris Moyen pour le texte secondaire
                    light: '#999999', // Gris Clair pour les textes moins importants
                },
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // Nouvelle police de caractères
            },
        },
    },
    plugins: [],
}