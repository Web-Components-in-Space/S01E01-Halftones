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
                
                sp-theme {
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
                }
                
                #background {
                  width: 100%;
                  height: 100%;
                }`
        ];
    }

    render() {
        return html`<sp-theme scale="medium" color="light">
            <ht-sidepanel style="background-color: blue; width: 250px; height: 100%;"></ht-sidepanel>
            <div id="main-container" style="background-color: red">
                <ht-floatingheader style="background-color: yellow; width: 100%; height: 100px;"></ht-floatingheader>
                <halftone-svg style="width: 100%; height: 100%"
                              src="./assets/astronaut.jpg"
                              distance="14"
                              shapecolor="white"
                              shapetype="circles">
                    <div id="background" style="background-color: black"></div>
                </halftone-svg>
                <ht-floatingfooter style="background-color: purple; width: 100%; height: 100px;"></ht-floatingfooter>
            </div>
        </sp-theme>`;
    }
}

customElements.define('ht-app', App);
