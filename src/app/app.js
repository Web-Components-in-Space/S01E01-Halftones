import { LitElement } from 'lit';
import { style } from './app.css';
import { template } from './app.html';
import 'halftone-web-component';

export class App extends LitElement {
    static get styles() {
        return [style];
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-app', App);
