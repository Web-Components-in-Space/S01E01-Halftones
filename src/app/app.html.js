import {html} from 'lit';
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/theme/theme-light';
import '@spectrum-web-components/theme/scale-medium';
import 'halftone-web-component';
import '../floatingheader';

export const template = function(scope) { return html`
    <sp-theme scale="medium" color="light">
        <ht-sidepanel style="background-color: blue; width: 250px; height: 100%;"></ht-sidepanel>
        <div id="main-container">
            <ht-floatingheader></ht-floatingheader>
            <halftone-svg style="width: 100%; height: 100%"
                          src="./assets/astronaut.jpg"
                          distance="14"
                          shapecolor="white"
                          shapetype="circles">
                <div id="background" style="background-color: black"></div>
            </halftone-svg>
            <ht-floatingfooter style="background-color: purple; width: 100%; height: 100px;"></ht-floatingfooter>
        </div>
    </sp-theme>
`};
