import {LitElement} from 'lit';
import {template} from './floatingfooter.html';
import {style} from "./floatingfooter.css";

export class FloatingFooter extends LitElement {
    static get styles() {
        return [style];
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-floatingfooter', FloatingFooter);
