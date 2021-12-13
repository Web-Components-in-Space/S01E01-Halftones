import {LitElement} from 'lit';
import {template} from './floatingheader.html';
import {style} from "./floatingheader.css";

export class FloatingHeader extends LitElement {
    static get styles() {
        return [style];
    }

    static get properties() {
        return {
            image: { type: String },
        };
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-floatingheader', FloatingHeader);
