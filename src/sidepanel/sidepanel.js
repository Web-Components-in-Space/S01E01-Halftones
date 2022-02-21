import { LitElement } from 'lit';
import { style } from './sidepanel.css.js';
import { template } from './sidepanel.html.js';

export class SidePanel extends LitElement {
    static get styles() { return [ style ] }

    render() {
        return template(this);
    }
}

customElements.define('ht-sidepanel', SidePanel);
