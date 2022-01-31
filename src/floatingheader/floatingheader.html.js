import {html} from 'lit';
import '@spectrum-web-components/button/sp-button';
import '@spectrum-web-components/icon/sp-icon';
import { AddIcon, CameraIcon } from '@spectrum-web-components/icons-workflow';
import {UPLOAD_IMAGE} from './index.js';

export const template = function(scope) {
    return html`
        <sp-button @click=${() => {
            scope.dispatchEvent(new Event(UPLOAD_IMAGE, { bubbles: true }));
        }}><sp-icon slot="icon" size="m">${AddIcon()}</sp-icon></sp-button>
        <sp-button @click=${() => {
            scope.dispatchEvent(
                    new CustomEvent('settingschange', { detail: { property: 'image', value: 'camera' }, bubbles: true }
                    ))
        }}><sp-icon slot="icon" size="m">${CameraIcon()}</sp-icon></sp-button>
        ${[
            './assets/astronaut.jpg',
            './assets/iss.jpg',
            './assets/liftoff.jpg',
            './assets/space.jpg'
        ].map(photo => {
            return html`<button ?selected=${photo === scope.image} @click=${() => {
                scope.dispatchEvent(
                    new CustomEvent('settingschange', { detail: { property: 'image', value: photo }, bubbles: true }
                ))
            }} style='background-image: url("${photo}")'></button>`;
        })}
    `;
}
