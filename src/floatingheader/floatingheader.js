import { LitElement } from 'lit';
import { style } from './floatingheader.css.js';
import { template } from './floatingheader.html.js';

export class FloatingHeader extends LitElement {
    static get styles() { return [ style ] }

    render() {
        return template(this);
    }
}

customElements.define('ht-floatingheader', FloatingHeader);
