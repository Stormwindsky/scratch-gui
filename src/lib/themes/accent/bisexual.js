const guiColors = {
    // Thème bisexuel : Rose, Violet, Bleu
    'motion-primary': '#D60270',
    'motion-primary-transparent': '#D60270e6',
    'motion-tertiary': '#9B4F96',

    'looks-secondary': '#D60270',
    'looks-transparent': '#D6027059',
    'looks-light-transparent': '#D6027026',
    'looks-secondary-dark': '#0038A8',

    'extensions-primary': '#9B4F96',
    'extensions-tertiary': '#0038A8',
    'extensions-transparent': 'rgba(155, 79, 150, 0.35)',
    'extensions-light': '#f4c7e6',

    'drop-highlight': '#D60270',

    'menu-bar-background-image': 'linear-gradient(90deg, #D60270 0%, #D60270 40%, #9B4F96 40%, #9B4F96 60%, #0038A8 60%, #0038A8 100%)'
};

const blockColors = {
    checkboxActiveBackground: '#D60270',
    checkboxActiveBorder: '#9B4F96'
};

// Création de l'objet attendu par votre application
const accentBiesexual = {
    guiColors,
    blockColors
};

// Export par défaut pour que l'importation fonctionne dans index.js
export default accentBiesexual;
