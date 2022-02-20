import {html} from 'lit';
import 'halftone-web-component';
import '../floatingheader';

export const template = function(scope) { return html`
    <div>
        <ht-sidepanel style="background-color: blue; width: 250px; height: 100%;"></ht-sidepanel>
        <div id="main-container">
            <ht-floatingheader></ht-floatingheader>
            <halftone-svg
                  src="./assets/astronaut.jpg"
                  distance="14"
                  shapecolor="white"
                  shapetype="circles">
            </halftone-svg>
            <ht-floatingfooter style="background-color: purple; width: 100%; height: 100px;"></ht-floatingfooter>
        </div>
    </sp-theme>
`};
