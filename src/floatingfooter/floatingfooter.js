import { LitElement } from 'lit';
import { style } from './floatingfooter.css.js';
import { template } from './floatingfooter.html.js';

export class FloatingFooter extends LitElement {
    static get styles() { return [ style ] }

    render() {
        return template(this);
    }
}

customElements.define('ht-floatingfooter', FloatingFooter);
