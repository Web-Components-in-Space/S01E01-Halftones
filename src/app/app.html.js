import { html } from 'lit';
import '../sidepanel';
import '../floatingheader';
import '../floatingfooter';
import 'halftone-web-component';
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/theme/theme-light';
import '@spectrum-web-components/theme/scale-medium';

export const template = (scope) => {
    return html`<sp-theme scale="medium" color="light">
        <ht-sidepanel style="background-color: blue; width: 250px; height: 100%;"></ht-sidepanel>
        <div id="main-container">
            <ht-floatingheader></ht-floatingheader>
            <halftone-svg
                    src="./assets/astronaut.jpg"
                    distance="14"
                    shapecolor="red"
                    shapetype="circles">
            </halftone-svg>
            <ht-floatingfooter style="background-color: purple; width: 100%; height: 100px;"></ht-floatingfooter>
        </div>
    </sp-theme>`;
}
