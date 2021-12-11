import {LitElement} from 'lit';
import {template} from './app.html';
import {style} from './app.css';

export class App extends LitElement {
    static get styles() {
        return [style];
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-app', App);
