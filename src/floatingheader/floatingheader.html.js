import { html } from 'lit';
import '@spectrum-web-components/button/sp-button';
import '@spectrum-web-components/icon/sp-icon';
import { AddIcon } from '@spectrum-web-components/icons-workflow';

export const template = (scope) => {
    return html`<sp-button><sp-icon size="m" slot="icon">${AddIcon()}</sp-icon></sp-button>${[
        './assets/astronaut.jpg',
        './assets/iss.jpg',
        './assets/liftoff.jpg',
        './assets/space.jpg'
    ].map(photo => {
        return html`<button style='background-image: url("${photo}")'></button>`;
    })}
    `;
}
