import {LitElement} from 'lit';
import {template} from './sidepanel.html';
import {style} from "./sidepanel.css";

export class SidePanel extends LitElement {
    static get styles() {
        return [style];
    }

    static get properties() {
        return {
            shapeType: { type: String },
            spread: { type: Number },
            invert: { type: Boolean },
            backgroundColor: { type: String },
            halftoneColor: { type: String },
            colorTab: { type: String }
        };
    }

    sendEvent(property, value) {
        this.dispatchEvent(
            new CustomEvent('settingschange', { detail: { property, value }, bubbles: true })
        );
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-sidepanel', SidePanel);
