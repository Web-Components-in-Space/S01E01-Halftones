import { LitElement } from 'lit';
import { style } from './app.css.js';
import { template } from './app.html.js';
import 'halftone-web-component';

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

    render() {
        return template(this);
    }
}

customElements.define('ht-app', App);
