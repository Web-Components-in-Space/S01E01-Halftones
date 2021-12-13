import {html} from 'lit';
import '@spectrum-web-components/action-button/sp-action-button';
import '@spectrum-web-components/icon/sp-icon';
import { VectorDrawIcon, ImageIcon } from '@spectrum-web-components/icons-workflow';

export const template = function(scope) {
    return html`
        <sp-action-button>
            <sp-icon slot="icon" size="m">${VectorDrawIcon()}</sp-icon>
            Save as SVG
        </sp-action-button>
        <sp-action-button>
            <sp-icon slot="icon" size="m">${ImageIcon()}</sp-icon>
            Save as PNG
        </sp-action-button>
        <sp-action-button>
            <sp-icon slot="icon" size="m">${ImageIcon()}</sp-icon>
            Save as JPG
        </sp-action-button>
    `;
}
