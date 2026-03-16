import projectData from './project-data';
import overrideDefaultProject from '!arraybuffer-loader!./override-default-project.sb3';
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import defaultZnak from '!raw-loader!./Znak.svg';
import {TextEncoder} from '../tw-text-encoder';

const defaultProject = async (translator) => {
    if (overrideDefaultProject.byteLength > 0) {
        return [{ id: 0, assetType: 'Project', dataFormat: 'JSON', data: overrideDefaultProject }];
    }

    const encoder = new TextEncoder();
    const savedKustom = JSON.parse(localStorage.getItem('kustoms_config') || '{}');
    
    // Si une URL est définie, on la récupère, sinon on utilise le fichier par défaut
    let svgData = defaultZnak;
    if (savedKustom.spriteUrl) {
        try {
            const response = await fetch(savedKustom.spriteUrl);
            svgData = await response.text();
        } catch (e) { console.error("Could not load custom SVG", e); }
    }

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '927d672925e7b99f7813735c484c6922',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(svgData)
    }];
};
export default defaultProject;
