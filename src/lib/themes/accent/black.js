// Black Theme Configuration
const guiColors = {
    // Motion (Black version)
    'motion-primary': '#000000', // Pure Black
    'motion-primary-transparent': '#000000E6', // Highly opaque black
    'motion-tertiary': '#1A1A1A', // Dark Gray for borders/depth

    // Looks (Black version)
    'looks-secondary': '#000000',
    'looks-transparent': '#00000059', // Transparent black
    'looks-light-transparent': '#00000026', // Very transparent black
    'looks-secondary-dark': 'hsla(0, 0%, 10%, 1)', // Charcoal / Dark Gray shade

    // Extensions (Black version)
    'extensions-primary': 'hsla(0, 0%, 0%, 1)', // Black
    'extensions-tertiary': 'hsla(0, 0%, 20%, 1)', // Anthracite Gray for depth
    'extensions-transparent': 'hsla(0, 0%, 0%, 0.35)',
    'extensions-light': 'hsla(0, 0%, 80%, 1)', // Light Gray (for text contrast)

    // Drop Highlight
    'drop-highlight': '#333333' // Medium-Dark Gray for subtle contrast
};

const blockColors = {
    checkboxActiveBackground: '#000000', // Black checkbox when active
    checkboxActiveBorder: '#1A1A1A'      // Very Dark Gray border
};

export {
    guiColors,
    blockColors
};
