import {LitElement, html, css} from 'lit';
import 'halftone-web-component';

export class App extends LitElement {
    static get styles() {
        return [
            css` 
                :host {
                  height: 100%;
                  width: 100vw;
                }
                
                div {
                  width: 100%;
                  height: 100%;
                  display: flex;
                }
                
                #main-container {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                }
                
                halftone-svg {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                }`
        ];
    }

    render() {
        return html`<div>
            <ht-sidepanel style="background-color: blue; width: 250px; height: 100%;"></ht-sidepanel>
            <div id="main-container" style="background-color: red">
                <ht-floatingheader style="background-color: yellow; width: 100%; height: 100px;"></ht-floatingheader>
                <halftone-svg
                      src="./assets/astronaut.jpg"
                      distance="14"
                      shapecolor="white"
                      shapetype="circles">
                </halftone-svg>
                <ht-floatingfooter style="background-color: purple; width: 100%; height: 100px;"></ht-floatingfooter>
            </div>
        </div>`;
    }
}

customElements.define('ht-app', App);
