import {html} from 'lit';
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/theme/theme-light';
import '@spectrum-web-components/theme/scale-medium';
import 'halftone-web-component';
import '../floatingheader';
import '../floatingfooter';
import '../sidepanel';

export const template = function(scope) { return html`
    <sp-theme scale="medium" color="light">
        <ht-sidepanel></ht-sidepanel>
        <div id="main-container">
            <ht-floatingheader></ht-floatingheader>
            <halftone-svg
                  src="./assets/astronaut.jpg"
                  distance="14"
                  shapecolor="red"
                  shapetype="circles">
            </halftone-svg>
            <ht-floatingfooter></ht-floatingfooter>
        </div>
    </sp-theme>
`};
