import {LitElement} from 'lit';
import {template} from './floatingheader.html';
import {style} from "./floatingheader.css";

export class FloatingHeader extends LitElement {
    static get styles() {
        return [style];
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-floatingheader', FloatingHeader);
