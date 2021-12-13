import {html} from 'lit';
import '@spectrum-web-components/button/sp-button';
import '@spectrum-web-components/icon/sp-icon';
import { AddIcon } from '@spectrum-web-components/icons-workflow';

export const template = function(scope) {
    return html`
        <sp-button><sp-icon slot="icon" size="m">${AddIcon()}</sp-icon></sp-button>
        ${[
            './assets/astronaut.jpg',
            './assets/iss.jpg',
            './assets/liftoff.jpg',
            './assets/space.jpg'
        ].map(photo => {
            return html`<button ?selected=${photo === scope.image} style='background-image: url("${photo}")'></button>`;
        })}
    `;
}
