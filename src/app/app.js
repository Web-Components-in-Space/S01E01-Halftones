import {LitElement} from 'lit';
import {template} from './app.html';
import {style} from './app.css';

export class App extends LitElement {
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
            image: { type: String },
        };
    }

    constructor() {
        super();
        this.image = './assets/astronaut.jpg';
        this.shapeType = 'hexagons';
        this.spread = 14;
        this.invert = false;
        this.halftoneColor = '#00ff00';
        this.backgroundColor = '#0000ff';
    }

    firstUpdated() {
        this.shadowRoot.addEventListener('settingschange', (event) => {
            if (event.detail && event.detail.property !== undefined) {
                this[event.detail.property] = event.detail.value;
            }
        });

        this.shadowRoot.addEventListener(SAVE_SVG, () => {});
        this.shadowRoot.addEventListener(SAVE_PNG, () => {});
        this.shadowRoot.addEventListener(SAVE_JPG, () => {});
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-app', App);
