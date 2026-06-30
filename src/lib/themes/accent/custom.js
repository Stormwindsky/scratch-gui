// custom.js dans ton projet scratch-gui

// 1. Valeurs par défaut (Orange)
const defaultGuiColors = {
    'motion-primary': '#ea580c',
    'motion-primary-transparent': '#ea580ce6',
    'motion-tertiary': '#c2410c',
    'looks-secondary': '#ea580c',
    'looks-transparent': '#ea580c59',
    'looks-light-transparent': '#ea580c26',
    'looks-secondary-dark': '#9a3412',
    'extensions-primary': '#f97316',
    'extensions-tertiary': '#bc4711',
    'extensions-transparent': '#f9731659',
    'extensions-light': '#ffedd5',
    'drop-highlight': '#ffedd5'
};

const defaultBlockColors = {
    checkboxActiveBackground: '#ea580c',
    checkboxActiveBorder: '#c2410c'
};

let guiColors = { ...defaultGuiColors };
let blockColors = { ...defaultBlockColors };

// 2. Récupération dynamique depuis la page HTML
if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem('tw-custom-theme-values');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            
            // On applique les couleurs choisies par l'utilisateur
            guiColors = {
                'motion-primary': parsed.guiColors['motion-primary'],
                'motion-primary-transparent': parsed.guiColors['motion-primary'] + 'E6',
                'motion-tertiary': parsed.guiColors['motion-tertiary'],
                'looks-secondary': parsed.guiColors['looks-secondary'],
                'looks-transparent': parsed.guiColors['looks-secondary'] + '59',
                'looks-light-transparent': parsed.guiColors['looks-secondary'] + '26',
                'looks-secondary-dark': parsed.guiColors['looks-secondary-dark'],
                'extensions-primary': parsed.guiColors['extensions-primary'],
                'extensions-tertiary': parsed.guiColors['extensions-tertiary'],
                'extensions-transparent': parsed.guiColors['extensions-primary'] + '59',
                'extensions-light': parsed.guiColors['extensions-light'],
                'drop-highlight': parsed.guiColors['drop-highlight']
            };

            blockColors = {
                checkboxActiveBackground: parsed.blockColors.checkboxActiveBackground,
                checkboxActiveBorder: parsed.blockColors.checkboxActiveBorder
            };
        } catch(e) {
            console.error("Failed to parse custom theme, using orange defaults", e);
        }
    }
}

export {
    guiColors,
    blockColors
};
