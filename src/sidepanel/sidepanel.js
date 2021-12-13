import {LitElement} from 'lit';
import {template} from './sidepanel.html';
import {style} from "./sidepanel.css";

export class SidePanel extends LitElement {
    static get styles() {
        return [style];
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-sidepanel', SidePanel);
