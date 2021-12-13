import {html} from 'lit';
import '@spectrum-web-components/action-button/sp-action-button';
import '@spectrum-web-components/icon/sp-icon';
import { VectorDrawIcon, ImageIcon } from '@spectrum-web-components/icons-workflow';
import { SAVE_PNG, SAVE_SVG, SAVE_JPG } from './index.js';

export const template = function(scope) {
    return html`
        <sp-action-button @click=${() => {
            scope.dispatchEvent(new Event(SAVE_SVG, { bubbles: true }));
        }}>
            <sp-icon slot="icon" size="m">${VectorDrawIcon()}</sp-icon>
            Save as SVG
        </sp-action-button>
        <sp-action-button @click=${() => {
            scope.dispatchEvent(new Event(SAVE_PNG, { bubbles: true }));
        }}>
            <sp-icon slot="icon" size="m">${ImageIcon()}</sp-icon>
            Save as PNG
        </sp-action-button>
        <sp-action-button @click=${() => {
            scope.dispatchEvent(new Event(SAVE_JPG, { bubbles: true }));
        }}>
            <sp-icon slot="icon" size="m">${ImageIcon()}</sp-icon>
            Save as JPG
        </sp-action-button>
    `;
}
