import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';
import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';
import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';
import faceSensingIconURL from './faceSensing/face-sensing.svg';
import faceSensingInsetIconURL from './faceSensing/face-sensing-small.svg';
import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';
import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';
import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';
import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';
import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';
import wedo2IconURL from './wedo2/wedo.png';
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';
import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';
import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';
import twIcon from './tw/tw.svg';
import customExtensionIcon from './custom/custom.svg';
import returnIcon from './custom/return.svg';
import galleryIcon from './gallery/gallery.svg';
import {APP_NAME} from '../../brand';

export default [
    {
        name: (<FormattedMessage defaultMessage="Music" description="Name for Music" id="gui.extension.music.name" />),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (<FormattedMessage defaultMessage="Play instruments and drums." description="Description for Music" id="gui.extension.music.description" />),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="Pen" description="Name for Pen" id="gui.extension.pen.name" />),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (<FormattedMessage defaultMessage="Draw with your sprites." description="Description for Pen" id="gui.extension.pen.description" />),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="Video Sensing" description="Name for Video Sensing" id="gui.extension.videosensing.name" />),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (<FormattedMessage defaultMessage="Sense motion with the camera." description="Description for Video Sensing" id="gui.extension.videosensing.description" />),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="Face Sensing" description="Name for Face Sensing" id="tw.extension.faceSensing.name" />),
        extensionId: 'faceSensing',
        extensionURL: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: faceSensingIconURL,
        insetIconURL: faceSensingInsetIconURL,
        description: (<FormattedMessage defaultMessage="Sense faces with the camera." description="Description for Face Sensing" id="tw.extension.faceSensing.description" />),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="Text to Speech" description="Name for Text to Speech" id="gui.extension.text2speech.name" />),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (<FormattedMessage defaultMessage="Make your projects talk." description="Description for Text to speech" id="gui.extension.text2speech.description" />),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (<FormattedMessage defaultMessage="Translate" description="Name for Translate" id="gui.extension.translate.name" />),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (<FormattedMessage defaultMessage="Translate text into many languages." description="Description for Translate" id="gui.extension.translate.description" />),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (<FormattedMessage defaultMessage="Make anything into a key." description="Description for Makey Makey" id="gui.extension.makeymakey.description" />),
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (<FormattedMessage defaultMessage="Connect your projects with the world." description="Description for microbit" id="gui.extension.microbit.description" />),
        tags: ['scratch'],
        featured: true,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (<FormattedMessage defaultMessage="Connecting" description="Connecting microbit" id="gui.extension.microbit.connectingMessage" />),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (<FormattedMessage defaultMessage="Build interactive robots and more." description="Description for EV3" id="gui.extension.ev3.description" />),
        tags: ['scratch'],
        featured: true,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (<FormattedMessage defaultMessage="Connecting EV3" description="Connecting EV3" id="gui.extension.ev3.connectingMessage" />),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (<FormattedMessage defaultMessage="Bring robotic creations to life." description="Description for BOOST" id="gui.extension.boost.description" />),
        tags: ['scratch'],
        featured: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (<FormattedMessage defaultMessage="Connecting" description="Connecting BOOST" id="gui.extension.boost.connectingMessage" />),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (<FormattedMessage defaultMessage="Build with motors and sensors." description="Description for WeDo" id="gui.extension.wedo2.description" />),
        tags: ['scratch'],
        featured: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (<FormattedMessage defaultMessage="Connecting" description="Connecting WeDo" id="gui.extension.wedo2.connectingMessage" />),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (<FormattedMessage defaultMessage="Sense push, pull, motion, and spin." description="Description for Vernier" id="gui.extension.gdxfor.description" />),
        tags: ['scratch'],
        featured: true,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (<FormattedMessage defaultMessage="Connecting" description="Connecting Vernier" id="gui.extension.gdxfor.connectingMessage" />),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (<FormattedMessage defaultMessage="Custom Reporters" description="Custom reporters" id="tw.customReporters.name" />),
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
        description: (<FormattedMessage defaultMessage="Allow custom blocks to output values." description="Custom reporters desc" id="tw.customReporters.description" />),
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="{APP_NAME} Blocks" description="TW Blocks" id="tw.twExtension.name" values={{ APP_NAME }} />),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (<FormattedMessage defaultMessage="Weird new blocks." description="TW blocks desc" id="tw.twExtension.description" />),
        incompatibleWithScratch: true,
        tags: ['tw'],
        featured: true
    },
    {
        name: (<FormattedMessage defaultMessage="Custom Extension" description="Custom ext" id="tw.customExtension.name" />),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (<FormattedMessage defaultMessage="Load custom extensions." description="Custom ext desc" id="tw.customExtension.description" />),
        tags: ['tw'],
        featured: true
    }
];

export const galleryLoading = {
    name: (<FormattedMessage defaultMessage="Gallery Loading" description="Loading" id="tw.gallery.loading.name" />),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (<FormattedMessage defaultMessage="Loading..." description="Loading" id="tw.gallery.loading.desc" />),
    tags: ['tw'],
    featured: true
};

export const galleryMore = {
    name: (<FormattedMessage defaultMessage="Extension Gallery" description="Gallery" id="tw.gallery.more.name" />),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (<FormattedMessage defaultMessage="More info..." description="More" id="tw.gallery.more.desc" />),
    tags: ['tw'],
    featured: true
};

export const galleryError = {
    name: (<FormattedMessage defaultMessage="Gallery Error" description="Error" id="tw.gallery.error.name" />),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (<FormattedMessage defaultMessage="Error loading." description="Error" id="tw.gallery.error.desc" />),
    tags: ['tw'],
    featured: true
};

export const stormwarpGalleryLoading = {
    name: 'StormWarp Gallery',
    href: 'https://www.stormwindsky.com/Tools/Extensions%20Library%20(StormWarp).html',
    extensionId: 'stormwarp_gallery',
    iconURL: galleryIcon,
    description: 'Loading StormWarp gallery...',
    tags: ['tw'],
    featured: true
};

export const stormwarpGalleryMore = {
    name: 'StormWarp Gallery',
    href: 'https://www.stormwindsky.com/Tools/Extensions%20Library%20(StormWarp).html',
    extensionId: 'stormwarp_gallery',
    iconURL: galleryIcon,
    description: 'Learn more about extensions at stormwindsky.com.',
    tags: ['tw'],
    featured: true
};

export const stormwarpGalleryError = {
    name: 'StormWarp Gallery',
    href: 'https://www.stormwindsky.com/Tools/Extensions%20Library%20(StormWarp).html',
    extensionId: 'stormwarp_gallery',
    iconURL: galleryIcon,
    description: 'Error loading StormWarp gallery.',
    tags: ['tw'],
    featured: true
};
