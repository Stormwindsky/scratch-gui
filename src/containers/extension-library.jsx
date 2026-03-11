import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import log from '../lib/log';

import extensionLibraryContent, {
    galleryError,
    galleryLoading,
    galleryMore,
    stormwarpGalleryError,
    stormwarpGalleryLoading,
    stormwarpGalleryMore
} from '../lib/libraries/extensions/index.jsx';
import extensionTags from '../lib/libraries/tw-extension-tags';

import LibraryComponent from '../components/library/library.jsx';
import extensionIcon from '../components/action-menu/icon--sprite.svg';

const messages = defineMessages({
    extensionTitle: {
        defaultMessage: 'Choose an Extension',
        description: 'Heading for the extension library',
        id: 'gui.extensionLibrary.chooseAnExtension'
    }
});

const toLibraryItem = extension => {
    if (typeof extension === 'object') {
        return ({
            rawURL: extension.iconURL || extensionIcon,
            ...extension
        });
    }
    return extension;
};

const translateGalleryItem = (extension, locale) => ({
    ...extension,
    name: extension.nameTranslations[locale] || extension.name,
    description: extension.descriptionTranslations[locale] || extension.description
});

class ExtensionLibrary extends React.PureComponent {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
        this.state = {
            gallery: cachedGallery,
            galleryError: null,
            galleryTimedOut: false
        };
    }
    
    componentDidMount() {
        // Chargement basique de la galerie TurboWarp
        fetch('https://extensions.turbowarp.org/generated-metadata/extensions-v0.json')
            .then(res => res.json())
            .then(data => this.setState({gallery: data}))
            .catch(() => this.setState({galleryError: true}));
    }

    handleItemSelect(item) {
        const id = item.extensionId;
        if (id === 'stormwarp_gallery') {
            window.open(item.href, '_blank');
            return;
        }
        if (item.disabled) return;
        this.props.vm.extensionManager.loadExtensionURL(item.extensionURL || id);
    }

    render() {
        let library = extensionLibraryContent.map(toLibraryItem);

        // Ajout section TurboWarp
        library.push('---');
        if (this.state.gallery) {
            library.push(toLibraryItem(galleryMore));
            const locale = this.props.intl.locale;
            library.push(
                ...this.state.gallery
                    .filter(i => i.extensionId !== 'faceSensing')
                    .map(i => translateGalleryItem(i, locale))
                    .map(toLibraryItem)
            );
        } else if (this.state.galleryError) {
            library.push(toLibraryItem(galleryError));
        } else {
            library.push(toLibraryItem(galleryLoading));
        }

        // Ajout section StormWarp
        library.push('---');
        library.push(toLibraryItem(stormwarpGalleryMore));

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={extensionTags}
                title={this.props.intl.formatMessage(messages.extensionTitle)}
                visible={this.props.visible}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

ExtensionLibrary.propTypes = {
    intl: intlShape.isRequired,
    onCategorySelected: PropTypes.func,
    onEnableProcedureReturns: PropTypes.func,
    onOpenCustomExtensionModal: PropTypes.func,
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(ExtensionLibrary);
