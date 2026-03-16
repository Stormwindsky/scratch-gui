import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});
messages = {...messages, ...sharedMessages};
const defaultTranslator = msgObj => msgObj.defaultMessage;

const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    
    // Récupération du nom personnalisé si disponible
    const savedKustom = JSON.parse(localStorage.getItem('kustoms_config') || '{}');
    const spriteName = savedKustom.spriteName || translator(messages.sprite, {index: 1});

    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: { '`jEk@4|i[#Fk?(8x)AV.-my variable': [translator(messages.variable), 0] },
                lists: {}, broadcasts: {}, blocks: {},
                currentCostume: 0,
                costumes: [{
                    assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                    name: translator(messages.backdrop, {index: 1}),
                    md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 240, rotationCenterY: 180
                }],
                sounds: [], volume: 100
            },
            {
                isStage: false,
                name: spriteName, // Nom dynamique
                variables: {}, lists: {}, broadcasts: {}, blocks: {}, comments: {},
                currentCostume: 0,
                costumes: [{
                    assetId: '927d672925e7b99f7813735c484c6922',
                    name: 'Znak', // Nom forcé à Znak
                    bitmapResolution: 1,
                    md5ext: '927d672925e7b99f7813735c484c6922.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 30.749, rotationCenterY: 58.864
                }],
                sounds: [], volume: 100, visible: true,
                x: 0, y: 0, size: 100, direction: 90,
                draggable: false, rotationStyle: 'all around'
            }
        ],
        meta: { semver: '3.0.0', vm: '0.1.0', agent: '' }
    });
};
export default projectData;
